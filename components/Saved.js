import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, FlatList, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import axios from 'axios';

export default class Saved extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: {interestsByCity: []}
    };
  }

  componentWillMount() {
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.user.interestsByCity}
          keyExtractor={(city, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.cityItem}
              onPress={ () => this.getInterestsByCity(item.city) }>
                <Text style={styles.cityText}>
                  {item.city}
                </Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cityItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  cityText: {
    color: '#596a7f',
    fontFamily: 'Avenir Light',
    fontSize: 16
  }
})
