const URL = "http://50a12bab.ngrok.io/api/v1/"

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
    }).then((response) => response.json()).then((responseData) => console.log("Response Body -> " + JSON.stringify(responseData))).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};

module.exports = api;
