import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';

const Tabs = DrawerNavigator({
  Homepage: {
    screen: Homepage,
  },
  Profile: {
    screen: Profile
  },
})

export default Tabs;
