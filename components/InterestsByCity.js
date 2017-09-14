import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

export default class InterestByCity extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  // TODO: render each interest individually
  // render a list of all Saved-Interrests
  render() {
    let city = this.props.navigation.state.params.interests.city;
    let interests = this.props.navigation.state.params.interests[0].interests;
    return (
      <View>
        <Text>{city}</Text>
        <FlatList
          data={interests}
          keyExtractor={(interest, index) => index }
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.interestItem}
              onPress={ () => console.log('woot') }>
                <View>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{ uri: item.image_url}} />
                  <Text>{item.name}</Text>
                  <Text>Rating: {item.rating}</Text>
                  <Text>Distance: {item.distance}</Text>
                  <Text>Price: {item.price}</Text>
                </View>
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
  interestItem: {

  }
})
