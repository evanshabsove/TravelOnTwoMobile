const URL = "http://localhost:3000/api/v1/"

var api = {
  login(){
    var url = URL + "sign_in"
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_login: {
          login: "email",
          password: "password"
        }
      })
    }).then((response) => response.json())
  }
};

module.exports = api;
