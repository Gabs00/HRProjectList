angular.module('HRP')
.factory('Auth', ['$http', '$location', function(http, location){
  var googleAuth = function(){
    return http.get('auth/google');
  };

  return {
    google: googleAuth
  };

}])