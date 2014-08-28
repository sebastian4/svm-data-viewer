var WeatherModel = Backbone.Model.extend({

    initialize: function(){
    },
    defaults: {
        'locid': '20500'
    },
    presName: function(data){
        var _l = data.Location;
        return _l.name + ', ' + ((_l.state === '*') ? _l.countryCode : _l.state);
    },
    parse: function(data,xhr){
        data.presName = this.presName(data);
        return data;
    },
    url: function(){
        return 'http://wxdata.weather.com/wxdata/agg/' + this.get('locid') + '.js?cb=?&key=e88ca396-a740-102c-bafd-001321203584';
    }

});
