import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Tabs } from './config/router';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <Login />
    )
  }
}
