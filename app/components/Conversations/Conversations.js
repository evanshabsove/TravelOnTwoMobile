import React, { Component } from 'react';
import { AppRegistry, Text, View, AsyncStorage, ScrollView } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements'
import Message from '../Message/Message'
import api from '../../utilities/api'
import Header from '../Header/Header'

export default class Conversations extends Component {

  constructor(props) {
    super(props);
    this.state = { conversationsData: [], messageData: [], modalVisible: false, user_id: "", isLoading: true, sender: "", recipient: "", isSender: "" }
    this.handler = this.handler.bind(this)
  }

  async _getSessionData() {
    console.log("here");
    try {
      const value = await AsyncStorage.getItem('user_id').then((value) => {
        this.setState({"user_id": value.toString()})
        api.conversationsShow(this.state.user_id).then((responseData) => {
          console.log(responseData);
          this.setState({
            conversationsData: responseData,
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

  handler(e) {
    e.preventDefault()
    console.log("ere");
    this.setState({
      modalVisible: false
    })
  }

  handleConversationButtonPress(messages, sender, recipient, isSender){
    this.setState({
      modalVisible: true,
      messageData: messages,
      sender: sender,
      recipient: recipient,
      isSender: isSender
    })
  }

  render() {

    const {navigate} = this.props.navigation;
    const URL = "http://ca142157.ngrok.io"

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
      <View>
        <ScrollView>
          <Header navigate = {navigate} />
          {
            this.state.conversationsData.map((conversation) => {
              if (this.state.user_id === conversation.sender_id) {
                return(
                  <Card
                    key={conversation.id}
                    title={conversation.recipient_name}
                    image={{uri: URL + conversation.recipient_image.thumb.url}}>
                    <Button
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      onPress = {() => this.handleConversationButtonPress(conversation.messages, conversation.sender, conversation.recipient, "sender")}
                      key={conversation.id}
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW conversation' />
                    </Card>
                )
              } else {
                return(
                  <Card
                    key={conversation.id}
                    title={conversation.sender_name}
                    image={{uri: URL + conversation.sender_image.thumb.url}}>
                    <Button
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      onPress = {() => this.handleConversationButtonPress(conversation.messages, conversation.sender, conversation.recipient, "recipient")}
                      key={conversation.id}
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW CONVERSATION' />
                    </Card>
                )
              }
            })
          }
          <Message messageData={this.state.messageData} modalVisible={this.state.modalVisible} sender = {this.state.sender} recipient = {this.state.recipient} isSender = {this.state.isSender} handler = {this.handler} navigate = {navigate}/>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Conversations', () => Conversations);
