import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Profile extends Component {

  constructor (props) {
    super (props);

    this.state = {
      user: null,
      photo: null,
    }
  }

  render() {
    console.log(this.props.screenProps);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: this.props.screenProps.photo}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text>Name: {this.props.screenProps.user}</Text>
            <Text>Saved Cities: {this.props.screenProps.interestsByCity.length} </Text>
            <Text>Saved Itineraries: 4</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.logout}>
              <Text style={styles.buttonText}>Logout</Text>
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
  }
});
