var TodoApp = {

  init: function() {
    this.userId = 0;
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
    TodoApp.getUsers();
  },

  ////

  getUsers: function() {
    console.log("getUsers");
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://localhost:8080/user/",
      //data: data,
      success: function(data) {
        console.log(data);
        var dataLength = data.length;
        for (var i = 0; i < dataLength; i++) {
          $('#todo-user-select').append('<option value='+data[i].id+'>'+data[i].username+'</option>');
        }
      }
    });
  },

  addTodo: function() {
    console.log("addTodo");
    var value = TodoApp.todoInput.val();
    var randomId = TodoApp.getRandomNumber();
    TodoApp.addTodoToList(value,false,randomId);
    TodoApp.todoInput.val("");
  },

  addTodoToList: function(value,completed,id) {
    console.log("addTodoToList");
    var newTodoTag = TodoApp.addTodoTag(value,completed,id);
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

  toObject: function() {
    console.log("toObject");

    var jsonArray = [];

    $( "div.todo-item" ).each(function( index ) {

      var description = $(this).find('div.todo-description').text();
      var id = $(this).find('div.todo-hidden').text();
      var completed = $(this).find('input.check-todo').is(':checked');
      console.log( index + " :  " + id + " " + description + " " + completed );

      var todoItem = {
        id: parseInt(id),
        description: description,
        completed: completed
      };

      jsonArray.push(todoItem);
    });

    return jsonArray;
  },

  fromObject: function(jsonArray) {
    console.log("fromObject");

    var arrayLength = jsonArray.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(jsonArray[i]);
      TodoApp.addTodoToList(jsonArray[i].title,jsonArray[i].completed,jsonArray[i].id);
    }
  },

  sync: function() {
    console.log("sync");
  },

  archiving: function() {
    console.log("archive");
  },

  ////

  addTodoTag: function(value,completed,id) {
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

    var idTag = $("<div class='todo-hidden'></div>");
    idTag.text(id);
    item.append(idTag);

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

  getRandomNumber: function() {
    var timeInMs = Date.now();
    var randomNum = (timeInMs % 1000000000);
    return randomNum;
  },

  debug1: function() {
    console.log("debug1");

    // TodoApp.addTodoToList("uno",false,1001);
    // TodoApp.addTodoToList("dos",true,1002);
    // TodoApp.removeAll();

    console.log(TodoApp.userId);

    var appToJson = TodoApp.toObject();
    console.log(appToJson);
  },

  debug2: function() {
    console.log("debug2");

    jsonArray = [ 
      { id: 211, userId: 1, title:'learn jquery', completed:false },
      { id: 212, userId: 1, title:'learn bootstrap', completed:true },
      { id: 213, userId: 1, title:'learn life', completed:false }
    ];

    console.log(jsonArray);
    TodoApp.fromObject(jsonArray);
    
  }

};

$(function() { TodoApp.init(); } );
