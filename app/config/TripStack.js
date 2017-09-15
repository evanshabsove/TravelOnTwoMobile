import React from 'react';
import { StackNavigator} from 'react-navigation';

import Trip from '../components/Trip/Trip';
import Profile from '../components/Profile/Profile';

const TripStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
  Trip: {
    screen: Trip,
  }
})

export default TripStack;
