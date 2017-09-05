import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render() {

    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.loginWithFacebook}>
          <Text style={styles.buttonText}>Login with facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
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
