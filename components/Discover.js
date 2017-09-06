import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

/* Import categories from API to categories array */

class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = { discoveries: ['Christine', 'Francis', 'Nick', 'Schaefer'] };
  }

  render () {
    return (
      <View>{this.state.discoveries.map(person => {
        return (
        <View><Text>{person}</Text></View>
        )
      })}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  toolbarTab: {
    fontSize: 20
  }
})

export default Discover

//From Francis Ngo to Everyone: (07:39 PM)
// {array.forEach((category) => { <Link to=“”><CategoryView/></Link> }
    // <Text style={styles.toolbarTab}>
    //   Discover
    // </Text>