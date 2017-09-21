import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';

/* Import local files */
import Login from './Login';
//import Raleway from './Raleway.ttf';


export default class Profile extends Component {

  constructor (props) {
    super (props);

    this.state = {
      user: null,
      photo: null,
      loggedIn: true,
    };
  }

  // emit a logout event
  logout () {
    fetch('http://localhost:3000/logout')
      .then(() => { DeviceEventEmitter.emit('logout'); })
      .catch(console.log);
  }

  // provides a list of cities a user has saved/disliked cards for
  getCities () {
    let cities = [];
    let city = this.props.screenProps.interestsByCity;
    for (var obj in city) {
      cities.push(city[obj].city);
    }
    return cities;
  }

  render() {
    let user = this.props.screenProps.fbID;
    let cities = this.getCities();
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: this.props.screenProps.photo}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text style={styles.userText}>
              {this.props.screenProps.user}
            </Text>
            <Text style={styles.text}>
              {this.props.screenProps.itineraryByCity.length} Itineraries
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
    fontFamily: 'Avenir Light'
  },
  userText: { marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Avenir Light'
  },
  text: { marginTop: 10,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Avenir Light'
  }
});
