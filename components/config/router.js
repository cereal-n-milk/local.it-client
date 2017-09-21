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
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    },
  },
  CategoryView: {
    screen: CategoryView,
    navigationOptions: {
      title: 'Category',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    },
  }
});

export const SavedStack = StackNavigator({
  Saved: {
    screen: Saved,
    navigationOptions: {
      title: 'Cities',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    },
  },
  InterestsByCity: {
    screen: InterestsByCity,
    navigationOptions: {
      title: 'Create Itinerary',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    },
  }
});

export const ItineraryStack = StackNavigator({
  Itinerary: {
    screen: Itinerary,
    navigationOptions: {
      title: 'Itinerary',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    }
  },
  MapView: {
    screen: Map,
    navigationOptions: {
      title: 'Map',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    }
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontFamily: 'Avenir Light',
        fontWeight: 'normal',
        fontSize: 20
      }
    }
  }
});

export const Tabs = TabNavigator({
  Discover: {
    screen: CategoryStack,
    title: 'Category',
    navigationOptions: {
      tabBarLabel: 'DISCOVER',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={34} color={tintColor}/>
      ),
    }
  },
  Saved: {
    screen: SavedStack,
    title: 'Saved',
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="favorite-border" size={34} color={tintColor}/>
      ),
    }
  },
  Itinerary: {
    screen: ItineraryStack,
    title: 'Itinerary',
    navigationOptions: {
      tabBarLabel: 'ITINERARY',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="motorcycle" size={34} color={tintColor}/>
      ),
    }
  },
  Profile: {
    screen: ProfileStack,
    title: 'Profile',
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="face" size={34} color={tintColor}/>
      ),
    }
  }
})
