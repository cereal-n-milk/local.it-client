import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Discover from '../Discover';
import Saved from '../Saved';
import Itinerary from '../Itinerary';
import Profile from '../Profile';
import CategoryView from '../CategoryView';
import InterestsByCity from '../InterestsByCity';
import Login from '../Login';
import Map from '../Map';

export const CategoryStack = StackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: 'Choose Category',
    },
  },
  CategoryView: {
    screen: CategoryView,
    navigationOptions: {
      title: 'Category'
    },
  }
});

export const SavedStack = StackNavigator({
  Saved: {
    screen: Saved,
    navigationOptions: {
      title: 'Cities'
    },
  },
  InterestsByCity: {
    screen: InterestsByCity,
    navigationOptions: {
      title: 'Create Itinerary'
    },
  }
});

export const ItineraryStack = StackNavigator({
  Itinerary: {
    screen: Itinerary,
    navigationOptions: {
      title: 'Itinerary'
    }
  },
  MapView: {
    screen: Map,
    navigationOptions: {
      title: 'Map'
    }
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  }
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
  Saved: {
    screen: SavedStack,
    title: 'Saved',
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="favorite" size={28} color={tintColor}/>
      ),
    }
  },
  Itinerary: {
    screen: ItineraryStack,
    title: 'Itinerary',
    navigationOptions: {
      tabBarLabel: 'Itinerary',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="work" size={28} color={tintColor}/>
      ),
    }
  },
  Profile: {
    screen: ProfileStack,
    title: 'Profile',
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={28} color={tintColor}/>
      ),
    }
  }
})
