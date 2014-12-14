$('form').submit(function(){
  if ($('input').val() !== '' ) {
    var input_value = $('input').val();
    $('ul').append('<li>' + '<span class="check">&nbsp;</span>' + input_value + '<a href="#">X</a>' + '</li>');
  };

  $('input').val(''); // clears text input after submit
  return false; // prevent default?
});

$(document).on('click', 'a', function (e) {
  e.preventDefault();
  $(this).parent().remove();
});

$(document).on('click', '.check', function () {   
  $(this).parent().toggleClass('strikethrough');
});

// $('#check').on('click', function () {
//    $(this).parent().css('text-decoration', 'line-through');
// });