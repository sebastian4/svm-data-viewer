
$(function(){

  console.log("hjsubmit-1 .");

  $("#myform").submit(function(e) {

      e.preventDefault(); //if orig form not allowed

      e.returnValue = false;

      console.log("myform hijacked");

      $("input").each(function(index, value) {
        var formData = $("#myform").serializeObject();
        console.log(formData);
        if ($(this).attr('type') === 'text') {
          console.log($(this).attr('value'));
        }
      });
  });


})
