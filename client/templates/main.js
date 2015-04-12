//This template helper pulls the id of the event and gives it to bookings with Session.set
Template.events.events({
	'click [data-book-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-book-event');
		// console.log(this);
		Session.set('eventId', this._id);
		Session.set('eventname', this);
		// Session.set('eventName', this.placeName);
	}
	
});

Template.modals.helpers({
	eventName: function (e, t) {
		return Session.get('eventname').placeName
		// return 'hello'
	}
});

Template.view_profile.helpers({
	isOwner: function(e,t){
		return this.owner === Meteor.userId();
	}
});
Template.myBoard.helpers({
	isOwner: function(e,t){
		return this.owner === Meteor.userId();
	}
})
Template.view_bookings.helpers({
	placeName: function (e, t) {
		return Session.get('eventname').placeName
		// return 'hello'
	}
});
Template.eventPictures.helpers({
	morepictures: function (e, t) {
		return Session.get('eventname').placeName
		// return 'hello'
	}
});
// Template.registerHelper('commentscount',function(placename){
// 	return Comments.find({placeName: placename}).count()
// });

// Template.comments.helpers({
// 	commentscount: function(placename){
// 		return Comments.find({placeName: placename}).count();
// 	}
// });
Template.comments.helpers({
	commentscount: function(e,t){
		return Comments.find().count();
	}
});

Template.registerHelper('commentscount', function(){
	return Comments.find().count();
});