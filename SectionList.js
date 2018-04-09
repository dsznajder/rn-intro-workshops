import React, { Component } from 'react'
import { View, SectionList, StyleSheet } from 'react-native'
import { Text, withTheme } from 'react-native-paper'

import sectionListData from './assets/sectionListData'

export class SectionListComponent extends Component {
  _renderItem = ({ name }) => <Text style={styles.row}>{name}</Text>
  _renderHeader = ({ title }) => (
    <View
      style={[
        styles.sectionHeaderContainer,
        { backgroundColor: this.props.theme.colors.background },
      ]}
    >
      <Text style={styles.sectionHeaderTitle}>{title}</Text>
    </View>
  )

  render() {
    return (
      <SectionList
        contentContainerStyle={styles.container}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => this._renderItem(item)}
        renderSectionHeader={({ section }) => this._renderHeader(section)}
        sections={sectionListData}
      />
    )
  }
}

export default withTheme(SectionListComponent)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    fontSize: 25,
    textAlign: 'center',
  },
  sectionHeaderTitle: {
    fontSize: 30,
  },
})
