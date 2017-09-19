import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import InterestsItem from './InterestsItem';

export default class InterestByCity extends Component {

  constructor (props) {
    super(props);
    this.state = {
      text: '',
      savedInterests: []
    };
    this.saveItinerary = this.saveItinerary.bind(this);
    this.getItineraries = this.getItineraries.bind(this);
  }

  getItineraries = (business) => {
    let prevState = this.state.savedInterests.slice();
    prevState.push(business);
    this.setState({
      savedInterests: prevState
    });
  }

  saveItinerary = () => {
    let userId = this.props.screenProps.fbID;
    let input = this.state.text;
    let savedInterests = this.state.savedInterests;
    fetch('http://localhost:3000/api/interests/' + userId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        itineraryName: input,
        savedInterests: savedInterests
      })
    })
    .then(console.log)
    .catch(console.log);

    //TODO: Check each item's state, if its changed to true, push them into an array. at submission, add array and input text to ItineraryList in data. Have API take care of adding info to db.
  }

  render() {
    let city = this.props.navigation.state.params.interests.city;
    let interests = this.props.navigation.state.params.interests[0].interests;
    return (
      <View>
        <View style={{backgroundColor: '#ffffff', marginBottom: 5}}>
          <Text style={{marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 5}}>Name your Itinerary</Text>
          <TextInput
            style={{height: 40, marginLeft: 15, marginRight: 15, borderColor: 'gray', borderWidth: 1, paddingLeft: 10}}
            onChangeText={(text) => this.setState({text})}
            placeholder="ex. The Art Lover's Itinerary"
            value={this.state.text}
          />
          <Button
            style={{marginTop: 5, marginBottom:5, backgroundColor: '#B9F6CA'}}
            onPress={() => this.saveItinerary()}
            title="Save.it"
          />
        </View>
        <ScrollView>
          <FlatList
            data={interests}
            extraData={this.state}
            keyExtractor={(interest, index) => index }
            renderItem={ ({ item }) =>
              <InterestsItem item={item} getItineraries={this.getItineraries}/>
            }
          />
        </ScrollView>

      </View>
    )
  }
}
