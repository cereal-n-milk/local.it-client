import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Discover from 'Discover';

class AppNavigator extends Component {
  render () {
    return (
      <Navigator
        initialRouter={this.props.initialRoute}
        renderScene={this._renderScene}
        configureScene={ (route) => Navigator.SceneConfigs.FloatFromRight }
      >)
  }
}