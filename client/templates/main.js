//This template helper pulls the id of the event and gives it to bookings with Session.set
Template.events.events({
	'click [data-book-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-book-event');
		// console.log(this);
		Session.set('eventId', this);
		// Session.set('eventName', this.placeName);
	}
	
});
// Template.events.events({
// 	'click [data-book-event]': function (e,t) {
// 		var _id = $(e.currentTarget).attr('data-book-event');
// 		// console.log(this);
// 		Session.set('eventId', this._id);
// 		// Session.set('eventName', this.placeName);
// 	}

// });

// Template.events.events({
// 	'click #join': function (e,t) {
// 		var _id = this._id;
// 		createevents= Events.findOne(_id)
// 		console.log(this.placeName)
// 		return this.createevents
// 	}

// });

Template.modals.helpers({
	eventName: function (e, t) {
		return Session.get('eventId').location
		// return 'hello'
	}
});
// Template.modals.helpers({
// 	'eventname': function(e,t){
// 		var sessionId = Session.get('eventId')
// 		console.log(sessionId)
// 		createevents= Events.findOne(_id).placeName
// 		console.log(createevents)
// 		return createevents
// 	}
// });

// Template.registerHelpers({
// 	'eventname': function(placeName){
// 		var _id = this._id;
// 		createevents= Events.findOne(_id, {placeName: placeName})
// 		// console.log(this.placeName)
// 		return createevents
// 	}
// });









// Template.registerHelper({
// 	'showSelectedEvent': function(_id){
// 		var selectedEvent= Session.get('selectedEvent');
// 		// console.log(showSelectedEvent)
// 		return Events.findOne(selectedEvent)
// 	}
// });
// Template.registerHelpers({
// 	placeName: function (e,t) {
// 		var _id = $(e.currentTarget).attr('data-book-event');
// 		Session.set('eventId', this.placeName);
// 	}

// });
// Template.registerHelpers('#bookEvent', function(){
// 	var placeName = $(e.currentTarget).data().placeName
// 	return this.placeName
// });

// Template.events.events({
// 	'click #bookEvent': function(e,t){
// 		var placeName = $(e.currentTarget).data().placeName
// 		return this.placeName
// 		console.log(this.placeName)
// 	}
// })