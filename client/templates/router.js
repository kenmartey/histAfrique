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
		return{
			profiles: Profiles.find().fetch()
		}
	}
});