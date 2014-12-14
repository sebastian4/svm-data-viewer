var TodoApp = {

  init: function(){
    this.todoList = $("#todo-list");
    this.todoInput = $('#todo-input-text');
    this.todoControl = $('#todo-control');
    this.todoSyncButton = $('#todo-sync-btn');
    this.todoArchiveButton = $('#todo-archive-btn');
    this.todoD1Button = $('#todo-d1-btn');
    this.todoD2Button = $('#todo-d2-btn');
    this.todoInput.on('change', this.addTodo);   
    this.todoList.on('change','.check-todo',this.checkComplete);
    this.todoList.on('click','.todo-remove', this.removeItem);
    this.todoList.on('click','#todo-check-all', this.checkAll);
    this.todoSyncButton.on('click', this.sync);
    this.todoArchiveButton.on('click', this.archiving);
    this.todoD1Button.on('click', this.debug1);
    this.todoD2Button.on('click', this.debug2);
  },

  ////

  addTodo: function() {
    console.log("addTodo");
    var value = TodoApp.todoInput.val();
    TodoApp.addTodoToList(value);
    TodoApp.todoInput.val("");
  },

  addTodoToList: function(value) {
    TodoApp.todoList.append(TodoApp.addTodoTag(value));
    if(TodoApp.todoList.children().length == 1) {
      TodoApp.todoList.prepend(TodoApp.addCheckAllTag);
    }
    TodoApp.todoList.slideDown(); 
  },

  checkComplete: function() {
    console.log("checkComplete");
    var todoDescription = $(this).siblings(".todo-description"); 
    if($(this).is(":checked"))
      todoDescription.css("text-decoration","line-through");
    else 	 
      todoDescription.css("text-decoration","");
  },

  removeItem: function() {
    console.log("removeItem");
    var item = $(this).parent();
    item.remove();
    if(TodoApp.todoList.children().length == 1 && TodoApp.todoList.find('#todo-check-all')) {
      TodoApp.todoList.slideToggle();
    }
  },

  removeAll: function() {
    this.todoList.empty();
  },

  checkAll: function() {
    console.log("checkAll");
    $(this).closest('#todo-list').find('.check-todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check-todo').trigger('change');
  },

  ////

  sync: function() {
    console.log("sync");
  },

  archiving: function() {
    console.log("archive");
  },

  ////

  addTodoTag: function(value) {
    var item = $("<div class='todo-item'></div>");
    item.append($("<input type ='checkbox' class='check-todo'>"));
    var action = $("<div class='todo-description'></div>");
    action.text(value);
    item.append(action);
    item.append($("<a class='todo-remove'>  </a>"));
    return item;
  },

  addCheckAllTag: function() {
    var checkAllTag = $("<input type ='checkbox' id='todo-check-all'>complete all</input>");
    return checkAllTag;
  },

  //// { id: 0, userId: 1, title:'learn angular', completed:false }

  debug1: function() {
    console.log("debug1");
    TodoApp.addTodoToList("uno");
    TodoApp.addTodoToList("dos");
  },

  debug2: function() {
    console.log("debug2");
    TodoApp.removeAll();
  }

};

$(function() { TodoApp.init(); } );
