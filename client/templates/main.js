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
//This template helper pulls the id of the countries and gives it to Province with Session.set
// Template.province.events({
// 	'change #test': function (e,t) {
// 		// var id = this._id
// 		var id = $(e.currentTarget).find(':selected').data("id");
// 		Session.set('countriesId', id);
// 		console.log(id)
// 	}

// });


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
	'click .likes': function(){
		eventsId = Session.get('eventId');
		console.log(eventsId)
		myevents = Events.update(eventsId, {$inc:{likes: +1 }});
		console.log(myevents)
	}
})

// i am yet to add likes code....

//This section of the code handles the delete function
Template.myBoard.helpers({
	docs: function () {
		return Events.find();
	},
	onError: function () {
		return function (error) { alert("Error, Delete wasn't successful!"); console.log(error); };
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
//This helps collect the id from a clicked card and makes it available for editing.
Template.myBoard.events({
	'click .edit': function(e, t) {
		Session.set('cardId', this._id);
	}
})

Template.modals.helpers({
	doc: function() {
		return Events.findOne(Session.get('cardId'));
	},
	profiledoc: function () {
		return Profiles.findOne(Session.get('profileId'));
	},
	imagedoc: function(){
		// console.log(Session.get('imageUrl'));
		return Session.get('imageUrl')
		
	},
//this is linked to the province field in the EVENTS collection
provinceListings: function() {
	//I am storing the items in province in config.js in provinceByCountry and filtering using 
	// Underscore.js to provice _.filter
	var provinceByCountry =  _.filter(Config.province, function(item, key){
		//comparing items in the country in Events collection to countries in province
		//if its true then return the provinces attached to it
		if (item.country == Session.get ("countries"))
			return true
		else return false

	});
	//Returning the name from provinces attached to country
	return _.map(provinceByCountry, function(item, key) {
		return {
			label: item.name,
			value: item.name
		}
	});
}
});

Template.view_profile.events({
	'click .editprofile': function(e, t){
		console.log(this._id);
		Session.set('profileId', this._id);
	}
})
Template.createEventPicture.events({
	'click .imageclick': function(e,t){
		console.log(this.url());
		Session.set('imageUrl', this.url());
	}
})
//This sections handles the click event on the customized form in the modal with the Id field
Template.modals.events({
	'change #listOfCountries': function (e,t) {
		var countries = e.currentTarget.value
		// var countries $(this).find(':selected').data("country");
		Session.set('countries', countries);

	}

});