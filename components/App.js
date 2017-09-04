import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
  add your components here
*/
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <Login/>
        <Text>This is the entry page for all components</Text>
      </View>
    );
  }
}
