import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Saved from './Saved';
import Modal from './Modal';

const Card = (props) => {
  let card = props;
  return (
    <View style={styles.card}>
      <View style={
        {
          marginTop: 20
        }
      }>
        <Text>{card.name}</Text>
        <Image
        style={{width: 300, height: 300}}
        source={{ uri: card.image_url}} />
        <View>
          <Text>{card.name}</Text>
          <Text>Rating: {card.rating}/5</Text>
          <Text>Distance: {Math.round((card.distance * 0.00062137 + 0.00001) * 100) / 100} Miles</Text>
          <Text>Price: {card.price}</Text>
        </View>
      </View>
    </View>
  )
}

const NoMoreCards = () => {
  return (
    <View style={styles.noMoreCards}>
      <Text>Nothing Else to See Here</Text>
    </View>
  )
}

export default class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: this.props.data
    }
  }

  handleNope (card) {
    var userId = this.props.userData.fbID;
    fetch('http://localhost:3000/api/' + userId, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        liked: 'false',
        city: `${card.location.city}, ${card.location.state}`,
        business: card
      })
    })
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.props.handleYup}
        handleNope={this.handleNope.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})
