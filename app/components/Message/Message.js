import React, { Component } from 'react';
import { AppRegistry, Text, View, Modal, ScrollView } from 'react-native';
import { Button, Avatar } from 'react-native-elements'

export default class Message extends Component {

  render() {
    console.log(this.props);
    const {navigate} = this.props.navigate;
    const props = this.props
    const URL = "http://ca142157.ngrok.io"

    return (
      <View>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            {
              this.props.messageData.map((message) => {
                if (message.user_id === props.recipient.id) {
                  return(
                    <View key={message.id}>
                      <Text>
                        {message.body}
                      </Text>
                      <Avatar
                        small
                        rounded
                        source = {{uri: URL + props.recipient.avatar.thumb.url}}
                      />
                    </View>
                  )
                } else {
                  return (
                    <View key={message.id}>
                      <Text>
                        {message.body}
                      </Text>
                      <Avatar
                        small
                        rounded
                        source = {{uri: URL + props.sender.avatar.thumb.url}}
                      />
                    </View>
                  )
                }
              })
            }
            <Button
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              onPress={this.props.handler}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='HIDE MODAL' />
          </Modal>
        </ScrollView>
      </View>
    );
  }

}

AppRegistry.registerComponent('Message', () => Message);
