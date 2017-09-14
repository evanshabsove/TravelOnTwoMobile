import React, { Component } from 'react';
import { AppRegistry, Text, View, Alert, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import api from '../../utilities/api'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "test", password: "test" }
  }

  handleButtonPress() {
    params = {
      email: this.state.email,
      password: this.state.password
    }
    api.login(params).then(async (responseData) => {
      if (responseData.success === true) {
        try {
          await AsyncStorage.setItem('user_id', responseData.user_id.toString()).then(() => {
            this.props.navigation.navigate('Profile')
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(responseData);
        Alert("Username or Password is incorrect")
      }
    })
  }

  render() {
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
          onPress={() => this.handleButtonPress()} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
