import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

const Discover = () => (
  <Text style={styles.toolbarTab}>
    Discover
  </Text>
)

const Saved = () => {
  <Text style={styles.toolbarTab}>
    Saved
  </Text>
}

const Outings = () => {
  <Text style={styles.toolbarTab}>
    Outings
  </Text>
}

const Profile = () => {
  <Text style={styles.toolbarTab}>
    Profile
  </Text>
}

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
      </View>

      <Route exact path="/" component={Discover}/>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  toolbarTab: {
    color: 'black'
  },
  container: {
    padding: 10,
    borderColor: 'black'
  },
  toolbar: {
    padding: 10,
    borderColor: 'black'
  }
})

export default Toolbar