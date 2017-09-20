import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, DeviceEventEmitter } from 'react-native';
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

  viewItinerary = () => {
    console.log('data:', this.state.itineraryData);
    this.props.navigation.navigate('MapView', {list: this.state.itineraryData});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.itineraryData}
          keyExtractor={(itinerary, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.itineraryItem}
              onPress={() => this.viewItinerary()}>
                <View style={{width: 400, marginLeft: 10}}>
                  <Text style={styles.itineraryText}>Name of Itinerary: {item.name}</Text>
                  <Text style={styles.itineraryText}>Location: </Text>
                  <Text style={styles.itineraryText}># of Activities: {item.itineraryList.length}</Text>
                </View>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itineraryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  itineraryText: {
    color: '#596A7F',
  },
  picker: {
    width: 1000,
    height: 1000,
  }
})
