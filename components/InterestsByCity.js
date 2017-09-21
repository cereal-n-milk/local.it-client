import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  DeviceEventEmitter
} from 'react-native';
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
      savedInterests: [],
      modalVisible: false
    };
    this.saveItinerary = this.saveItinerary.bind(this);
    this.getItineraries = this.getItineraries.bind(this);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
      text: ''
    })
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
      this.setModalVisible(true);
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
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#89DA3E'}}>
          <View>
            <Text style={{fontFamily: 'Avenir Light', fontSize: 24, fontWeight: 'bold', color: '#F7F7F7'}}>Itinerary Created!</Text>

            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{fontFamily: 'Avenir Light', color: '#F7F7F7'}}>Close</Text>
            </TouchableOpacity>

          </View>
         </View>
        </Modal>
        <KeyboardAvoidingView behavior="padding">
          <View style={{backgroundColor: '#F7F7F7', marginBottom: 5}}>
            <TextInput
              style={{height: 40, marginTop: 5, marginLeft: 15, marginRight: 15, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontFamily: 'Avenir Light'}}
              onChangeText={(text) => this.setState({text})}
              placeholder="Name your itinerary..."
              value={this.state.text}
            />
            <Button
              backgroundColor='#89DA3E'
              fontFamily='Avenir Light'
              style={{marginTop: 5, marginBottom: 5}}
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
