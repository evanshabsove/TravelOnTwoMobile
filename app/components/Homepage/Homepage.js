import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar, Button, Card, Icon } from 'react-native-elements'
import api from '../../utilities/api'
import Header from '../Header/Header'

export default class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { searchData: [], query: "" }
  }

  handleSearchButtonPress(query){
    console.log(query);
    api.search(query).then((responseData) => {
      console.log(responseData);
      this.setState({
        searchData: responseData
      })
    })
  }

  render() {

    const {navigate} = this.props.navigation;
    const URL = "http://ca142157.ngrok.io"

    return (
      <View>
        <ScrollView>
          <Header navigate = {navigate} />
          <SearchBar
            lightTheme
            onChangeText={(query) => this.setState({query})}
            placeholder='Type Here...' />
          <Button
            onPress={() => this.handleSearchButtonPress(this.state.query)}
            title="Search"
          />
          {
            (!(this.state.searchData == [])) &&
              this.state.searchData.map((user) => {
                return(
                  <Card
                    key={user.id}
                    title={user.name}
                    image={{uri: URL + user.avatar.thumb.url}}>
                    <Button
                      backgroundColor='#03A9F4'
                      fontFamily='Lato'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW USER' />
                  </Card>
                )
              })
          }
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('Homepage', () => Homepage);
