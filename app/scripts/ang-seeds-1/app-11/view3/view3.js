'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

	console.log("view3 controller again");

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