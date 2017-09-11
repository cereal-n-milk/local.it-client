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

  //TODO: WIP - fetch profile data via server's API endpoint
  componentDidMount() {
    //fetch fb profile on client side
    fetch('http://54.215.198.189:3000/api/profile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON));
    //then setState user, profile
  }

  render() {
    const data = {
      user: 'Francis Ngo',
      photo: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/16387256_10100135191637018_347784059648177463_n.jpg?oh=5e4947aa036e8676fed751f0e07cc83a&oe=5A5C5D21'
    }
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Image source={{uri: data.photo}} style={styles.avatarImage} />
          </View>
          <View style={styles.description}>
            <Text>Name: {data.user}</Text>
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
