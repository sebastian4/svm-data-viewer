var weatherModel = Backbone.Model.extend({

    // Overriding one of the Model's built-in methods.
    // The initialize method is called automatically when the Model is instantiated.
    // The fetch method tells the Model to use jQuery to make a JSONP call
    //     using the url method below.
    // Notice that the fetch success callback
    //     is invoking the weatherView instance directly.
    initialize: function(){
        // Do nothing
    },
    // The default don't have to be set in this case,
    //     but it helps indicate what the important properties are, and
    //     if the defaults are displayed, you know something went wrong.
    defaults: {
        'locid': '00000'
    },
    // This is a custom presentation logic method that creates the location name.
    presName: function(data){
        var _l = data.Location;
        return _l.name + ', ' + ((_l.state === '*') ? _l.countryCode : _l.state);
    },
    // Apply the presentation rules to the data before populating the Model.
    parse: function(data,xhr){
        data.presName = this.presName(data);
        return data;
    },
    // This is the URL that we'll use to retrieve the data
    url: function(){
        return 'http://wxdata.weather.com/wxdata/agg/' + this.get('locid') + '.js?cb=?&key=e88ca396-a740-102c-bafd-001321203584';
    }

});
