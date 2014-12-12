'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'view-user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', [function() {

}]);