import React, { Component } from 'react';
import { AppRegistry, Text, View, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import api from '../../utilities/api'

export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "test", password: "test" }
  }

  handleButtonPress(email, password) {
    params = {
      email: email,
      password: password
    }
    api.login(params)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})}/>
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
        <Button
          raised
          icon={{name: 'check'}}
          title='SUBMIT'
          onPress={this.handleButtonPress(this.state.email, this.state.password)} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
