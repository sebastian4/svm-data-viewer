(function($){

    console.log("starting app");

    var myWeatherModel = new WeatherModel({
        //locid: '22042'
    });

    var myWeatherView = new WeatherView({
        el: '#weatherObservationModule',
        model: myWeatherModel,
        tmpl: '#weatherObservationModuleTemplate'
    });

    $( "#city-chosen" ).change(function() {
        var citySelected = $('#city-chosen :selected').text();
        console.log("selected "+citySelected);

        myWeatherModel = new WeatherModel({
            locid: citySelected
        });

        myWeatherView = new WeatherView({
            el: '#weatherObservationModule',
            model: myWeatherModel,
            tmpl: '#weatherObservationModuleTemplate'
        });
    });

})(jQuery);
