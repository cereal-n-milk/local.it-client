import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from 'react-router-native';

/* Import categories from API to categories array */

class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      discoveries: [
        {
          title: 'Active Life'
        },
        {
          title: 'Arts & Entertainment'
        },
        {
          title: 'Beauty & Spa'
        },
        {
          title: 'Local Flavor'
        },
        {
          title: 'Nightlife'
        },
        {
          title: 'Restaurants'
        },
        {
          title: 'Shopping'
        }
      ]
    };
  }

  render () {
    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.discoveries}
            renderItem={({ item }) =>
            <Link to="" style={styles.locationItem}>
              <Text>{item.title}</Text>
            </Link>
            }
          />
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
    padding: 25,
    color: '#596A7F',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
})

export default Discover;

//From Francis Ngo to Everyone: (07:39 PM)
// {array.forEach((category) => { <Link to=“”><CategoryView/></Link> }
    // <Text style={styles.toolbarTab}>
    //   Discover
    // </Text>
