var TodoApp = {

  init: function(){
    this.lists = $("#todo-list");
    this.todo_input = $('#todo-input');
    this.todo_input.on('change', this.addtodo.bind(this.lists));    
    this.lists.on('change','.check_todo',this.mark_complete);
    this.lists.on('click','.todo-remove', this.remove_item);
    this.lists.on('click','#todo-check-all', this.mark_all);
  },

  addtodo: function(){
    TodoApp.value = TodoApp.todo_input.val()
    this.append(TodoApp.addItem);
    if(this.children().length == 1)
      this.prepend(TodoApp.addMarkAll);
    TodoApp.todo_input.val("");
    this.slideDown();		
  },

  addItem: function(){
    var item = $("<div class='todo-item'></div>");
    item.append($("<input type ='checkbox' class='check_todo'>"))
    var action = $("<div class='todo-description'></div>")
    action.text(TodoApp.value);
    item.append(action)
    item.append($("<a class='todo-remove'>  </a>"))
    return item;
  },

  addMarkAll: function(){
    var markAll = $("<input type ='checkbox' id='todo-check-all'>complete All</input>")
    return markAll;
  },

  mark_complete: function(){  
    var todo_description = $(this).siblings(".todo-description"); 
    if($(this).is(":checked"))
      todo_description.css("text-decoration","line-through")
    else 	 
      todo_description.css("text-decoration","")
  },

  remove_item: function(){
    var item = $(this).parent();
    item.remove();
    if(TodoApp.lists.children().length == 1 && TodoApp.lists.find('#todo-check-all'))
      TodoApp.lists.slideToggle();
  },

  mark_all: function(){  
    $(this).closest('#todo-list').find('.check_todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check_todo').trigger('change');
  }

};

$(function(){ TodoApp.init()} );
