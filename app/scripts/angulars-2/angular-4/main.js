var myFormApp = angular.module('myFormApp', []);

var controllers = {};

controllers.foController = function($scope) { 

    $scope.submitForm = function(){
        if ($scope.custForm.$valid){
            alert('Form is a success');
        }
    }
}

myFormApp.controller(controllers);