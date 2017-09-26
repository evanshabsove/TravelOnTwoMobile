import React from 'react';
import { StackNavigator} from 'react-navigation';

import Trip from '../components/Trip/Trip';
import Post from '../components/Post/Post';

const PostStack = StackNavigator({
  Trip: {
    screen: Trip,
  },
  Post: {
    screen: Post,
  }
})

export default PostStack;
