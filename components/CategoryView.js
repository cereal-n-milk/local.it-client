import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking } from 'react-native';
import Item from './Item.js';

export default class CategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.navigation.state.params.category,
      data: this.props.navigation.state.params.data,
      // keep item below?
      item: "Suggestion",
    }
  }

  render() {
    const category = this.state.category;
    const data = this.state.data;
    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <Button
          onPress={() => console.log('This button should return to the discover screen')}
          // make this button say name of category?
          title="Back"
          color="#841584"
        />
        <Text style={
          { marginTop: 10,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'}
        }
        >{ category }</Text>
        <Item userData={this.props.screenProps} data={data}/>
      </View>
    );
  }
}
