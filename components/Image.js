import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';

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
    // console.log('about to fetch');
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
      console.log(response);
      var filtered = JSON.parse(response._bodyInit);
      filtered = JSON.parse(filtered[0]);
      console.log('retreived data: ', filtered);
      this.props.navigation.navigate('CategoryView', {
        data: filtered,
        category: title
      })
    })
    .catch(err => console.log)
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
            <View style={styles.container}>
              <View style={styles.image}>
                <Image
                  source={{uri: item.image_url}}
                />
              </View>
              <View style={{
                 height:100, width:400}}>
                <TouchableOpacity
                  onPress={ () =>  this.fetchYelpData(item.title) }>
                  <Text style={styles.text}>{item.title}</Text>

                </TouchableOpacity>
              </View>
            </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 100,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    color: 'black',
    opacity: 1
  },
})