var TodoApp = {

  init: function(){
    this.todoList = $("#todo-list");
    this.todoInput = $('#todo-input');
    this.todoInput.on('change', this.addTodo.bind(this.todoList));    
    this.todoList.on('change','.check-todo',this.checkComplete);
    this.todoList.on('click','.todo-remove', this.removeItem);
    this.todoList.on('click','#todo-check-all', this.checkAll);
  },

  addTodo: function(){
    TodoApp.value = TodoApp.todoInput.val()
    this.append(TodoApp.addTodoTag);
    if(this.children().length == 1)
      this.prepend(TodoApp.addCheckAllTag);
    TodoApp.todoInput.val("");
    this.slideDown();		
  },

  checkComplete: function(){  
    var todoDescription = $(this).siblings(".todo-description"); 
    if($(this).is(":checked"))
      todoDescription.css("text-decoration","line-through")
    else 	 
      todoDescription.css("text-decoration","")
  },

  removeItem: function(){
    var item = $(this).parent();
    item.remove();
    if(TodoApp.todoList.children().length == 1 && TodoApp.todoList.find('#todo-check-all'))
      TodoApp.todoList.slideToggle();
  },

  checkAll: function(){  
    $(this).closest('#todo-list').find('.check-todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check-todo').trigger('change');
  },

  ////

  addTodoTag: function(){
    var item = $("<div class='todo-item'></div>");
    item.append($("<input type ='checkbox' class='check-todo'>"))
    var action = $("<div class='todo-description'></div>")
    action.text(TodoApp.value);
    item.append(action)
    item.append($("<a class='todo-remove'>  </a>"))
    return item;
  },

  addCheckAllTag: function(){
    var checkAllTag = $("<input type ='checkbox' id='todo-check-all'>complete All</input>")
    return checkAllTag;
  }

};

$(function(){ TodoApp.init()} );
