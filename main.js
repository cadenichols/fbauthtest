var ref = new Firebase('https://cadestest.firebaseio.com/');

$(document).ready(init);

function init(){
  $('#login').on('click', loginClicked);
}

function loginClicked(){
  ref.authWithOAuthPopup("twitter", authHandler);
}

function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}