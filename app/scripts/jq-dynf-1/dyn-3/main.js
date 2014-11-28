
$(function(){

  console.log("init 3 ....");


  $("#add").click( function(e) {
    $("#items").append(
      '<div><input type="text" name="input[]" class="afield">'
      +'<button class="delete">-</button></div>'
    );
  });


  $("#items").on("click", ".delete", function(e) {
    $(this).parent("div").remove();
  });

  $("#getinfo").click(function() {
    console.log("getinfo clicked");


    $("input").each(function(index, value) {
      //console.log($(this).attr('class'));
      if ($(this).attr('class') === 'afield') {
        console.log($(this).attr('value'));
      }
    });
  });

})
