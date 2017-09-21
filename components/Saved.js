import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  DeviceEventEmitter,
  ImageBackground
} from 'react-native';
import axios from 'axios';

export default class Saved extends Component {

  constructor (props) {
    super(props);
    this.state = {
      user: {
        interestsByCity: []
      }
    };
  }

  componentDidMount() {
    this.getInitialData();
    DeviceEventEmitter.addListener('refreshFunc', (event)=> {
      var data = JSON.parse(event.data._bodyInit);
      this.setState({
        user: data
      })
    });
  }

  getInitialData () {
    let user = this.props.screenProps.fbID;
    axios.get('http://localhost:3000/api/' + user, { method: 'GET' })
      .then((data) => {
        this.setState({
          user: data.data
        })
      })
  }

  getInterestsByCity (city) {
  let user = this.props.screenProps.fbID;
  axios.get('http://localhost:3000/api/' + user, { method: 'GET' })
    .then((data) => {
      let savedInterest = data.data.interestsByCity.filter(element => {
        if (element.city === city) {
          return element;
        }
      });
      this.props.navigation.navigate('InterestsByCity', {
        city: city,
        interests: savedInterest,
      });
    })
    .catch(err => console.log('ERROR!', err));
  }

  getPhotoByCIty () {
    let cities = this.props.screenProps.interestsByCity;
    return cities.map(city => {
      return city.interests[0].image_url;
    });
  }

  render() {
    let photos = this.getPhotoByCIty();
    console.log('PHOTOS',photos);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.user.interestsByCity}
          keyExtractor={(city, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={ () => this.getInterestsByCity(item.city) }>
              <ImageBackground
                style={styles.image}
                source={{ uri: photos[0] }}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {item.city.slice(0, -4)}
                  </Text>
                  <Text style={styles.text}>
                    {item.interests.length} Saved Items
                  </Text>
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
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: 'gray',
    height: 100,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftColor: 'gray',
    borderRightColor: 'gray',
  },
})
