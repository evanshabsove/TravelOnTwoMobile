import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

export default class Homepage extends Component {

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>
          Hello Worlds
        </Text>
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="View Side Bar"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Homepage', () => Homepage);
