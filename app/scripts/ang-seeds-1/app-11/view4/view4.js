'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$rootScope','$http','$filter', function($scope,$rootScope,$http,$filter) {

	console.log("view4 controller again");

	$scope.loans = [];
	$scope.currentLoan = null;

	var container = document.getElementById('mytimeline');
	var options = {};
	var timeline = null;

	if (undefined!==$rootScope.loans) {
		console.log("rootScope loans was undefined");
		$scope.loans = $rootScope.loans;
		$scope.currentLoan = null;

		var data = new vis.DataSet([]);
		
		timeline = new vis.Timeline(container, data, options);
		if (null!==timeline) {
			console.log("timeline destroy");
			timeline.destroy();
			timeline = null;
		}
	}

	////

	$scope.updateLoan = function() {
	   	console.log("updateLoan");

	    var timePoints = [];

	    var paymentsLength = $scope.currentLoan.payments.length;
		for (var i = 0; i < paymentsLength; i++) {
			var dueDate = moment($scope.currentLoan.payments[i].due_date).format("YYYY-MM-DD");
			var timePoint = {
				id: i+1,
				//content: Math.trunc($scope.currentLoan.payments[i].amount),
				content: $filter('currency')($scope.currentLoan.payments[i].amount),
				start: dueDate
			};
			timePoints.push(timePoint);
		}

		var data = new vis.DataSet(timePoints);

		if (null!==timeline) {
			console.log("timeline destroy");
			timeline.destroy();
		}
	    timeline = new vis.Timeline(container, data, options);

	}

	////

	$scope.loansSize = function() {
		return $scope.loans.length;
	}

	$scope.paymentsSize = function() {
		if (null !== $scope.currentLoan) {
			return $scope.currentLoan.payments.length;
		}
		return 0;
	}

}]);