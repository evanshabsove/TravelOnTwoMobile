import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, ScrollView, Modal } from 'react-native';
import { Button, Card } from 'react-native-elements'
import api from '../../utilities/api'
import TripModal from './TripModal'

export default class Trip extends Component {

  constructor(props) {
    super(props);
    this.state = { tripData: [], trip_id: "", isLoading: true, modalVisible: false, postData: [] }
    this.handler = this.handler.bind(this)
  }

  componentWillMount() {
    let trip_id = (this.props.navigation.state.params.trip_id).toString()
    this.setState({ trip_id: trip_id })
    api.tripShow(trip_id).then((responseData) => {
      console.log(responseData);
      this.setState({
        tripData: responseData,
        isLoading: false,
      })
    })
  }

  handlePostGroupButtonPress (post_group) {
    var post_group_id = post_group
    var posts = []
    this.state.tripData.posts.map((post) => {
      if (post.post_group_id === post_group_id) {
        posts.push(post)
      }
    });
    console.log(posts);
    this.setState({
      postData: posts,
      modalVisible: true
    })
  }

  handler(e) {
    e.preventDefault()
    console.log("ere");
    this.setState({
      modalVisible: false
    })
  }

  render() {

    const {navigate} = this.props.navigation;
    const URL = "http://eb243314.ngrok.io";
    const trip = this.state.tripData;

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Image
            style={{width:100, height:100}}
            source={{uri: URL + trip.photo.cover.url}}
          />
          <Text>
            {trip.trip_name}
          </Text>
          <Text>
            {trip.user.name}
          </Text>
          <Text>
            {trip.user.total_distance}
          </Text>
          <Text>
            {trip.description}
          </Text>
          <Card title="Donation Goal">
            <Text>
              {trip.donation_goal.title}
            </Text>
            <Text>
              {trip.donation_goal.description}
            </Text>
            <Text>
              {trip.donation_goal.current_paid}/{trip.donation_goal.amount}
            </Text>
          </Card>
          {
            trip.post_groups.map((post_group) => {
              return(
                <Card
                  key={post_group.id}
                  title={post_group.month + "-" + post_group.year}>
                  <Button
                    backgroundColor='#03A9F4'
                    fontFamily='Lato'
                    key={post_group.id}
                    onPress = {() => this.handlePostGroupButtonPress(post_group.id)}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW POSTS' />
                </Card>
              )
            })
          }
          <Button
            onPress={() => navigate('DrawerOpen')}
            title="View Side Bar"
          />
          <TripModal postData={this.state.postData} modalVisible={this.state.modalVisible} handler = {this.handler} navigate = {navigate} trip_id={this.state.trip_id}/>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Trip', () => Trip);
