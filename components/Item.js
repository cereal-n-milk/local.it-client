import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card]}>
        <View style={
          {
            borderStyle: 'solid',
            borderWidth: 5,
            marginTop: 20
          }
        }>
          <Image
          style={{width: 300, height: 300}}
          source = {{ uri: this.props.image_url}}/>
          <View>
            <Text>{this.props.name}</Text>
            <Text>Rating: {this.props.rating}</Text>
            <Text>Distance: {this.props.distance}</Text>
            <Text>Price: {this.props.price}</Text>
          </View>
        </View>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards
    }
  },
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
    //Edit to send post to database
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
    //Edit to send post to database
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})


const Cards = [
{
    "id": "dinosaur-coffee-los-angeles",
    "name": "Dinosaur Coffee",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/5CHIY8Iyu4S-uPHYiha9xQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/dinosaur-coffee-los-angeles?adjust_creative=TJCJBQCAAm_aB5D00Y6-UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TJCJBQCAAm_aB5D00Y6-UQ",
    "review_count": 373,
    "categories": [
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        }
    ],
    "rating": 4,
    "coordinates": {
        "latitude": 34.0952683206945,
        "longitude": -118.283839609328
    },
    "transactions": [],
    "price": "$$",
    "location": {
        "address1": "4334 W Sunset Blvd",
        "address2": "",
        "address3": "",
        "city": "Los Angeles",
        "zip_code": "90029",
        "country": "US",
        "state": "CA",
        "display_address": [
            "4334 W Sunset Blvd",
            "Los Angeles, CA 90029"
        ]
    },
    "phone": "",
    "display_phone": "",
    "distance": 5097.226532784
},
{
    "id": "dinosaur-coffee-los-angeles",
    "name": "Not Dinosaur Coffee",
    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/5CHIY8Iyu4S-uPHYiha9xQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/dinosaur-coffee-los-angeles?adjust_creative=TJCJBQCAAm_aB5D00Y6-UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TJCJBQCAAm_aB5D00Y6-UQ",
    "review_count": 373,
    "categories": [
        {
            "alias": "coffee",
            "title": "Coffee & Tea"
        }
    ],
    "rating": 4,
    "coordinates": {
        "latitude": 34.0952683206945,
        "longitude": -118.283839609328
    },
    "transactions": [],
    "price": "$$",
    "location": {
        "address1": "4334 W Sunset Blvd",
        "address2": "",
        "address3": "",
        "city": "Los Angeles",
        "zip_code": "90029",
        "country": "US",
        "state": "CA",
        "display_address": [
            "4334 W Sunset Blvd",
            "Los Angeles, CA 90029"
        ]
    },
    "phone": "",
    "display_phone": "",
    "distance": 5097.226532784
}
]

// export default class Item extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         name: "Ichiza Kitchen & Tea House",
//         image: "https://s3-media4.fl.yelpcdn.com/bphoto/EqRBNo8asZYltitUwQXtkQ/o.jpg",
//         rating: 5,
//         distance: "1.3 mi",
//         description: "Vegan, Asian Fusion",
//         money: "$$"
//       }
//     }
//   }

//   render() {
//     return (
//       <View style={
//         {
//           borderStyle: 'solid',
//           borderWidth: 5,
//           marginTop: 50
//         }
//       }>
//         <Image
//         style={{width: 400, height: 300}}
//         source = {{ uri: this.state.data.image}}/>
//         <View>
//           <Text>{this.state.data.name}</Text>
//           <Text>{this.state.data.rating}</Text>
//           <Text>{this.state.data.distance}</Text>
//           <Text>{this.state.data.description}</Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     backgroundColor: '#fff',
//   }
// })
