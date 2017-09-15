import React, { Component } from 'react';
import { AppRegistry, Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements'

export default class TripModal extends Component {

  render() {

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
            <Text>Hello World!</Text>
            <Button
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              onPress={() => {this.props.handler}}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='HIDE MODAL' />
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('TripModal', () => TripModal);
