import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import { Tabs } from './config/router';

export default class Login extends Component {

  state = {
    user: undefined, // user has not logged in yet
  };

  // set up Linking
  componentDidMount() {
    // add event listener to handle
    Linking.addEventListener('url', this.handleOpenURL);
    // launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillMount() {
    // handles logout event
    DeviceEventEmitter.addListener('logout', () => {
      this.setState({
        user: undefined,
      });
    });
  };

  componentWillUnmount() {
    // remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
  };

  // handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

  // open URL in a browser
  openURL = (url) => {
    Linking.openURL(url);
  };

  render() {
    let { user } = this.state;
    let pic = {
      uri: 'https://i.imgur.com/seUVCVH.png'
    };
    return (
      <View style={styles.container}>
        { user
          ? // show user info if already logged in
            <Tabs screenProps={this.state.user} />
          : // show Please log in message if not
            <View style={styles.content}>
              <View style={styles.avatar}>
                <Image source={pic} style={styles.avatarImage} />
              </View>
              <Text style={styles.header}>
                Welcome to Local.it!
              </Text>
              <Text style={styles.text}>
                Log in to begin building{'\n'}
                your next adventure.
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.loginWithFacebook}>
                  <Text style={styles.buttonText}>Login with facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A4964',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    height: 200,
    width: 200,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Avenir Light',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Avenir Light',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  buttonContainer: {
    margin: 20
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 15,
    borderRadius: 2
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Avenir Light',
    fontSize: 16,
  }
});
