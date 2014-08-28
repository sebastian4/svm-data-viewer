var weatherView = Backbone.View.extend({

    initialize: function(){
        var _self = this;
        this.model.on('change',function(){
            if (_self.model.get('locid') !== '00000'){
                _self.render();
            }
        },this.model);
        this.model.fetch();
    },
    render: function(){
        // convert the Model data to JSON for templating
        var data = this.model.toJSON();
        // grab the innerHTML of the template, combine with JSON, and turn into HTML.
        var template = _.template($(this.options.tmpl).html(),data);
        // place the HTML into the target DIV
        this.$el.html(template);
        // return the instance to support chaining
        return this;
    }

});

