var EnterKey = 13;

$(document).ready(function() {

    // remove todos
    $(".list").on('click', '.remove', function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    // change todo/done
    $(".list").on('click', '.todo-label', function(e) {
          if($(this).find('input:checkbox').is(':checked')) {
              $(this).css("text-decoration","line-through");
              $(this).css("color","#999999");
		  }
		  else {
              $(this).css("text-decoration","none");
              $(this).css("color","#000000");
		  }
    });
  
    // add todos on 'Enter' press
    $('#new-todo').on('keypress', (function(e) {
        if (e.which === EnterKey) {
            // trim and read input
            inputValue = $.trim($("input").val());
            if (inputValue !== "" ) {
                $(".list").prepend("<div class='todo'><label class='todo-label'><input type='checkbox' />" +
                                   inputValue + "</label><a href='#' class='remove'>x</a></div>");
            }
            $("input").val(this.defaultValue);
        }
    }));

});