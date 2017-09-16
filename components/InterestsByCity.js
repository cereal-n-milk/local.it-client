import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox, FormLabel, FormInput, Button } from 'react-native-elements';

export default class InterestByCity extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    let city = this.props.navigation.state.params.interests.city;
    let interests = this.props.navigation.state.params.interests[0].interests;
    console.log('this is interests ', interests)
    return (
      <View>
        <View style={{backgroundColor: '#ffffff', marginTop: 5}}>
          <FormInput
            ref="form2"
            placeholder="ex: The Art Lover's Itinerary..."
          />
          <Button
            style={{marginTop: 5, backgroundColor: '#B9F6CA'}}
            onPress={() => console.log('yo')}
            title="Save.it"
          />
        </View>
        <ScrollView>
          <FlatList
            data={interests}
            extraData={this.state}
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
                  onPress={() => this.setState({
                    checked: !this.state.checked
                    })
                  }
                />
              </View>
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
                onIconPress={this.toggle()}
                checked={this.state.selected}
              />
            </View>
          </View>
          }
        />
      </ScrollView>
    )
  }
}
