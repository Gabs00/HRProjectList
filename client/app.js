angular.module('HRP', ['ui', 'ui.utils','ui.router', 'ui.bootstrap'])

//Get to coding
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('signup',{
      url:'/signup',
      templateUrl: './app/partials/signup.html',
      controller: 'MainCtrl'
    })
    .state('login', {
      url:'/login',
      templateUrl:'./app/partials/login.html',
      controller: 'AuthController'
    })
    .state('logout', {
      url:'/logout',
      templateUrl:'./app/partials/logout.html',
      controller: 'MainCtrl'
    })
    .state('home', {
      url:'/home',
      templateUrl:'./app/partials/home.html',
      controller:'HomeController'
    })
    .state('addproject',{
      url:'/add',
      templateUrl: 'app/partials/addproject.html',
      controller:'AddController'
    })
    .state('myprojects',{
      url:'/projects',
      templateUrl: 'app/partials/myprojects.html',
      controller:'MyController'
    })
    .state('interested',{
      url:'/tracked',
      templateUrl: 'app/partials/interested.html',
      controller:'IntController'
    });
})
;