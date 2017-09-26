import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

const URL = "http://3fd8dee7.ngrok.io/api/v1/"

// async saveItem(item, selectedValue) {
//   try {
//     await AsyncStorage.setItem(item, selectedValue);
//   } catch (error) {
//     console.error('AsyncStorage error: ' + error.message);
//   }
// }

var api = {
  login(params){
    var url = URL + "users/sign_in"
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_login: {
          login: params.email,
          password: params.password
        }
      })
    }).then((response) => response.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  },

  profile(user_id) {
    var url = URL + "users/" + user_id
    console.log(url);
    return fetch(url).then((res) => res.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  },

  tripShow(trip_id) {
    var url = URL + "trips/" + trip_id
    console.log(url);
    return fetch(url).then((res) => res.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  },

  postShow(trip_id, post_id) {
    var url = URL + "trips/" + trip_id + "/posts/" + post_id
    console.log(url);
    return fetch(url).then((res) => res.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};

module.exports = api;
