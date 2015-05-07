Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/events', function(){
	this.render('events');
},
{
	name: 'events',
	data: function(){
		return {
			createevents: Events.find().fetch().reverse()
		}
	}
});
Router.route('/dashboard',function(){
	this.render('myBoard');
},
{
	name: 'myBoard',
	data: function(){
		return {
			dashboardevents: Events.find().fetch().reverse()
		}
	}

});

Router.route('/create_profile', function(){
	this.render('profile');
},
{
	name: 'profile'

});
Router.route('/profile', function(){
	this.render('view_profile');
},
{
	name: 'view_profile',
	data: function(){
		// var _id = this._id;
		return{
			profiles: Profiles.find().fetch()
		}
	}
});
Router.route('/events/:_id/view_event_pictures', function(){
	this.render('createEventPicture');
},
{
	name: 'eventPictures',
	
	data: function(){
		var _id = this.params._id;
		return {
			createevents: Events.findOne(_id),
			eventpictures: EventPictures.find({createevents:_id}).fetch()
		}
	}

});

Router.route('/signin',function(){
	this.render('signin')
},
{
	name: 'signin'

});

Router.route('/signup', function(){
	this.render('signup')
},
{
	name: 'signup'

});

Router.route('/signout', function(){
	this.render('signout')
},
{
	name: 'signout',
	data: function(){
		return Meteor.logout();
	}
});
Router.route('/event/:_id/comments', function(){
	this.render('comments')
},
{
	name: 'comments',
	data: function(){
		var _id = this.params._id;
		return {
			eventscomment: Events.findOne(_id),
			comments: Comments.find({eventsid: _id}).fetch()
		}
	}
});
Router.route('/event/:location/', function(){
	this.render('events');
},
{
	name:'eventLocation',

	data: function(){
		return {
			createevents: Events.find({location: this.params.location}).fetch().reverse(),
			pageTitle: 'location:' + this.params.location
		}
	}

});
Router.route('/events/eventpicture/:_id/detail/', function(){
	this.render('pictureDetails')
},
{
	name: 'pictureDetails',
	data: function(){
		var _id = this.params._id;
		return {
		// 	// createevents: Events.findOne(_id),
		// 	// eventpictures: EventPictures.findOne({createevents:_id}).fetch()
		picturedetail: EventPictures.findOne(_id)
	}
}
});