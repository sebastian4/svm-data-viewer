/**
 * @file text-colored.js
 * @description This is a jquery plugin that changes colors of text.
 * @author sebastian lopez
 * @requires jquery
 */
(function($){

    $.fn.makeTextColored = function(settings) {

        var config = {
            color: 'red',
            backgroundcolor: 'blue'
        };

        if (settings) {$.extend(config, settings);}

        return this.each(function() {
            $(this).css('color', config.color);
            $(this).css('background-color', config.backgroundcolor);
        });
    };

})(jQuery);