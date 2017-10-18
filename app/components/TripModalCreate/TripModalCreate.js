import React, { Component } from 'react';
import { AppRegistry, Text, View, Modal, Alert } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import api from '../../utilities/api';

export default class TripModalCreate extends Component {

  constructor(props) {
    super(props);
    this.state = { trip_name: "", description: "", start: "", end: "", photo: "" }
  }

  handleButtonPress(e) {
    params = {
      trip_name: this.state.trip_name,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end
    }
    api.createTrip(params).then(async (responseData) => {
      console.log(responseData);
      if (responseData.success === "success") {
          console.log(responseData.trip.id);
          console.log(this.props);
          this.props.handler(e)
          this.props.navigate('Trip', {trip_id: responseData.trip.id})
      } else {
        console.log(responseData);
        Alert("Username or Password is incorrect")
      }
    })
  }

  render() {
    console.log(this.props);
    const {navigate} = this.props.navigate;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
          <FormLabel>Trip Name</FormLabel>
          <FormInput onChangeText={(trip_name) => this.setState({trip_name})}/>
          <FormLabel>Description</FormLabel>
          <FormInput onChangeText={(description) => this.setState({description})}/>
          <FormLabel>Start</FormLabel>
          <FormInput onChangeText={(start) => this.setState({start})}/>
          <FormLabel>End</FormLabel>
          <FormInput onChangeText={(end) => this.setState({end})}/>
          <Button
            raised
            icon={{name: 'check'}}
            title='SUBMIT'
            onPress={(e) => this.handleButtonPress(e)} />
            <Button
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              onPress={this.props.handler}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='HIDE MODAL' />
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('TripModalCreate', () => TripModalCreate);
