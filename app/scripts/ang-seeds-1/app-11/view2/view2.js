'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

	console.log("view2 controller again");

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