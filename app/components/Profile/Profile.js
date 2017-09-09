import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

export default class Profile extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>
          Profile
        </Text>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="View Profile"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Profile', () => Profile);
