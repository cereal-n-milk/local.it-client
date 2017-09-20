import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import Login from './Login';

export default class Profile extends Component {

  constructor (props) {
    super (props);

    this.state = {
      user: null,
      photo: null,
      loggedIn: true,
    }
  }

  // emit a logout event
  logout () {
    fetch('http://localhost:3000/logout')
      .then(() => { DeviceEventEmitter.emit('logout'); })
      .catch(console.log);
  }

  getCities () {
    console.log(this.props.screenProps.itineraryByCity);
  }

  render() {
    let user = this.props.screenProps.fbID;
    let cities = this.props.screenProps.itineraryByCity.length
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: this.props.screenProps.photo}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text style={styles.text}>
              {this.props.screenProps.user}
            </Text>
            <Text style={styles.text}>
            </Text>
            <Text style={styles.text}>
              Itineraries: {this.props.screenProps.itineraryByCity.length}
            </Text>
            <Text style={styles.text}>
              Cities: {cities}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={ () => this.logout() }>
              <Text style={styles.buttonText}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
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
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  buttonContainer: {
    margin: 20
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 4
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  text: { marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
