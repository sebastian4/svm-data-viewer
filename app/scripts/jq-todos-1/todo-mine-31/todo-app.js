var TodoApp = {

  init: function(){
    this.userId = 1;
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
    TodoApp.addTodoToList(value,false);
    TodoApp.todoInput.val("");
  },

  addTodoToList: function(value,completed) {
    console.log("addTodoToList");
    var newTodoTag = TodoApp.addTodoTag(value,completed);
    TodoApp.todoList.append(newTodoTag);
    if(TodoApp.todoList.children().length == 1) {
      TodoApp.todoList.prepend(TodoApp.addCheckAllTag);
    }
    TodoApp.todoList.slideDown(); 
  },

  checkComplete: function() {
    console.log("checkComplete");
    //console.log(this);
    TodoApp.checkCompleteOnElement($(this));
  },

  checkCompleteOnElement: function($element) {
    console.log("checkCompleteOnElement");
    //console.log($element);
    var todoDescription = $element.siblings(".todo-description");
    if($element.is(":checked")) {
      todoDescription.css("text-decoration","line-through");
    }
    else {
      todoDescription.css("text-decoration","");
    }
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
    console.log("removeAll");
    this.todoList.empty();
  },

  checkAll: function() {
    console.log("checkAll");
    $(this).closest('#todo-list').find('.check-todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check-todo').trigger('change');
  },

  ////

  toJson: function() {
    console.log("toJson");

  },

  fromJson: function(jsonArray) {
    console.log("fromJson");

    var arrayLength = jsonArray.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(jsonArray[i]);



    }

  },

  sync: function() {
    console.log("sync");
  },

  archiving: function() {
    console.log("archive");
  },

  ////

  addTodoTag: function(value,completed) {
    console.log("addTodoTag: "+value+", "+completed);

    var checked = '';
    if (true===completed) {
      checked = ' checked';
    }
    var item = $("<div class='todo-item'></div>");
    var inputTag = $("<input type ='checkbox' class='check-todo'"+checked+">");
    item.append(inputTag);

    var action = $("<div class='todo-description'></div>");
    action.text(value);
    item.append(action);
    item.append($("<a class='todo-remove'>  </a>"));

    if (true===completed) {
      //console.log(inputTag[0]);
      TodoApp.checkCompleteOnElement(inputTag);
    }

    return item;
  },

  addCheckAllTag: function() {
    var checkAllTag = $("<input type ='checkbox' id='todo-check-all'>complete all</input>");
    return checkAllTag;
  },

  //// [ { id: 0, userId: 1, title:'learn angular', completed:false } ] .

  debug1: function() {
    console.log("debug1");
    TodoApp.addTodoToList("uno",false);
    TodoApp.addTodoToList("dos",true);
    // TodoApp.removeAll();
    console.log(TodoApp.userId);
  },

  debug2: function() {
    console.log("debug2");

    jsonArray = [ 
      { id: 11, userId: 1, title:'learn jquery', completed:false },
      { id: 12, userId: 1, title:'learn bootstrap', completed:true },
      { id: 13, userId: 1, title:'learn life', completed:false }
    ];

    TodoApp.fromJson(jsonArray);
    
  }

};

$(function() { TodoApp.init(); } );
