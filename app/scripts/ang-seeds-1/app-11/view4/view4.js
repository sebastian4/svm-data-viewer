'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

	console.log("view4 controller again");

	$scope.loans = [];

	if (undefined!==$rootScope.loans) {
		$scope.loans = $rootScope.loans;
	}

	////

	$scope.loansSize = function() {
		return $scope.loans.length;
	}


	////

	$scope.debug = function() {
	    console.log("debug");

	    console.log($scope.loans.length);

	};

}]);