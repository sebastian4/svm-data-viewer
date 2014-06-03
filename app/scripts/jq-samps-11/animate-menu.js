(function($){
    $.fn.extend({
        //plugin name - animatemenu
        animateMenu: function(options) {

            //Settings list and the default values
            var defaults = {
                animatePadding: 60,
                defaultPadding: 10,
                evenColor: '#ccc',
                oddColor: '#eee'
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o =options;

                //Assign current element to variable, in this case is UL element
                var obj = $(this);

                //Get all LI in the UL
                var items = $("li", obj);

                //Change the color according to odd and even rows
                $("li:even", obj).css('background-color', o.evenColor);
                $("li:odd", obj).css('background-color', o.oddColor);

                //Attach mouseover and mouseout event to the LI
                items.mouseover(function() {
                    $(this).animate({paddingLeft: o.animatePadding}, 300);

                }).mouseout(function() {
                    $(this).animate({paddingLeft: o.defaultPadding}, 300);
                });

            });
        }
    });
})(jQuery);
