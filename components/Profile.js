import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Profile extends Component {

  constructor (props) {
    super (props);

    this.state = {
      user: null,
      photo: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: this.props.screenProps.photo}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text>Name: {this.props.screenProps.user}</Text>
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
    borderRadius: 75,
    height: 150,
    width: 150,
  },
})
