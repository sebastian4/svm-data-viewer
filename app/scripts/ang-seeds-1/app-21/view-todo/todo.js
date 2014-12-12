'use strict';

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'view-todo/todo.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

  console.log("todo controller again");

  $scope.init = function () {
    //console.log("todo controller INIT");
  };

  if (undefined===$rootScope.currentUserId) {
  	$rootScope.currentUserId = 0;
  }
  if (undefined===$rootScope.currentUserName) {
  	$rootScope.currentUserName = "nobody";
  }

  $scope.currentUserId = $rootScope.currentUserId;
  $scope.currentUserName = $rootScope.currentUserName;

  $scope.todos = [
    { id: 10000001, userId: 1, title:'learn angular', completed:false }
  ];

  $http.get('http://localhost:8080/todo/user/'+$rootScope.currentUserId).
        success(function(data) {
        	//console.log(data);
            $scope.todos = data;
   });

  ////
 
  $scope.todosRemaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.completed ? 0 : 1;
    });
    return count;
  };

  $scope.todosSize = function() {
    return $scope.todos.length;
  }
 
  ////

  $scope.addTodo = function() {
    console.log("addTodo");
    var newTodo = { 
      id: $scope.getRandomNumber(),
      userId: 1,
      title: $scope.todoText, 
      completed: false 
    };
    console.log(newTodo);
    $scope.todos.push(newTodo);
    $scope.todoText = '';
  };

  ////

  $scope.archiveTodos = function() {
    console.log("archiveTodos");
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.completed) $scope.todos.push(todo);
    });
  };

  $scope.getRandomNumber = function() {
    var timeInMs = Date.now();
    var randomNum = (timeInMs % 1000000000);
    return randomNum;
  };

  $scope.debug = function() {
    console.log("debug");

    console.log($rootScope.currentUserId);

    var timeInMs = Date.now();
    console.log(timeInMs);
    var randomNum = (timeInMs % 1000000000);
    console.log(randomNum);

  };

}]);