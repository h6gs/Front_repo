angular
.module('RailsAngular')
.config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: 'http://localhost:3000/api/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: 'http://localhost:3000/api/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: 'http://localhost:3000/api/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: 'http://localhost:3000/api/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  });

  $urlRouterProvider.otherwise('/');
}
