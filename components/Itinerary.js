import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  DeviceEventEmitter
} from 'react-native';
import axios from 'axios';

export default class Itinerary extends Component {

  constructor (props) {
    super(props);
    this.state = {
      itineraryData: null
    }
  }

  getInitialData () {
    let user = this.props.screenProps.fbID;
    axios.get('http://localhost:3000/api/' + user, { method: 'GET' })
      .then((data) => {
        this.setState({
          itineraryData: data.data.itineraryByCity
        })
      })
  }

  componentWillMount() {
    this.getInitialData();
    DeviceEventEmitter.addListener('newItinerary', (event) => {
      this.setState({
        itineraryData: event.data.itineraryByCity
      });
    });
  }

  viewItinerary = (name) => {
    this.props.navigation.navigate('MapView', {list: name});
  };

  render() {
    let location = this.props.screenProps.interestsByCity[0].city;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.itineraryData}
          keyExtractor={(itinerary, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.itineraryItem}
              onPress={() => this.viewItinerary(item.itineraryList)}>
              <ImageBackground
                style={styles.image}
                source={{ uri: item.itineraryList[0].image_url }}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.itineraryTextName}>{item.name}
                    <Text style={styles.itineraryText}>  {item.itineraryList.length} Saved</Text>
                  </Text>
                  <Text style={styles.itineraryText}>{location}</Text>
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
  itineraryTextName: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    color: '#F7F7F7',
    fontFamily: 'Avenir Light',
    fontSize: 18,
  },
  itineraryText: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'normal',
    color: '#F7F7F7',
    fontFamily: 'Avenir Light',
    fontSize: 16
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
