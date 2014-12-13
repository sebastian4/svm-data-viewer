'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope','$http','$q', function($scope,$rootScope,$http,$q) {

	console.log("view1 controller again");

	$scope.loans = [];


	$scope.init = function () {
	    console.log("view1 controller INIT");

	    if (undefined===$rootScope.loans) {
	    	$rootScope.loans = [];

	    	$q.all([
			    $http.get('/scripts/ang-seeds-1/app-11/data/page_10_1.json')
				.success($scope.httpSuccess),
				$http.get('/scripts/ang-seeds-1/app-11/data/page_10_2.json')
				.success($scope.httpSuccess),
				$http.get('/scripts/ang-seeds-1/app-11/data/page_10_3.json')
				.success($scope.httpSuccess),
				$http.get('/scripts/ang-seeds-1/app-11/data/page_10_4.json')
				.success($scope.httpSuccess),
			    $http.get('/scripts/ang-seeds-1/app-11/data/page_10_5.json')
				.success($scope.httpSuccess)
			])
			.then($scope.recordLoans)
			.then($scope.setDataTable);

		} else {
			$scope.recordLoans();
			$scope.setDataTable();
		}

	};
	
	////

	$scope.httpSuccess = function(data) {
		$rootScope.loans = $rootScope.loans.concat(data.loanDataList);
	}

	$scope.loansSize = function() {
		return $scope.loans.length;
	}

	$scope.recordLoans = function() {
		$scope.loans = $rootScope.loans;
		$('#load-wheel').hide();
		console.log($scope.loans);
	}

	$scope.setDataTable = function() {
		//nothing
	}

	////

	$scope.debug = function() {
	    console.log("debug");

	    console.log($scope.loans.length);

	};

}]);