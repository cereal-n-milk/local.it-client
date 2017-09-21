import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackgroundImage
} from 'react-native';
import Saved from './Saved';
import Modal from './Modal';
import SwipeCards from 'react-native-swipe-cards';

const Card = (props) => {
  let card = props;
  return (
    <View style={styles.card}>
      <View>
        <Image
        style={styles.image}
        source={{ uri: card.image_url}} >
          <View style={styles.container} >
          <View style={{width: 300}}>
          </View>
            <View style={{width: 300, backgroundColor: 'rgba(255,255,255,.8)'}}>
              <Text style={styles.cardTitle}>{card.name}</Text>
              <Text style={styles.cardText}>Rating: {card.rating}/5</Text>
              <Text style={styles.cardText}>Distance: {Math.round((card.distance * 0.00062137 + 0.00001) * 100) / 100} Miles</Text>
              <Text style={styles.cardText}>Price: {card.price}</Text>
              </View>
          </View>
        </Image>
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
        showYup={false}
        showNope={false}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    height: 300,
  },
  image: {
    width: 300,
    height: 425
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontFamily: 'Avenir Light',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  cardText: {
    fontFamily: 'Avenir Light',
    bottom: 1,
    color: 'black'
  }
})
