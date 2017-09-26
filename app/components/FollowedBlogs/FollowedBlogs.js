import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import api from '../../utilities/api'

export default class FollowedBlogs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          This is the followed blogs page
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('FollowedBlogs', () => FollowedBlogs);
