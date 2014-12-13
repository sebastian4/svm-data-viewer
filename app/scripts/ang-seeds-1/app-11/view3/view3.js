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
	$scope.currentLoan = null;

	var ctx = $("#myChart").get(0).getContext("2d");
	var myNewChart = null;

	var chartOptions = {};

	////

	if (undefined!==$rootScope.loans) {
		$scope.loans = $rootScope.loans;
		$scope.currentLoan = null;

		chartOptions = {
		    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		    scaleBeginAtZero : true,
		    //Boolean - Whether grid lines are shown across the chart
		    scaleShowGridLines : true,
		    //String - Colour of the grid lines
		    scaleGridLineColor : "rgba(0,0,0,.05)",
		    //Number - Width of the grid lines
		    scaleGridLineWidth : 1,
		    //Boolean - If there is a stroke on each bar
		    barShowStroke : true,
		    //Number - Pixel width of the bar stroke
		    barStrokeWidth : 2,
		    //Number - Spacing between each of the X value sets
		    barValueSpacing : 5,
		    //Number - Spacing between data sets within X values
		    barDatasetSpacing : 1,
		    //String - A legend template
		    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		};
	}

	////

	$scope.updateLoan = function() {
	   	console.log("updateLoan");

	   	var labels = [];
		var data = [];

		var sum = 0;

		var paymentsLength = $scope.currentLoan.payments.length;
		for (var i = 0; i < paymentsLength; i++) {
			var dueDate = moment($scope.currentLoan.payments[i].due_date).format("MMM Do YY");
			labels.push(dueDate);
			sum+=$scope.currentLoan.payments[i].amount;
		    data.push(sum);
		}

		var chartData = {
		    labels: labels,
		    datasets: [
		        {
		            label: "Dataset",
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: data
		        }
		    ]
		};

		myNewChart = new Chart(ctx).Bar(chartData, chartOptions);
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

	////

	$scope.debug = function() {
	    console.log("debug");
	    console.log($scope.loans.length);
	};

}]);