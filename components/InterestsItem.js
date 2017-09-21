import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Flatlist,
  TouchableOpacity
} from 'react-native';
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
      <View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 1,
      borderColor: 'gray'}}>
        <View style={{width: 100, height: 100}}>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: this.props.item.image_url}}
          />
        </View>
        <View style={styles.interestContainer}>
          <Text style={styles.interestTitle}>{this.props.item.name}</Text>
          <Text style={styles.interestText}>{this.props.item.location.address1}</Text>
          <Text style={styles.interestText}>{this.props.item.location.city} {this.props.item.location.state}, {this.props.item.location.zip_code}</Text>
          <Text style={styles.interestText}>{this.props.item.categories[0].title}</Text>
          <Text style={styles.interestText}>Rating: {this.props.item.rating}</Text>
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

const styles = StyleSheet.create({
  interestContainer: {
    width: 245,
    marginLeft: 10,
  },
  interestTitle: {
    fontFamily: 'Avenir Light',
    fontWeight: 'bold',
  },
  interestText: {
    fontFamily: 'Avenir Light'
  }
});
