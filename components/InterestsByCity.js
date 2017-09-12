import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class InterestByCity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: this.props.city,
      interests: this.props.interests,
    }
  }
  // TODO: render each interest individually
  // render a list of all Saved-Interrests
  render() {
    let interest = props;
    let city = props;
    return (
      <View style={styles.container}>
        <Text>{city}</Text>
        <Image
        style={{width: 100, height: 100}}
        source={{ uri: interests.image_url}} />
        <View>
          <Text>{interests.name}</Text>
          <Text>Rating: {interests.rating}</Text>
          <Text>Distance: {interests.distance}</Text>
          <Text>Price: {interests.price}</Text>
        </View>
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
  }
})
