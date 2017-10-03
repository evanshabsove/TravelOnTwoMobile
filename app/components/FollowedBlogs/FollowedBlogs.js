import React, { Component } from 'react';
import { AppRegistry, Text, View, AsyncStorage, ScrollView } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements'
import api from '../../utilities/api'

export default class FollowedBlogs extends Component {

  constructor(props) {
    super(props);
    this.state = { followedBlogsData: [], user_id: "", isLoading: true }
  }

  async _getSessionData() {
    try {
      const value = await AsyncStorage.getItem('user_id').then((value) => {
        this.setState({"user_id": value.toString()})
        api.followedBlogsShow(this.state.user_id).then((responseData) => {
          console.log(responseData);
          this.setState({
            followedBlogsData: responseData,
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
    const URL = "http://5ab7934a.ngrok.io"

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
      <View>
        <ScrollView>
          {
            this.state.followedBlogsData.map((followedBlog) => {
              return(
                <Card
                  key={followedBlog.id}
                  title={followedBlog.blog_owner_name}
                  image={{uri: URL + followedBlog.blog_owner_image.thumb.url}}>
                  <Button
                    backgroundColor='#03A9F4'
                    fontFamily='Lato'
                    onPress = {() => navigate('Profile', {user_id: followedBlog.blog_owner_id})}
                    key={followedBlog.id}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW BLOG' />
                  </Card>
              )
            })
          }
          <Button
            onPress={() => navigate('DrawerOpen')}
            title="START A NEW TRIP"
          />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('FollowedBlogs', () => FollowedBlogs);
