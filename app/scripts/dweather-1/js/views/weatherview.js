var WeatherView = Backbone.View.extend({

    initialize: function(){
        var _self = this;
        this.model.on('change',function(){
            _self.render();
        },this.model);
        this.model.fetch();
    },
    render: function(){
        var data = this.model.toJSON();
        var template = _.template($(this.options.tmpl).html(),data);
        this.$el.html(template);
        return this;
    }

});

