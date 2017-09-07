import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';

/*
  TODO:
  Import categories from API to categories array
  Initial state will be empty categories array
  Create a fetchData function that does a call to Yelp API
  The fetchData function will setState to list of categories from Yelp API
  Categories props will passdown to its child components via Link component

  NOTE:
  IMPORT modified categories list from YELP API
*/

export default class Discover extends Component {

  static navigationOptions = {
    tabBarLabel: 'Discover',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={28} color={tintColor}/>
    ),
  };

  constructor (props) {
    super(props);

    this.state = {
      mode: 'discover',
      categories: [
        {
            "alias": "active",
            "title": "Active Life",
            "parents": []
        },
        {
            "alias": "arts",
            "title": "Arts & Entertainment",
            "parents": []
        },
        {
            "alias": "beautysvc",
            "title": "Beauty & Spas",
            "parents": []
        },
        {
            "alias": "coffee",
            "title": "Coffee & Tea",
            "parents": [
                "food"
            ]
        },
        {
            "alias": "food",
            "title": "Food",
            "parents": []
        },
        {
            "alias": "localflavor",
            "title": "Local Flavor",
            "parents": []
        },
        {
            "alias": "nightlife",
            "title": "Nightlife",
            "parents": []
        },
        {
            "alias": "restaurants",
            "title": "Restaurants",
            "parents": []
        },
        {
            "alias": "shopping",
            "title": "Shopping",
            "parents": []
        },
      ]
    };
  }

  // fetchData() {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJSON) => {
  //       console.log(responseJSON);
  //     });
  // }
  //
  // componentDidMount() {
  //   return fetchData();
  // }

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
  container: {
    marginTop: 25
  },
  toolbarTab: {
    fontSize: 20
  },
  locationItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    color: '#596A7F',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
})

//From Francis Ngo to Everyone: (07:39 PM)
// {array.forEach((category) => { <Link to=“”><CategoryView/></Link> }
    // <Text style={styles.toolbarTab}>
    //   Discover
    // </Text>
