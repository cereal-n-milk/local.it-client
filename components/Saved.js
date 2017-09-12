import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Saved extends Component {

  // viewInterestsByCity = () => {
  //   this.props.navigation.navigate('InterestsByCity');
  // }
// component will focus/blur
// async storage-a local storage
  constructor (props) {
    super(props);

    this.state = {
      interestsByCity: [
        {
          interests: [
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
            }
          ],
          dislikedInterets: [
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
          ],
          city: 'Los Angeles, CA',
        },
        {
          interests: [],
          dislikedInterests: [],
          city: 'San Francisco, CA',
        },
        {
          interests: [],
          dislikedInterests: [],
          city: 'San Diego, CA',
        },
      ]
    }
  }

  getInterestsByCity = () => {
  // onPress, fetch Saved Interests data from DB
  // navigate to InterestsByCity with params
  axios.get('api/saved')
    .then((data) => {
      this.props.navigation.navigate('InterestsByCity', {
        city: '',
        interests: ''
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.interestsByCity}
          keyExtractor={(city, index) => index }
          renderItem={({ item }) =>
          <TouchableOpacity
            style={styles.cityItem}
            onPress={ () => this.viewInterestsByCity(item.city) }>
              <Text
                style={styles.cityText}>
                {item.city}
              </Text>
          </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cityItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff'
  },
  cityText: {
    color: '#596a7f',
  }
})
