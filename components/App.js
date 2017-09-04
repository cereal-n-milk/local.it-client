import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
  add your components here
*/

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <Text>This is the entry page for all components</Text>
      </View>
    );
  }
}
