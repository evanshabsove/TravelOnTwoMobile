import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Header extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigate('DrawerOpen') }>
          <Icon name="menu" style={{padding: 10, marginLeft:10}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('Header', () => Header);
