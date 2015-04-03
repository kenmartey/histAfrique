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
		return Session.get('eventname').location
		// return 'hello'
	}
});

