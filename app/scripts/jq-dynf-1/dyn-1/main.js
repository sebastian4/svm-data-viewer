
$(function(){

  console.log("init");


  $("#add").click( function(e) {
    $("#items").append(
      '<div><input type="text" name="input[]"><button  class="delete">-</button></div>'
    );
  });


  $("body").on("click", ".delete", function(e) {

    $(this).parent("div").remove();

  });


})
