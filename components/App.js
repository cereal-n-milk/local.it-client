import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Tabs } from './config/router';
import Login from './Login';
import SaveMap from './Map';

export default class App extends Component {
  render() {
    return (
      //<Tabs />
      <Login />
      //<SaveMap />
    )
  }
}
