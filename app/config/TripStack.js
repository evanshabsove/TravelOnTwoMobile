import React from 'react';
import { StackNavigator} from 'react-navigation';

import Trip from '../components/Trip/Trip';
import Profile from '../components/Profile/Profile';
import PostStack from './PostStack'

const TripStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
  Trip: {
    screen: PostStack,
  }
})

export default TripStack;
