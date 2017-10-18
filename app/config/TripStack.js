import React from 'react';
import { StackNavigator} from 'react-navigation';

import Trip from '../components/Trip/Trip';
import Profile from '../components/Profile/Profile';
import PostStack from './PostStack'
import Header from '../components/Header/Header'

const TripStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
        headerLeft: <Header navigate = {navigation.navigate} />,
    })
  },
  Trip: {
    screen: PostStack,
  }
})

export default TripStack;
