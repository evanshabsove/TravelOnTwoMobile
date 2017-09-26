import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements'
import api from '../../utilities/api'

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.state = { postData: [], trip_id: "", isLoading: true, post_id: "" }
  }

  componentWillMount() {
    let post_id = this.props.navigation.state.params.post_id.toString()
    let trip_id = this.props.navigation.state.params.trip_id
    api.postShow(trip_id, post_id).then((responseData) => {
      console.log(responseData);
      this.setState({
        postData: responseData,
        isLoading: false,
      })
    })
  }

  render() {

    const post = this.state.postData;
    const URL = "http://3fd8dee7.ngrok.io";

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
      <View>
        <ScrollView>
          <Text>
            {post.post_title}
          </Text>
          <Text>
            {post.post_content}
          </Text>
          <Text>
            {post.address1} - {post.address2}
          </Text>
          {
            post.post_pictures.map((post_picture) => {
              return(
                <Image
                  style={{width:100, height:100}}
                  source={{uri: URL + post_picture.picture.url}}
                  key={post_picture.picture.id}
                />
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Post', () => Post);
