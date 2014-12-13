'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

	console.log("view1 controller again");

	$scope.loans = [];

	if (undefined===$rootScope.loans) {
		$http.get('/scripts/ang-seeds-1/app-11/data/size20.json').
		    success(function(data) {
		        $rootScope.loans = data.loanDataList;
		        $scope.loans = $rootScope.loans;
		});
	} else {
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