// TODO:
//-make lib folder with libs
//-copy setup of https://github.com/javascript-playground/backbone-require-example
//http://stackoverflow.com/questions/17316252/separate-template-files-not-rendering-using-backbone-and-underscore

(function($){

    var myWeatherModel = new weatherModel({
        locid: '90210'
    });

    var myWeatherView = new weatherView({
        el: '#weatherObservationModule',
        model: myWeatherModel,
        tmpl: '#weatherObservationModuleTemplate'
    });

})(jQuery);
