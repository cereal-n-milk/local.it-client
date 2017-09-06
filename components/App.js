import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
  add your components here
*/

import Login from './Login';
import Toolbar from './Toolbar';
import CategoryView from './CategoryView'

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <Toolbar />
        <Login/>
      </View>
    );
  }
}
