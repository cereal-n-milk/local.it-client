import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Discover from './Discover';

// const Discover = () => (
//   <Text style={styles.toolbarTab}>
//     Discover
//   </Text>
// )

const Saved = () => (
  <Text style={styles.toolbarTab}>
    Saved
  </Text>
)

const Outings = () => (
  <Text style={styles.toolbarTab}>
    Outings
  </Text>
)

const Profile = () => (
  <Text style={styles.toolbarTab}>
    Profile
  </Text>
)

const Toolbar = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.toolbarTab}>
            <Text>Discover</Text>
        </Link>
        <Link
          to="/saved"
          underlayColor='#f0f4f7'
          style={styles.toolbarTab}>
            <Text>Saved</Text>
        </Link>
        <Link
          to="/outings"
          underlayColor='#f0f4f7'
          style={styles.toolbarTab}>
            <Text>Outings</Text>
        </Link>
        <Link
          to="/profile"
          underlayColor='#596A7F'
          style={styles.toolbarTab}>
            <Text>Profile</Text>
        </Link>
      </View>

      <Route exact path="/" component={Discover}/>
      <Route path="/saved" component={Saved}/>
      <Route path="/outings" component={Outings}/>
      <Route path="/profile" component={Profile}/>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  toolbarTab: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    color: '#596A7F'
  },
  container: {
    marginTop: 25,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EEE'
  }
});

export default Toolbar;
