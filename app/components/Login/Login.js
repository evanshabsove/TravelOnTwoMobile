import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default class login extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
