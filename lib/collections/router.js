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
	name: 'events'
});

Router.route('/profile', function(){
	this.render('profile');
},
{
	name: 'profile'
});