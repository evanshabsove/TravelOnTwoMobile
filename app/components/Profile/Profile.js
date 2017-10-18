import React, { Component } from 'react';
import { AppRegistry, Text, View, Alert, AsyncStorage, ScrollView } from 'react-native';
import { Avatar, Button, Card } from 'react-native-elements'
import api from '../../utilities/api'
import TripModalCreate from '../TripModalCreate/TripModalCreate'

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { userData: [], user_id: "", isLoading: true, modalVisible: false }
    this.handler = this.handler.bind(this)
  }

  async _getSessionData() {
    try {
      const value = await AsyncStorage.getItem('user_id').then((value) => {
        this.setState({"user_id": value.toString()})
        api.profile(this.state.user_id).then((responseData) => {
          console.log(responseData);
          this.setState({
            userData: responseData,
            isLoading: false
          })
        })
      });
    } catch (error) {
      console.log(error);
    }
  }

  getUserData(user_id){
    this.setState({"user_id": user_id})
    api.profile(this.state.user_id).then((responseData) => {
      this.setState({
        userData: responseData,
        isLoading: false
      })
    })
  }

  handler(e) {
    e.preventDefault()
    console.log("ere");
    this.setState({
      modalVisible: false
    })
  }

  handleCreateTripPress(){
    this.setState({
      modalVisible: true
    })
  }

  componentWillMount(){
    // var params = this.props.navigation.state.param
    console.log(this.props.navigation);
    // if (this.props.navigation.params) {
    //   this.getUserData(this.props.navigation.params.user_id)
    // } else {
      this._getSessionData()
    // }
  }

  render() {
    const {navigate} = this.props.navigation;
    const URL = "http://ca142157.ngrok.io"

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Avatar
            xlarge
            source={{uri: URL + this.state.userData.avatar.thumb.url}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text>
            {this.state.userData.name}
          </Text>
          <Text>
            {this.state.userData.description}
          </Text>
          <Text>
            {this.state.userData.city}, {this.state.userData.province}, {this.state.userData.country}
          </Text>
          {
            this.state.userData.trips.map((trip) => {
              return(
                <Card
                  key={trip.id}
                  title={trip.trip_name}
                  image={{uri: URL + trip.photo.cover.url}}>
                  <Text>
                    {trip.description}
                  </Text>
                  <Button
                    backgroundColor='#03A9F4'
                    fontFamily='Lato'
                    onPress = {() => navigate('Trip', {trip_id: trip.id})}
                    key={trip.id}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>
              )
            })
          }
          <Button
            onPress={() => this.handleCreateTripPress()}
            title="START A NEW TRIP"
          />
          <TripModalCreate modalVisible={this.state.modalVisible} handler = {this.handler} navigate = {navigate} />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Profile', () => Profile);
