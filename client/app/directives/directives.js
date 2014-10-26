angular.module('HRP')

//Navigation bar directive
.directive('cwNavbar', [function(){
  return {
    restrict:'EA',
    templateUrl:'./app/partials/navbar.html',
    replace:true,
  };
}])

//Google Sign in directive
.directive('cwGoogle',[function(){
  return {
    restrict:'E',
    template:'<ui-include src="\'app/partials/snippets.html\'" fragment="\'#google\'">Log in with google</ui-include>',
    replace:true,
  };
}])

//Github Sign in directive
.directive('cwGithub',[function(){
  return {
    restrict:'E',
    template:'<ui-include src="\'app/partials/snippets.html\'" fragment="\'#github\'"></ui-include>',
    replace:true,
  };
}])
;