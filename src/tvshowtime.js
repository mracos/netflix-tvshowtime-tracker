(function(){
  'use strict';

  var tvshowtime = function(user, pass, clientId) {
    this.user = user;
    this.pass = pass;
    this.clientId = clientId;
    this.baseUrl = "https://api.tvshowtime.com";
    this.xhttp = new XMLHttpRequest();
  };

  tvshowtime.prototype.makeCall = function(httpVerb, url, data, callback) {
    // some way to do this
    this.data = new FormData(data);
    this.xhttp.open(httpVerb, url, true);
    if (httpVerp === 'POST') {
      this.xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    this.xhttp.onload = callback;
    this.xhttp.send();
  };

  tvshowtime.prototype.register = function() {
    data = {
      clientId: this.clientId,
      // redirectUri: '',
      state: ''
    };

    this.makeCall("GET", "https://www.tvshowtime.com/oauth/authorize", data, function(res) {
      // get the code returned by the request and save it 
      data.code = res.code;
    });

    this.makeCall("POST", this.baseUrl + '/v1/oauth/access_token', data, function(res){
      this.accessToken = res.accessToken;
    });
  };

})();
