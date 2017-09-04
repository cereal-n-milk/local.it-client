import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginForm from './LoginForm';

export default class Login extends Component {

  state = {
    user: undefined
  };

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({url});
      }
    });
  };

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL=({url}) => {
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      user: JSON.parse(decodeURI(user_string))
    });
  };

  loginWithFacebook = () => {
    this.openURL('http://127.0.0.1:3000/auth/facebook');

    openURL = (url) => {
      Linking.openURL(url);
    }
  }


  render() {
    const {user} = this.state;
    return (
      <View style={styles.container}>
        <Text>This is the Login Page</Text>
      </View>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: {
    paddingVertical: 5
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 20
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5
  },
  buttons: {
    justifyContent: 'space-between',
    margin: 20,

    marginBottom: 30,
    alignItems: 'center'
  }
});
