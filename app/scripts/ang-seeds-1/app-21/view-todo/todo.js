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
    { id: 0, userId: 1, title:'learn angular', completed:false }
  ];

  $http.get('http://localhost:8080/todo/user/'+$rootScope.currentUserId).
        success(function(data) {
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
      id: 0,
      userId: $rootScope.currentUserId,
      title: $scope.todoText, 
      completed: false 
    };
    console.log(newTodo);
    $scope.todos.push(newTodo);
    $scope.todoText = '';
  };

  ////

  $scope.persistTodos = function() {
  	console.log("persistTodos");

  	var todosLength = $scope.todos.length;
	for (var i = 0; i < todosLength; i++) {
		var currentTodo = $scope.todos[i];
		console.log(currentTodo);
	    //Do something

	    if (0 === currentTodo.id) {
	    	currentTodo.id = $scope.getRandomNumber();
	    	//POST
	    	$http.post('http://localhost:8080/todo/', currentTodo).
			        success(function(data) {
			            console.log("post "+currentTodo.id+" : "+data);
			});
	    } else {
	    	//PUT
	    	$http.put('http://localhost:8080/todo/'+currentTodo.id, currentTodo).
			        success(function(data) {
			            console.log("put "+currentTodo.id+" : "+data);
			});
	    }
	}
  };

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
    console.log($scope.getRandomNumber());

  };

}]);