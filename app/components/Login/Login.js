import React, { Component } from 'react';
import { AppRegistry, Text, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class login extends Component {

  handleButtonPress() {
    console.log(this);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} />
        <Button
          raised
          icon={{name: 'check'}}
          title='SUBMIT'
          onPress={this.handleButtonPress} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
