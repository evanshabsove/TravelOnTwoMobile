import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'

const URL = "http://119cb52b.ngrok.io/api/v1/"

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

  profile(params) {
    var url = URL + "users/" + params.user_id
    return fetch(url).then((res) => res.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};

module.exports = api;
