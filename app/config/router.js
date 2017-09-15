import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';
import TripStack from './TripStack'

const Tabs = DrawerNavigator({
  Homepage: {
    screen: Homepage,
  },
  Login: {
    screen: Login,
  },
  Profile: {
    screen: TripStack
  },
})


export default Tabs;
