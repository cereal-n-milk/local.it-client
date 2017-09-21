import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  DeviceEventEmitter } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import InterestsItem from './InterestsItem';
import store from '../store/locationStore';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;

export default class InterestByCity extends Component {

  constructor (props) {
    super(props);
    this.state = {
      text: '',
      savedInterests: []
    };
    this.saveItinerary = this.saveItinerary.bind(this);
    this.getItineraries = this.getItineraries.bind(this);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  saveItinerary = () => {
    let userId = this.props.screenProps.fbID;
    let input = this.state.text;
    let savedInterests = this.state.savedInterests;
    fetch('http://localhost:3000/api/interests/' + userId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: input,
        location: savedInterests[0].location.city,
        latitude: store.getState().latitude,
        longitude: store.getState().longitude,
        itineraryList: savedInterests,
      })
    })
    .then((result) => {
      let data = JSON.parse(result._bodyInit);
      DeviceEventEmitter.emit('newItinerary',  { data: data })
    })
    .catch(console.log);
  }

  getItineraries = (business) => {
    let prevState = this.state.savedInterests.slice();
    prevState.push(business);
    this.setState({
      savedInterests: prevState
    });
  }

  render() {
    let city = this.props.navigation.state.params.interests.city;
    let interests = this.props.navigation.state.params.interests[0].interests;
    return (
      <View>
        <KeyboardAvoidingView behavior="padding">
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
        </KeyboardAvoidingView>
      </View>
    )
  }
}
