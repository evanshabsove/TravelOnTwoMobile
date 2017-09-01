import React from 'react';
import {StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';

const Tabs = StackNavigator({
  Homepage: {
    screen: Homepage,
  },
  Profile: {
    screen: Profile
  },
})

export default Tabs;
