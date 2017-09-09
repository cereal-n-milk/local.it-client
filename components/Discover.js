import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';

/*
  TODO:
  Import categories from API to categories array
  Initial state will be empty categories array
  Create a fetchData function that does a call to Yelp API
  The fetchData function will setState to list of categories from Yelp API
  Categories props will passdown to its child components via Link component

  NOTE:
  IMPORT modified categories list from YELP API
*/

export default class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      mode: 'discover',
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  fetchYelpData () {
    const credentials = {
      appId: 'ENTER credentials',
      appSecret: 'ENTER CREDEN'
    }
    const yelp = new YelpApi(credentials);
    var lat = this.state.position.coords.latitude;
    var lng = this.state.position.coords.longitude;
    var latlng = String(lat) + ',' + String(lng);
    let params = {
      term: 'sushi',
      location: latlng,
      limit: '30',
    };
    yelp.search(params)
      .then((data) => console.log(data))
      .catch((err) => err)
  }

  viewCategory () {
    this.props.navigation.navigate('CategoryView');
  }

  render () {
    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.categories}
            renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => this.fetchYelpData()}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
            }
          />
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  toolbarTab: {
    fontSize: 20
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    color: '#596A7F',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
})

//From Francis Ngo to Everyone: (07:39 PM)
// {array.forEach((category) => { <Link to=“”><CategoryView/></Link> }
    // <Text style={styles.toolbarTab}>
    //   Discover
    // </Text>
