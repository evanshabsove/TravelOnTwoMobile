import React from 'react';
import { StackNavigator} from 'react-navigation';

import Conversations from '../components/Conversations/Conversations';
import Message from '../components/Message/Message';

const ConversationStack = StackNavigator({
  Conversations: {
    screen: Conversations,
  },
  Message: {
    screen: Message,
  },
}, {
  headerMode: 'none'}
);

export default ConversationStack;
