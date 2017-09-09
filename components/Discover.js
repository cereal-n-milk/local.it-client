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

  viewCategory = () => {
    this.props.navigation.navigate('CategoryView');
  }

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
      appId: 'hm9ett-9Ql1GSG7ErN8vZg',
      appSecret: 'j4p9jp2eagVP3KHa5paRMUMNn8UBFa1rnolGAXZKYnjMoWBBdTT4CUNUGpJHk06D'
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
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.data
        })
        console.log(this.state);
      })
      .catch((err) => console.log(err))

    this.viewCategory();
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

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
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

