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
    navigationOptions: ({navigation}) => {
      console.log('navigation: ', navigation);
      //TODO: Finish connecting CategoryView to Discover
      // get data.title from Discover to display instead of hard code
      // title: ({ state }) => `${state.params.title.toUpperCase()}`,
      title: 'Category'
    }
  },
});

export const Tabs = TabNavigator({
  Discover: {
    screen: CategoryStack,
    title: 'Category',
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={28} color={tintColor}/>
      ),
    }
  },
  Saved : {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="favorite" size={28} color={tintColor}/>
      ),
    }
  },
  Itinerary: {
    screen: Itinerary,
    navigationOptions: {
      tabBarLabel: 'Itinerary',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="work" size={28} color={tintColor}/>
      ),
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={28} color={tintColor}/>
      ),
    }
  }
})
