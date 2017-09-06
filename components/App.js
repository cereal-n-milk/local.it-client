import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
  add your components here
*/
import Login from './Login';
import Toolbar from './Toolbar';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <Login/> */}
        <Toolbar />
      </View>
    );
  }
}