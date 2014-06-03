(function($){

    $.fn.addEllipsis = function(settings){

        var config = {
            onEllipsing: null
        };

        if (settings) {$.extend(config, settings);}

        function debug( obj ) {
            console.debug(obj);
        };

        return this.each(function() {

            $(this).html($(this).html()+" ...");

            if (config.onEllipsing !== null) {
                config.onEllipsing.call( this );
            }

            if ($.fn.addEllipsis.format !== undefined ) {
                $(this).html( $.fn.addEllipsis.format( $(this).html() ) );
            }

            debug(this);
        });
    };

})(jQuery);