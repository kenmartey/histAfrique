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
Router.route('/events/:_id/join', function(){
	this.render('bookings');
},
{
	name: 'bookings',
	
	data: function(){
		var _id = this.params._id;
		return {
			eventsid: Events.findOne(_id),
			bookings: Bookings.find({eventsid:_id}).fetch()
		}
	}

});

Router.route('dashboard/event/booking/:_id', function(){
	this.render('view_bookings');
},
{ 
	name: 'view_bookings',
	// var _id = this.params._id;
	// return{
	// 	Bookings.find(_id)
	// },
	data: function(){
		var _id = this.params._id;
		return {
			bookevents: Events.findOne(_id),
			bookings: Bookings.find({eventsid: _id}).fetch()
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
