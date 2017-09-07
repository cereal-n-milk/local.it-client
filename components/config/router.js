import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Discover from '../Discover';
import Saved from '../Saved';
import Itinerary from '../Itinerary';
import Profile from '../Profile';
import CategoryView from '../CategoryView';

export const CategoryStack = StackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: 'Discover'
    },
  },
  CategoryView: {
    screen: CategoryView,
    navigationOption: {
      //TODO: Finish connecting CategoryView to Discover
      //get data.title from Discover to display instead of hard code
      //title: ({ state }) => `${state.params.title.toUpperCase()}`
      title: 'Active Life'
    }
  },
});

export const Tabs = TabNavigator({
  Discover: {
    screen: CategoryStack
  },
  Saved : {
    screen: Saved
  },
  Itinerary: {
    screen: Itinerary
  },
  Profile: {
    screen: Profile
  }
})
