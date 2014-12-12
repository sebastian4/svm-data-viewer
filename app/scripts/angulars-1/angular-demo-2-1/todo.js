function TodoCtrl($scope) {

  $scope.todos = [
    { title:'learn angular', completed:true },
    { title:'build an angular app', completed:false }
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
    $scope.todos.push({ title:$scope.todoText, completed:false });
    $scope.todoText = '';
  };

  ////

  $scope.archiveTodos = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.completed) $scope.todos.push(todo);
    });
  };

}


