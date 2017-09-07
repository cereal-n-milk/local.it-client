import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Itinerary extends Component {

  static navigationOptions = {
    tabBarLabel: 'Itinerary',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="work" size={28} color={tintColor}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Itinerary page</Text>
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
