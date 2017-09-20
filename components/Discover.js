import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';
import categories from '../data/categories.js';
import store from '../store/locationStore';

export default class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      error: null,
      categories: categories,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        store.dispatch({
          type: 'GET_LOCATION',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  //Yelp Fetch that goes through Python
  fetchYelpData (title) {
    fetch('http://localhost:3000/api/yelp', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            latitude: store.getState().latitude,
            longitude: store.getState().longitude,
            fbID: this.props.screenProps.fbID,
            title: title
          })
    })
    .then((response) => {
      //console.log(response);
      var filtered = JSON.parse(response._bodyInit);
      filtered = JSON.parse(filtered[0]);
      //console.log('retreived data: ', filtered);
      this.props.navigation.navigate('CategoryView', {
        data: filtered,
        category: title
      });
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.categories}
          keyExtractor={(category, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={ () =>  this.fetchYelpData(item.title) }>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbarTab: {
    fontSize: 20
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  categoryText: {
    color: '#596a7f',
  }
})
