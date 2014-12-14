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

	var plot1 = null;

	////

	if (undefined!==$rootScope.loans) {
		$scope.loans = $rootScope.loans;
		$scope.currentLoan = null;
	}

	////

	$scope.updateLoan = function() {
	   	console.log("updateLoan");

	   	var labels = [];
		var data = [];

		var sum = 0;

		var paymentsLength = $scope.currentLoan.payments.length;
		for (var i = 0; i < paymentsLength; i++) {
			var dueDate = moment($scope.currentLoan.payments[i].due_date).format("MM/DD/YY");
			labels.push(dueDate);
			sum+=$scope.currentLoan.payments[i].amount;
		    data.push(sum);
		}

		console.log("cleaning chart");
	    plot1 = $.jqplot('chartdiv', [[[]]], {});
	    plot1.redraw();
	    plot1 = null;

	    console.log("redrawing chart");

		plot1 = $.jqplot('chartdiv', [data], {
		  seriesColors: [
		  	"#4bb2c5", "#c5b47f", "#EAA228", "#579575", "#839557", 
		  	"#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", 
		  	"#0085cc", '#85802b', '#00749F', '#73C774', '#C7754C'
		  ],
	      title: 'Payments',
	      seriesDefaults: {
	          renderer: $.jqplot.BarRenderer,
	          rendererOptions: {
                barMargin: 25,
                varyBarColor: true
          	  },
	          pointLabels:{
	          	show: true, 
	          	labels: labels
	          }
	      },
	      axes: {
	          xaxis: {
	          	tickOptions: {
		      		show: false
		      	}
	          }
	      },
	      highlighter: {
	        show: true,
	        sizeAdjust: 20.0,
	        tooltipContentEditor: function (str, seriesIndex, pointIndex, plot) {
	        	return labels[pointIndex];
	        }
	      }
	  });
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