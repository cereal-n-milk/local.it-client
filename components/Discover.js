import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';

import YelpConfig from '../auth/yelpConfig';

import categories from '../data/categories.js';

export default class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      categories: categories,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }


  //Yelp Fetch that goes through Python
  fetchYelpData (title) {
    console.log('about to fetch');
    fetch('http://localhost:3000/api/yelp', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            fbID: this.props.screenProps.fbID,
            title: title
          })
    })
    .then((response) => {
      console.log(response);
      var filtered = JSON.parse(response._bodyInit);
      filtered = JSON.parse(filtered[0]);
      console.log('retreived data: ', filtered);
      this.props.navigation.navigate('CategoryView', {
        data: filtered,
        category: title
      })
    })
  }

  // fetchYelpData (title) {
  //   const credentials = {
  //     appId: YelpConfig.appId,
  //     appSecret: YelpConfig.appSecret
  //   }
  //   const yelp = new YelpApi(credentials);
  //   var lat = this.state.latitude;
  //   var lng = this.state.longitude;
  //   var latlng = String(lat) + ',' + String(lng);
  //   let params = {
  //     term: title,
  //     location: latlng,
  //     limit: '30',
  //   };
  //   yelp.search(params)
  //     .then((data) => {
  //       this.props.navigation.navigate('CategoryView', {
  //         data: data.businesses,
  //         category: title })
  //       //console.log('State: ',this.state);
  //     })
  //     .catch((err) => console.log(err));
  // }

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
