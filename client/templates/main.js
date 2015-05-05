//This template helper pulls the id of the event and gives it to bookings with Session.set
Template.events.events({
	'click [data-book-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-book-event');
		// console.log(this);
		Session.set('eventId', this._id);
		Session.set('eventname', this);
		// Session.set('eventNameForMorePictures', this);
	}
	
});

//This template pulls the id of the event picture
Template.events.events({
	'click #eventpicture': function (e,t) {
		var id = this._id
		// var _id = $(e.currentTarget).attr('eventpicture');
		Session.set("pictureId", id);
	}
});

//This section gets the id of the likes
Template.events.events({
	'click [data-likes-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-likes-event');
		// console.log(this);
		Session.set('eventId', this._id);
	}
});

//Getting the id and using it to get information 
//from database by quering it.
Template.createEventPicture.helpers({
	eventName: function (e, t) {
		// console.log(Session.get('pictureId'));
		_id = Session.get('pictureId');
		name = Events.findOne(_id).placeName
		return name;
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

Template.registerHelper('commentsCount', function(id){
	return Comments.find({eventsid:id}).count();
		// return 'hello'

	});
Template.events.helpers({
	people: function() {
		return myPagination.find({}, {
			itemsPerPage: 50
		});
	}
});
Template.events.events({
	// 'click .likes': function(){
	// 	var eventsId = this._id;
	// 	Session.set('selectedevents', eventsId);

	// },
	'click .likes': function(){
		eventsId = Session.get('eventId');
		console.log(eventsId)
		myevents = Events.update(eventsId, {$inc:{likes: +1 }});
		console.log(myevents)
	}

// 'click .likes':function(){
// 		Session.set('eventId', this._id);
// }
})

// i am yet to add likes code....

//This section of the code handles the delete function
Template.myBoard.helpers({
	docs: function () {
		return Events.find();
	},
	onError: function () {
		return function (error) { alert("BOO!"); console.log(error); };
	},
	onSuccess: function () {
		return function (result) { alert("You have successfully Delete a historical place"); console.log(result); };
	},
	beforeRemove: function () {
		return function (events, id) {
			var doc = Events.findOne(id);
			if (confirm('Are you sure you want to delete"' + doc.placeName + '" with it\'s history and images?')) {
				this.remove();
			}
		};
	}
});