import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';
import FollowedBlogs from '../components/FollowedBlogs/FollowedBlogs';
import TripStack from './TripStack'

const Tabs = DrawerNavigator({
  Homepage: {
    screen: Homepage,
  },
  Login: {
    screen: Login,
  },
  FollowedBlogs: {
    screen: FollowedBlogs,
  },
  Profile: {
    screen: TripStack
  },
})


export default Tabs;
