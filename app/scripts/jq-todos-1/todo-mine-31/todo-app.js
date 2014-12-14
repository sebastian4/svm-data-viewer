var TodoApp = {

  init: function(){
    this.lists = $("#todo-list");
    this.todo_input = $('#todo-input');
    this.todo_input.on('change', this.addTodo.bind(this.lists));    
    this.lists.on('change','.check-todo',this.checkComplete);
    this.lists.on('click','.todo-remove', this.removeItem);
    this.lists.on('click','#todo-check-all', this.checkAll);
  },

  addTodo: function(){
    TodoApp.value = TodoApp.todo_input.val()
    this.append(TodoApp.addItem);
    if(this.children().length == 1)
      this.prepend(TodoApp.addCheckAll);
    TodoApp.todo_input.val("");
    this.slideDown();		
  },

  addItem: function(){
    var item = $("<div class='todo-item'></div>");
    item.append($("<input type ='checkbox' class='check-todo'>"))
    var action = $("<div class='todo-description'></div>")
    action.text(TodoApp.value);
    item.append(action)
    item.append($("<a class='todo-remove'>  </a>"))
    return item;
  },

  addCheckAll: function(){
    var checkAllTag = $("<input type ='checkbox' id='todo-check-all'>complete All</input>")
    return checkAllTag;
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
    if(TodoApp.lists.children().length == 1 && TodoApp.lists.find('#todo-check-all'))
      TodoApp.lists.slideToggle();
  },

  checkAll: function(){  
    $(this).closest('#todo-list').find('.check-todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check-todo').trigger('change');
  }

};

$(function(){ TodoApp.init()} );
