import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SavedCities extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Saved Cities page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
