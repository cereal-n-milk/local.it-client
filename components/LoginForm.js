import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign in with facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  buttonContainer: {
    backgroundColor: '#3B5998',
    paddingVertical: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  }
});
