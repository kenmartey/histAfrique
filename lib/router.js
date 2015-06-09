Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	// waitOn: function(){
	// 	return Meteor.subscribe('User')
	// }
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/events', function(){
	this.render('events');
},{
	waitOn: function(){
		Meteor.subscribe('events')

	},

	name: 'events',
	data: function(){
		fastRender: true
		return {
			// createevents: Events.find().fetch().reverse()
			createevents: myPagination.find({}, {itemsPerPage: 6})
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

// Router.route('/create_profile', function(){
// 	this.render('profile');
// },
// {
// 	name: 'profile'

// });
// Router.route('/profile', function(){
// 	this.render('view_profile');
// },
// {
// 	name: 'view_profile',
// 	data: function(){
// 		// var _id = this._id;
// 		return{
// 			profiles: Profiles.find().fetch()
// 		}
// 	}
// });
Router.route('/events/:_id/view_event_pictures', function(){
	this.render('createEventPicture');
},
{
	name: 'eventPictures',
	waitOn: function(){
		var _id = this.params._id;
		Meteor.subscribe('eventPictures', _id)
	},
	
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
	this.render('signin')
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
	waitOn: function(){
		var _id = this.params._id;
		Meteor.subscribe('comments',_id)
	},
	data: function(){
		var _id = this.params._id;
		return {
			eventscomment: Events.findOne(_id),
			comments: Comments.find({eventsid: _id}).fetch()
		}
	}
	// onAfterAction: function() {
	// 	var events;
 //      // The SEO object is only available on the client.
 //      // Return if you define your routes on the server, too.
 //      if (!Meteor.isClient) {
 //      	return;
 //      }
 //      events = this.data().eventscomment;
 //      SEO.set({
 //      	title: events.placeName,
 //      	meta: {	
 //      		'description': events.history,
 //      		'keywords': "['african history','historical places','african historical places','Africa']"
 //      	},
 //      	og: {
 //      		'title': events.placeName,
 //      		'description': events.history,
 //      		'image': Images.findOne() ? Images.findOne().url : null
 //      	}
 //      });
 //  }
 // onAfterAction: function() {
 // 	var events;
 //      // The SEO object is only available on the client.
 //      // Return if you define your routes on the server, too.
 //      if (!Meteor.isClient) {
 //      	return;
 //      }
 //      events = this.data().eventscomment;
 //      SEO.set({
 //      	title: Events.findOne() ? Events.findOne().placeName : null,
 //      	meta: {	
 //      		'description': Events.findOne() ? Events.findOne().history : null,
 //      		'keywords': "['african history','historical places','african historical places','Africa']"
 //      	},
 //      	og: {
 //      		'title': Events.findOne() ? Events.findOne().placeName : null,
 //      		'description': Events.findOne() ? Events.findOne().history : null,
 //      		'image': Images.findOne() ? Images.findOne().url : null
 //      	}
 //      });
 //  }
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
	waitOn: function(){
		var _id = this.params._id;
		Meteor.subscribe('picturedetail', _id)
	},
	data: function(){
		var _id = this.params._id;
		return {
			picturedetail: EventPictures.findOne(_id)
		}
	}
});

Router.route('/about-histafrique', function(){
	this.render('aboutHistafrique')
},{
	name: 'aboutHistafrique'

})