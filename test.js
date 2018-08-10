const BitGoJS = require('bitgo');
// Read the user authentication section to get your API access token
var ACCESS_TOKEN = "v2x58188a0263e11a00630a2476254b372924ad662b8a82b7af4f03024a2ac42dd8";
var bitgo = new BitGoJS.BitGo({ accessToken:ACCESS_TOKEN });



bitgo.logout({})
.then(function() {
  // the user is now logged out
  console.log("log out done");
});

// bitgo.authenticate({ username: "hunglv@chainos.vn", password: "Hienthuc@2017", otp: '0000000' })
// .then(function(response) {
//   var token = response.token;
//   var user = response.user;
//   // etc
//   console.log("login done");
//   console.log(token);
// });