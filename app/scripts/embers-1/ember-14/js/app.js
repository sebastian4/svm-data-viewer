var App = Ember.Application.create();

App.Router.map(function(){
  this.resource('files', {path: "/"}, function(){
      this.resource('file', {path: ':file_id'});
  });
});

App.FilesRoute = Ember.Route.extend({
  model: function() {
    return FILES;
  }
});

App.FileRoute = Ember.Route.extend({
    model: function(params){
        return FILES[params.file_id];
    }
});

App.FileController = Ember.ObjectController.extend({
    done: function(){
        this.set('isEditing', false);
    },
    
    edit: function(){
        this.set('isEditing', true);
    }
});

Ember.Handlebars.helper('markdown', function(value){
   var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});