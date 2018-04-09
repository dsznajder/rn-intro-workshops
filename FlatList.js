import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import flatListData from './assets/flatListData'

export default class FlatListComponent extends Component {
  _renderItem = ({ name }) => <Text style={styles.row}>{name}</Text>

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={flatListData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => this._renderItem(item)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    fontSize: 40,
    textAlign: 'center',
  },
})
