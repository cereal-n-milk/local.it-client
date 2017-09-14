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
    const data = {
      picture: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/20525192_1760217843991644_1099454805559424346_n.jpg?oh=7be8403fc1792654cb2a3ce71fb396cf&oe=5A452CA6',
      name: 'Vicki A.'
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: data.picture}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text>Name: {data.name}</Text>
            <Text>Saved Interests: 3 </Text>
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
