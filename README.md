# React Native Introduction

## Setup

* Clone repository
* `yarn install`
* Link `react-native-vector-icons` package with `react-native link react-native-vector-icons` command.

### TIPS:

* For easier styling and development of some basic features App is using
  [react-native-paper](https://callstack.github.io/react-native-paper/).
* [Flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Step I - Components

In React-Native we can't use any `html` tag. Use native components instead:

```js
import { Text, View } from 'react-native'

<span /> <p /> ~~ <Text>
<div /> ~~ <View>
```

TODO:

* Run project by typing `react-native run-ios` in console
* Write your first component using components from `react-native-paper` and use it in `App.js`

## Step II - Lists

We usually can do some listing in our app. ReactNative supports some listings.
We can use `FlatList` and `SectionList` directly from RN package

FlatList is basic `ScrollView` which renders data provided from props.
SectionList in addition can split them with separator

```js
import { FlatList, SectionList } from 'react-native'
```

Docs:

* [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)
* [SectionList](https://facebook.github.io/react-native/docs/sectionlist.html)

TODO:

* Create component for `FlatList`, import `flatListData` from `./assets`
* Use properly `FlatList` component, use it in `App.js`, and Style It! :)
* Repeat with `SectionList`

## Step - III Navigation

For navigating through app scenes we can use a packages,
which provides us configured and working solutions for our app:

* `react-navigation`
* `react-native-navigation`

We will use [react-navigation](https://reactnavigation.org/docs/getting-started.html),
as it is much simpler and the implementation in app is in pure JS.
It contains three different navigators with which we can build entire application:

* StackNavigator for basic navigating from scene to scene
* TabNavigator for navigation with TabBars which mostly is sticked to the bottom of our device
* DrawerNavigator is mostly used as menu because you can "open" it by swiping from frame (left/right)

For our case we will use `StackNavigator` with some basic configuration.

### TODO:

* `yarn add react-navigation`
* Create some views with buttons, after clicking will redirect into another view
* Create Navigator file (StackNavigator)
* Add possibility to navigate by clicking

## Step IV - Manual linking

In React Native sometimes we have to use native code like Java or Objective-C
with proper bindings to our application so we are linking them to include in application build (.apk, .ipa).
There are 2 approaches to do that:

* `react-native link <packageName>` - This links package to project automatically.
* Sometimes we have to do this manually because `react-native link` do not work properly with every package. So we have to follow [Instructions](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)

### TODO:

* `yarn add react-native-notifications`
* Link `react-native-notifications` by manual linking
