import React, { Component } from 'react';
import { AppRegistry, Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements'

export default class TripModal extends Component {


  handlePostTextPress(post_id, e) {
    console.log(post_id);
    console.log("text was pressed");
    this.props.handler(e)
    this.props.navigate('Post', {post_id: post_id, trip_id: this.props.trip_id})
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
          {
            this.props.postData.map((post) => {
              return(
                <Text key={post.id} onPress = {(e) => this.handlePostTextPress(post.id, e)}>
                  {post.full_date}
                </Text>
              )
            })
          }
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

AppRegistry.registerComponent('TripModal', () => TripModal);
