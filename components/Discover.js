import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import CategoryView from './CategoryView';

/*
  TODO:
  Import categories from API to categories array
  Initial state will be empty categories array
  Create a fetchData function that does a call to Yelp API
  The fetchData function will setState to list of categories from Yelp API
  Categories props will passdown to its child components via Link component
*/

class Discover extends Component {

  constructor (props) {
    super(props);

    this.state = {
      mode: 'discover',
      categories: [
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
    if (this.state.mode === 'discover') {
      return (
        <NativeRouter>
        <View style={styles.container}>
              <FlatList
                data={this.state.categories}
                renderItem={({ item }) =>
                <Button
                  onPress={() => {
                    this.state.mode = 'category';
                    this.forceUpdate();
                  }}
                  title={item.title}
                  color="#841584"
                />
                }
              />
              <Route path="/CategoryView" component={CategoryView}/>
        </View>
        </NativeRouter>
      )
    } else if (this.state.mode === 'category') {
      return (
      <CategoryView/>
    )
    }
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
