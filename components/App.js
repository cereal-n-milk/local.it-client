import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Tabs } from './config/router';

export default class App extends Component {
  render() {
    return (
      <Tabs />
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
