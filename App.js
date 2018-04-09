import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default class App extends Component {
  render() {
    const { navigation: { navigate } } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <View style={styles.navigationButtons}>
          <Button onPress={() => navigate('FlatList')} primary raised>
            Flat List
          </Button>
          <Button onPress={() => navigate('SectionList')} primary raised>
            Section List
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navigationButtons: {},
})
