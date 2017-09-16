import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class InterestByCity extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    let city = this.props.navigation.state.params.interests.city;
    let interests = this.props.navigation.state.params.interests[0].interests;
    return (
      <ScrollView>
        <FlatList
          data={interests}
          keyExtractor={(interest, index) => index }
          renderItem={ ({ item }) =>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 100, height: 100}}>
              <Image
                style={{width: 100, height: 100}}
                source={{ uri: item.image_url}}
              />
            </View>
            <View style={{width: 200, marginLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.location.address1}</Text>
              <Text>{item.location.city} {item.location.state}, {item.location.zip_code}</Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Category: {item.categories[0].title}</Text>
            </View>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50
            }}>
              <CheckBox
                center
                style={{backgroundColor: '#eaeaea'}}
                checked={this.state.checked}
              />
            </View>
          </View>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
})
