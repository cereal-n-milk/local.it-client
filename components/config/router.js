import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Discover from '../Discover';
import Saved from '../Saved';
import Itinerary from '../Itinerary';
import Profile from '../Profile';

export const Tabs = TabNavigator({
  Discover: {
    screen: Discover
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
