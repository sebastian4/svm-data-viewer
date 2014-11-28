
$(function(){

  console.log("init 2 ..");


  $("#add").click( function(e) {
    $("#items").append(
      '<div><input type="text" name="input[]">'
      +'<button class="delete">-</button></div>'
    );
  });


  $("#items").on("click", ".delete", function(e) {

    $(this).parent("div").remove();

  });


})
