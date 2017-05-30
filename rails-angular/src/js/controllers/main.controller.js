angular
  .module('RailsAngular')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  $http.get('http://localhost:3000/api/users')
  .then(response => {
    vm.all = response.data;

    console.log(vm.all);
  });
}
