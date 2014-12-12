'use strict';

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'view-todo/todo.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', [function() {

}]);