App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', { path: ':post_id' });

	});
	

});

App.PostsRoute = Ember.Route.extend({
	model: function() {

		return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').then(function(data) {
			return data.posts.map(function(post) {
				post.body = post.content;
				return post;
			});

		});
		//return posts;
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
		//return posts.findBy('id', params.post_id);
		return $.getJSON('http://tomdale.net/api/get_post/?id='*params.post_id*'&callback=?').then(function(data) {
			data.post.body = data.post.content;
				return data.post;
			});
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{

	id: "1",
	title: "Rails is Omakase",
	author: { name: "d2h"},
	date: new Date('12-27-2012'),
	excerpt: "There are losts of a la carte software environments in this world. Places where in...",
	body: "I want this for my ORM, I want that for my template language, and let's finish it off"
}, {

	id: "2",
	title: "The Parley Letter",
	author: { name: "d2h"},
	date: new Date('12-24-2012'),
	excerpt: "My [appearance on the Ruby Rogues podcast] (http://thenuge.com)",
	body: "A long list of topics were raised and I took time to ramble at large about all of the..."

}];