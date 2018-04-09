import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Text, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import App from './App'
import FlatList from './FlatList'
import SectionList from './SectionList'

console.disableYellowBox = true // eslint-disable-line

Text.defaultProps = {
  allowFontScaling: false,
  fontSize: 20,
}

// There you can modify how your app looks like and which colors should be `primary`
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EFEFF4',
  },
}

const Scenes = {
  Main: { screen: App },
  FlatList: { screen: FlatList },
  SectionList: { screen: SectionList },
}

const Navigator = StackNavigator(Scenes, {
  initialRouteName: 'Main',
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName,
  }),
})

const Main = () => (
  <PaperProvider theme={theme}>
    <Navigator />
  </PaperProvider>
)

AppRegistry.registerComponent('RNIntroduction', () => Main)
