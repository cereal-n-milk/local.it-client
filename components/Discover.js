import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';
import YelpConfig from '../auth/yelpConfig';

/*
  TODO:
  9/7:
  Import categories from API to categories array
  Initial state will be empty categories array
  Create a fetchData function that does a call to Yelp API
  The fetchData function will setState to list of categories from Yelp API
  Categories props will passdown to its child components via Link component

  9/8:
  Using react-navigation, create props to pass down down to CategoryView
  REF: https://github.com/spencercarli/getting-started-react-navigation/blob/master/app/screens/UserDetail.js
*/

export default class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      categories: [
        {
            "alias": "active",
            "title": "Active Life",
            "parents": []
        },
        {
            "alias": "arts",
            "title": "Arts & Entertainment",
            "parents": []
        },
        {
            "alias": "beautysvc",
            "title": "Beauty & Spas",
            "parents": []
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea",
            "parents": [
                "food"
            ]
        },
        {
            "alias": "food",
            "title": "Food",
            "parents": []
        },
        {
            "alias": "localflavor",
            "title": "Local Flavor",
            "parents": []
        },
        {
            "alias": "nightlife",
            "title": "Nightlife",
            "parents": []
        },
        {
            "alias": "restaurants",
            "title": "Restaurants",
            "parents": []
        },
        {
            "alias": "shopping",
            "title": "Shopping",
            "parents": []
        },
      ]
    };
  }

  viewCategory () {
    this.props.navigation.navigate('CategoryView');
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position: ', position);
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

  fetchYelpData () {
    console.log(YelpConfig);
    const credentials = {
      appId: YelpConfig.appId,
      appSecret: YelpConfig.appSecret
    }
    const yelp = new YelpApi(credentials);
    var lat = this.state.latitude;
    var lng = this.state.longitude;
    console.log('=======================================')
    console.log('lat: ', lat);
    console.log('lng: ', lng);
    console.log('=======================================')
    var latlng = String(lat) + ',' + String(lng);
    let params = {
      term: 'coffee',
      location: latlng,
      limit: '15',
    };
    yelp.search(params)
      .then((data) => console.log(data))
      .catch((err) => err)
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
              onPress={() => this.viewCategory()}>
              <Text
                style={styles.categoryText}>
                {item.title}
              </Text>
            </TouchableOpacity>
            }
          />
        </View>
      )
    };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  fetchData() {
    var lat = this.state.position.coords.latitude
    var lng = this.state.position.coords.longitude
    var latlng = 'll=' + String(lat) + '+' + String(lng)
    var oauth = new OAuthSimple('TJCJBQCAAm_aB5D00Y6-UQ', '1SYUbI8K6gdY8sSQMuJzdkQ82bKFslKYjx_QgKzXCZG9igJRHMMrZ2N1eh9FqRsu47vH-NHK0m9pT5YzEysB9FQrg53EKOWdGDu4iZBG5t5hggamw0Q5WbgvRW-oWXYx')
    var request = oauth.sign({
      action: 'GET',
      path: 'https://api.yelp.com/v2/search',
      parameters: 'term=coffee&' + latlng,
      signatures: {
        api_key: 'TJCJBQCAAm_aB5D00Y6-UQ',
        shared_secret: '30V2TgQ4qQDWEpjsx5Nl4V7giHXppnodeGvbgyMWqXYxnZWRq5F70XKNx65BIDfe',
        access_token: '1SYUbI8K6gdY8sSQMuJzdkQ82bKFslKYjx_QgKzXCZG9igJRHMMrZ2N1eh9FqRsu47vH-NHK0m9pT5YzEysB9FQrg53EKOWdGDu4iZBG5t5hggamw0Q5WbgvRW-oWXYx',
        access_secret: '1SYUbI8K6gdY8sSQMuJzdkQ82bKFslKYjx_QgKzXCZG9igJRHMMrZ2N1eh9FqRsu47vH-NHK0m9pT5YzEysB9FQrg53EKOWdGDu4iZBG5t5hggamw0Q5WbgvRW-oWXYx'
      }
    })

    var nav = this.props.navigator;

    fetch(request.signed_url, { method: 'GET' })
    .then((response) => { return response.json() })
    .then((data) => { debugger
      // nav.push({
      //   identity: 'Results',
      //   data: data
      // })
    })
    .catch((error) => { console.log('Error: ', error) });
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

