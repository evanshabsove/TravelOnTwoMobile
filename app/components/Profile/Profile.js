import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, AsyncStorage } from 'react-native';
import api from '../../utilities/api'

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { user_data: [] }
  }

  async _getSessionData() {
    console.log("asyn method");
    try {
      const value = await AsyncStorage.getItem('user_id');
      if (value !== null){
        // We have data!!
        return value
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentWillMount(){
    var params = this.props.navigation.state.param
    this._getSessionData()
    api.profile(params).then((responseData) => {
      console.log(responseData);
      this.setState({
        user_data: responseData
      })
    })
  }

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
