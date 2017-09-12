import { AsyncStorage } from 'react-native'

const URL = "http://50a12bab.ngrok.io/api/v1/"

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
    fetch(url, {
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
    }).then((response) => response.json()).then((responseData) => console.log(responseData)).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};

module.exports = api;
