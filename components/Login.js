import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import LoginForm from './LoginForm';

export default class App extends Component {

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
    // use SafariView on iOS
    Linking.openURL(url);
  };

  render() {
    const { user } = this.state;
    const pic = {
      uri: 'https://i.imgur.com/wLw80Wv.png'
    };
    return (
      <View style={styles.container}>
        { user
          ? // show user info if already logged in
            <View style={styles.content}>
              <View style={styles.avatar}>
                <Image source={pic} style={styles.avatarImage} />
              </View>
              <Text style={styles.header}>
                Welcome {user.name}!
              </Text>
            </View>
          : // show Please log in message if not
            <View style={styles.content}>
              <View style={styles.avatar}>
                <Image source={pic} style={styles.avatarImage} />
              </View>
              <Text style={styles.header}>
                Welcome to Local.it!
              </Text>
              <Text style={styles.text}>
                Please log in to begin {'\n'}
                building your itinerary
              </Text>
            </View>
        }
        {/* login buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.loginWithFacebook}>
            <Text style={styles.buttonText}>Login with facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f8c8d',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    margin: 20,
    marginBottom: 30,
  },
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
