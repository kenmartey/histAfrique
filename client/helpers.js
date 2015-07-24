//Getting the id and using it to get information 
//from database by quering it.
Template.createEventPicture.helpers({
	eventName: function (e, t) {
		// console.log(Session.get('pictureId'));
		_id = Session.get('pictureId');
		name = Events.findOne(_id) ? Events.findOne(_id).placeName : null
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

Template.editEventsModal.helpers({
	doc: function() {
		return Events.findOne(Session.get('cardId'));
	},
	"files": function(){
		if (Session.get('fileExists')) {
			return S3.collection.find();
		};
	},
	'complete': function() {
		if (this.status == 'complete') {
			return true;
		};
	}
})
Template.modals.helpers({
	profiledoc: function () {
		return Profiles.findOne(Session.get('profileId'));
	},
	imagedoc: function(){
		return Session.get('absoluteImageUrl');

	},
	"files": function(){
		if (Session.get('fileExists')) {
			return S3.collection.find();
		};
	},
	'complete': function() {
		if (this.status == 'complete') {
			return true;
		};
	}
});

Template.registerHelper('provinceListings', function () {
//this is linked to the province field in the EVENTS collection
var index = _.pluck(Config.countries, 'country').indexOf(Session.get('countries'));
var provinceByCountry = Config.countries[index] ? (Config.countries[index]).province : null

//Returning the name from provinces attached to country
return _.map(provinceByCountry, function(item, key) {
	return {
		label: item,
		value: item
	}
});

});


Template.registerHelper('username', function(_id){
	var user = Meteor.user();
	if (user && user.emails)
		return user.emails[0].address;
})

Template.registerHelper('images', function(){
	return Images.find();
});

Template.events.helpers({
	events: function() {
		return myPagination.find({}, {
			itemsPerPage: 6
		});
	}
});


/*
VIEW DIRECTION TO THE PLACE ON MAP
*/

if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});
}

Template.view_map.helpers({
	exampleMapOptions: function() {
    // Make sure the maps API has loaded
    _id = Session.get('myeventsid');
    latitude = Events.findOne(_id).latitude;
    longitude = Events.findOne(_id).longitude
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: 8
      };

  }
}
});

Template.view_map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    // var marker = new google.maps.Marker({
    // 	position: map.options.center,
    // 	map: map.instance
    // });
  var marker = new google.maps.Marker({
  	position: map.options.center,
  	map: map.instance
  });
});
});
