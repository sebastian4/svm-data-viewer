'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'view-user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

  console.log("user controller again");

  $scope.init = function () {
    //console.log("user controller INIT");
  };

  $scope.users = [
    { id: 1, username: "nobody" }
  ];

  $scope.currentUser = $scope.users[0];

  $http.get('http://localhost:8080/user/').
        success(function(data) {
            $scope.users = data;
   });

   ////

   $scope.updateUser = function() {
   	console.log("updateUser");
   	$rootScope.currentUserId = $scope.currentUser.id;
   	$rootScope.currentUserName = $scope.currentUser.username;
   	console.log($rootScope.currentUserId);
   }

   ////

}]);