import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

import Homepage from '../components/Homepage/Homepage';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';
import FollowedBlogs from '../components/FollowedBlogs/FollowedBlogs';
import Conversations from '../components/Conversations/Conversations';
import TripStack from './TripStack'
import ConversationStack from './ConversationStack'

const Tabs = DrawerNavigator({
  Homepage: {
    screen: Homepage,
  },
  FollowedBlogs: {
    screen: FollowedBlogs,
  },
  Login: {
    screen: Login,
  },
  Conversations: {
    screen: ConversationStack,
  },
  Profile: {
    screen: TripStack
  },
})


export default Tabs;
