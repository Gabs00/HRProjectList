angular.module('HRP')
.directive('cwNavbar', [function(){
  return {
    restrict:'EA',
    templateUrl:'./app/partials/navbar.html',
    replace:true,
  };
}]);