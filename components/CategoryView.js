import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking, DeviceEventEmitter } from 'react-native';
import Item from './Item';
import Hint from './Modal';

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.navigation.state.params.category,
      data: this.props.navigation.state.params.data,
      // keep item below?
      item: "Suggestion",
    };
    this.handleYup = this.handleYup.bind(this);
  }

  handleYup (card) {
    var userId = this.props.screenProps.fbID;
    fetch('http://localhost:3000/api/' + userId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        liked: 'true',
        city: `${card.location.city}, ${card.location.state}`,
        business: card
      })
    })
    .then((result) => {
      DeviceEventEmitter.emit('refreshFunc',  { data: result })
    })
  }

  render() {
    const category = this.state.category;
    const data = this.state.data;
    return (
      <View style={styles.container}>
      <Hint />
        <Text style={
          { marginTop: 10,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'}
        }
        >{ category }</Text>
        <Item handleYup={this.handleYup} userData={this.props.screenProps} data={data}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
