import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import categories from '../data/categories.js';
import store from '../store/locationStore';
import YelpApi from 'v3-yelp-api';

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
      var filtered = JSON.parse(response._bodyInit);
      filtered = JSON.parse(filtered[0]);
      console.log('parsed filter: ', filtered);
      this.props.navigation.navigate('CategoryView', {
        data: filtered,
        category: title
      })
    })
    .catch(err => console.log);
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.categories}
          keyExtractor={(category, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={ () =>  this.fetchYelpData(item.title) }>
              <ImageBackground
                style={styles.image}
                source={{uri: item.image_url}}
              >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.title}</Text>

                </View>
              </ImageBackground>
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
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 100,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftColor: 'gray',
    borderRightColor: 'gray',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,.4)',
    height:100,
    width: 400,
    padding: 10
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    color: '#F7F7F7',
    fontFamily: 'Avenir Light',
    fontSize: 18
  },
})
