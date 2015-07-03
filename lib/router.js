Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loading",
	notFoundTemplate: '404'	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/historical-places', function(){
	this.render('events');
},{
	waitOn: function(){
		Meteor.subscribe('events')
		Meteor.subscribe('comments')

	},

	name: 'events',
	data: function(){
		fastRender: true
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

Router.route('/events/:_id/view_images', function(){
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
Router.route('/history/:_id/comments', function(){
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
Router.route('/history/:location/', function(){
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
Router.route('/histories/history-image/:_id/detail/', function(){
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