import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Itinerary extends Component {

  constructor (props) {
    super(props);
    this.state = {
      // We need live itinerary Data
      itineraryData: [
        {
          city: 'Los Angeles',
          name: 'Labor Day Fiesta',
          itineraryList: [
            {
              "id": "venice-beach-venice",
              "name": "Venice Beach",
              "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/I16LadYQPot1iuQacfRiNQ/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/venice-beach-venice?adjust_creative=TJCJBQCAAm_aB5D00Y6-UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TJCJBQCAAm_aB5D00Y6-UQ",
              "review_count": 488,
              "categories": [
                {
                  "alias": "beaches",
                  "title": "Beaches"
                }
              ],
              "rating": 4,
              "coordinates": {
                "latitude": 33.978504,
                "longitude": -118.467698
              },
              "transactions": [],
              "location": {
                "address1": "1500 Ocean Front Walk",
                "address2": "",
                "address3": "",
                "city": "Venice",
                "zip_code": "90291",
                "country": "US",
                "state": "CA",
                "display_address": ["1500 Ocean Front Walk", "Venice, CA 90291"]
              },
              "phone": "+13106503255",
              "display_phone": "(310) 650-3255",
              "distance": 16346.07603604
            }, {
              "id": "sidecar-doughnuts-and-coffee-santa-monica-3",
              "name": "Sidecar Doughnuts & Coffee",
              "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/wgqAz3xPWJJdWFZ3ccTGvg/o.jpg",
              "is_closed": false,
              "url": "https://www.yelp.com/biz/sidecar-doughnuts-and-coffee-santa-monica-3?adjust_creative=TJCJBQCAAm_aB5D00Y6-UQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TJCJBQCAAm_aB5D00Y6-UQ",
              "review_count": 818,
              "categories": [
                {
                  "alias": "donuts",
                  "title": "Donuts"
                }, {
                  "alias": "coffee",
                  "title": "Coffee & Tea"
                }
              ],
              "rating": 4.5,
              "coordinates": {
                "latitude": 34.021437,
                "longitude": -118.49598
              },
              "transactions": [],
              "price": "$$",
              "location": {
                "address1": "631 Wilshire Blvd",
                "address2": "",
                "address3": "",
                "city": "Santa Monica",
                "zip_code": "90401",
                "country": "US",
                "state": "CA",
                "display_address": ["631 Wilshire Blvd", "Santa Monica, CA 90401"]
              },
              "phone": "+13105870022",
              "display_phone": "(310) 587-0022",
              "distance": 16695.42673522
            }
          ]
        },
        {
          city: 'Tampa',
          name: 'Hurricane Prep!',
        }
      ]
    }
  }

  viewItinerary = () => {
    console.log('This is testing click on itinerary');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.itineraryData}
          keyExtractor={(itinerary, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.itineraryItem}
              onPress={() => this.viewItinerary()}>
                <Text style={styles.itineraryText}>{`Name of Itinerary: "${item.name}
                "City: ${item.city}`}
                </Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itineraryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  itineraryText: {
    color: '#596A7F',
  },
  picker: {
    width: 1000,
    height: 1000,
  }
})
