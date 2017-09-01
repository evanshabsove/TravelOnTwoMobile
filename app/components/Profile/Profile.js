import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

export default class Profile extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>
          Hello Worlds
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Profile', () => Profile);
