Tracker.autorun(function(){
	Meteor.subscribe('images');
	Meteor.subscribe('events');
	// Meteor.subscribe('eventPictures');
});