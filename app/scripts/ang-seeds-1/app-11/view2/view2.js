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

	$scope.moreThanMax = 0;

	$scope.init = function () {
	    console.log("view2 controller INIT");

	    if (undefined!==$rootScope.loans) {
			$scope.loans = $rootScope.loans;
			$scope.updateLoans();
		}
	}

	////

	$scope.loansSize = function() {
		return $scope.loans.length;
	}

	////

	$scope.updateLoans = function() {

	  var line1 = [];
	  var line2 = [];
	  var labels = [];

	  var line1x = [];
	  var line2x = [];
	  var labelsx = [];

	  var loansLength = $scope.loans.length;
	  for (var i = 0; i < loansLength; i++) {

	  	if ($scope.loans[i].loanAmount < 100000.0) {
	  		var leftAmount = Math.trunc($scope.loans[i].loanAmount) - Math.trunc($scope.loans[i].paidAmount);
	  		line1.push(Math.trunc($scope.loans[i].paidAmount));
	  		line2.push(leftAmount);
	  		labels.push($scope.loans[i].name);
	  	} else {
	  		var leftAmount = Math.trunc($scope.loans[i].loanAmount) - Math.trunc($scope.loans[i].paidAmount);
	  		line1x.push(Math.trunc($scope.loans[i].paidAmount));
	  		line2x.push(leftAmount);
	  		labelsx.push($scope.loans[i].name);
	  		$scope.moreThanMax++;
	  	}
	  }

	  var plot4 = $.jqplot('chartdiv1', [line1, line2], {
	      title: 'Loans Less than 100k', 
	      stackSeries: true, 
	      seriesDefaults: {
	          renderer: $.jqplot.BarRenderer,
	          rendererOptions: {
                barDirection: 'horizontal',
                barMargin: 25
          	  },
	          pointLabels:{
	          	show: true, 
	          	labels: labels
	          }
	      },
	      axes: {
	          //xaxis:{renderer:$.jqplot.CategoryAxisRenderer}
	          //yaxis: {renderer: $.jqplot.CategoryAxisRenderer}
	          yaxis: {
	          	tickOptions: {
		      		show: false
		      	}
	          }
	      }
	  });

	  var plot4x = $.jqplot('chartdiv2', [line1x, line2x], {
	      title: 'Loans More than 100k', 
	      stackSeries: true, 
	      seriesDefaults: {
	          renderer: $.jqplot.BarRenderer,
	          rendererOptions: {
                barDirection: 'horizontal',
                barMargin: 25
          	  },
	          pointLabels:{
	          	show: true, 
	          	labels: labelsx
	          }
	      },
	      axes: {
	          //xaxis:{renderer:$.jqplot.CategoryAxisRenderer}
	          //yaxis: {renderer: $.jqplot.CategoryAxisRenderer}
	          yaxis: {
	          	tickOptions: {
		      		show: false
		      	}
	          }
	      }
	  });

	}

}]);