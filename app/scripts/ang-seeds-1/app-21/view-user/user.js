'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'view-user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', ['$scope','$http', function($scope,$http) {

  $scope.users = [
    { id: 1, username: "nobody" }
  ];

  $http.get('http://localhost:8080/user/').
        success(function(data) {
            $scope.users = data;
   });

   ////


   ////

}]);