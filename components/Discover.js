import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

/* Import categories from API to categories array */

class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = { discoveries: ['Moab', 'San Francisco', 'Boulder', 'Banff'] };
  }

  render () {
    const locationsList =
      this.state.discoveries.map(location => {
        return (
          <Link
            to=""
            underlayColor=''
            style={styles.locationItem}>
              <Text>{location}</Text>
          </Link>
        )})

    return (
      <View>
        {locationsList}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  toolbarTab: {
    fontSize: 20
  },
  locationItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    color: '#596A7F'
  }
})

export default Discover

//From Francis Ngo to Everyone: (07:39 PM)
// {array.forEach((category) => { <Link to=“”><CategoryView/></Link> }
    // <Text style={styles.toolbarTab}>
    //   Discover
    // </Text>