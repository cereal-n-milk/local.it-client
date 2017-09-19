import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Flatlist, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class InterestsItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 100, height: 100}}>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: this.props.item.image_url}}
          />
        </View>
        <View style={{width: 200, marginLeft: 10}}>
          <Text style={{fontWeight: 'bold'}}>{this.props.item.name}</Text>
          <Text>{this.props.item.location.address1}</Text>
          <Text>{this.props.item.location.city} {this.props.item.location.state}, {this.props.item.location.zip_code}</Text>
          <Text>Rating: {this.props.item.rating}</Text>
          <Text>Category: {this.props.item.categories[0].title}</Text>
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
            onPress={() => {
                this.setState({
                  checked: !this.state.checked
                });
                this.props.getItineraries(this.props.item);
              }
            }
          />
        </View>
      </View>
    )
  }
}
