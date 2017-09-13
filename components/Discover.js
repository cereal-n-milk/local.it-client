import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import YelpApi from 'v3-yelp-api';
import YelpConfig from '../auth/yelpConfig';

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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log('position: ', position);
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

  fetchYelpData (title) {
    const credentials = {
      appId: YelpConfig.appId,
      appSecret: YelpConfig.appSecret
    }
    const yelp = new YelpApi(credentials);
    var lat = this.state.latitude;
    var lng = this.state.longitude;
    var latlng = String(lat) + ',' + String(lng);
    var userdata = null;
    var userid = '59b8a29f99c340e0eb1e6d45'
    let params = {
      term: 'coffee',
      location: latlng,
      limit: '15',
    };

    fetch(`http://localhost:3000/api/${userid}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
        })
    .then((response) => {
      userdata = response
      yelp.search(params)
      .then((data) => {
        console.log('yelp data: ', data)
        fetch('http://localhost:3000/python', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({yelp: data, user: userdata._bodyInit})
        })
        .then((data) => {
          var target = JSON.parse(data._bodyInit)
          target = JSON.parse(target[0])
          console.log('retreived from python api: ', target)
          this.props.navigation.navigate('CategoryView', {
            data: target,
            category: title })
          //console.log('State: ',this.state);
        })
        .catch((err) => console.log(err));

      })
    })
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
