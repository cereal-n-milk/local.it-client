import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class InterestByCity extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Interest By City page</Text>
      </View>
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
