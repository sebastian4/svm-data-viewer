
$(function(){

  console.log("fisubmit-1");

  $("#myform").submit(function(e) {

      //e.preventDefault(); //if orig form not allowedl

      e.returnValue = false;

      console.log("myform hijacked");

      var formData = $("#myform").serializeObject();
      console.log(formData);

      $("input").each(function(index, value) {

        console.log($(this).attr('value'));

      });
  });


})
