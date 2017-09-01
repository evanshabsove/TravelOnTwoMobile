import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

import Homepage from './components/Homepage/Homepage';
import Profile from './components/Profile/Profile';
import Tabs from './config/router'

class App extends Component {
  render() {
    return <Tabs />
  }
}

AppRegistry.registerComponent('App', () => App);
export default App;
