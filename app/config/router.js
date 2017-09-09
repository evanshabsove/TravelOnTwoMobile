import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';

const Tabs = DrawerNavigator({
  Homepage: {
    screen: Homepage,
  },
  Login: {
    screen: Login,
  },
  Profile: {
    screen: Profile
  },
})

export default Tabs;
