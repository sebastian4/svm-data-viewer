function TodoCtrl($scope) {

  $scope.todos = [
    { id: 101, userId: 1, title:'learn angular', completed:true },
    { id: 102, userId: 1, title:'build an angular app', completed:false }
  ];

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

    var timeInMs = Date.now();
    console.log(timeInMs);
    var randomNum = (timeInMs % 1000000000);
    console.log(randomNum);

  };

}


