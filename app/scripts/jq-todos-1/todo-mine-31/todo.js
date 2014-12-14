var Todo = {

  init: function(){
    this.lists = $("#todo-list");
    this.todo_input = $('#todo-input');
    this.todo_input.on('change', this.addtodo.bind(this.lists));    
    this.lists.on('change','.check_todo',this.mark_complete);
    this.lists.on('click','.remove', this.remove_item);
    this.lists.on('click','#markAll', this.mark_all);
     },

  addtodo: function(){
    Todo.value = Todo.todo_input.val()
    this.append(Todo.addItem);
    if(this.children().length == 1)
      this.prepend(Todo.addMarkAll);
    Todo.todo_input.val("");
    this.slideDown();		
  },

  addItem: function(){
    var item = $("<div class='item'></div>");
    item.append($("<input type ='checkbox' class='check_todo'>"))
    var action = $("<div class='todo-description'></div>")
    action.text(Todo.value);
    item.append(action)
    item.append($("<a class='remove'>  </a>"))
    return item;
  },

  addMarkAll: function(){
    var markAll = $("<input type ='checkbox' id='markAll'>Mark all as Complete</input>")
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
    if(Todo.lists.children().length == 1 && Todo.lists.find('#markAll'))
      Todo.lists.slideToggle();
  },

  mark_all: function(){  
    $(this).closest('#todo-list').find('.check_todo').prop('checked', this.checked);
    $(this).closest('#todo-list').find('.check_todo').trigger('change');

  }
};

$(function(){Todo.init()});
