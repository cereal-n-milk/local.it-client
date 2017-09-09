import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Saved extends Component {

  viewSavedCities = () => {
    this.props.navigation.navigate('SavedCities');
  }

  constructor (props) {
    super(props);

    this.state = {
      interestsByCity: [
        {
          interests: [],
          dislikedInterets: [],
          city: 'Los Angeles, CA',
        },
        {
          interests: [],
          dislikedInterets: [],
          city: 'San Francisco, CA',
        },
        {
          interests: [],
          dislikedInterets: [],
          city: 'San Diego, CA',
        },
      ]
    }
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
            onPress={() => this.viewSavedCities()}>
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
