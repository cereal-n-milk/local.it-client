import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  Linking,
  DeviceEventEmitter,
  TouchableHighlight
} from 'react-native';
import Item from './Item';

class Hint extends Component {
  constructor(props) {
    super(props)
    this.state = { showText: true }

    setTimeout (() => {
      this.setState({ showText: false });
    }, 10000);
  }


  render () {
    let displayLeft = this.state.showText ? this.props.textLeft : ' ';
    let displayRight = this.state.showText ? this.props.textRight : ' ';
    return (
      <View style={styles.hints}>
        <Text style={styles.hint}>{displayLeft}</Text>
        <Text style={styles.hint}>{displayRight}</Text>
      </View>
    )
  }
}

export default class CategoryView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: this.props.navigation.state.params.category,
      data: this.props.navigation.state.params.data,
      item: "Suggestion",
      //hint: true,
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

  // renderModal = (visible) => {
  //   // render modal when the user is 'new'
  //   // makes the modal hide when the user clicks 'got it' button
  //   this.setState({ hint: visible })
  //   <View>
  //     <Hint />
  //   </View>
  // }


  render() {
    const category = this.state.category;
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <Hint textRight='Swipe right to Save'/>
        <Hint textLeft='Swipe left to Pass'/>
        <Text style={styles.category}>{ category }</Text>
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
  category: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  hints: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'right',
  },
  hint: {
    color: 'gray',
  }
})
