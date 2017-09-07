import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Saved extends Component {

  static navigationOptions = {
    tabBarLabel: 'Saved',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="favorite" size={28} color={tintColor}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Saved page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
