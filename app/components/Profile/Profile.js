import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert, AsyncStorage } from 'react-native';
import api from '../../utilities/api'

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { userData: [], user_id: "", isLoading: true }
  }

  async _getSessionData() {
    try {
      const value = await AsyncStorage.getItem('user_id').then((value) => {
        this.setState({"user_id": value.toString()})
        api.profile(this.state.user_id).then((responseData) => {
          console.log(responseData);
          this.setState({
            user_data: responseData,
            isLoading: false
          })
        })
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillMount(){
    // var params = this.props.navigation.state.param
    this._getSessionData()
  }

  render() {
    const {navigate} = this.props.navigation;

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
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
