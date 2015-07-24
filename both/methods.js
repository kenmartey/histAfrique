// Meteor.methods({
// 	likes: function(eventId){
// 		var events = Events.findOne(eventsId);
// 		Events.update(eventId,
// 			{$set: {likes:events.likes + 1}
// 		})
// 	}
// })
// var events = EventsFilter.search.getFields(true);

// PeopleFilter.search.setField('name');
// PeopleFilter.search.setField('account_balance');
// Meteor.methods({
// 	search: function(){
	
// 		EventsFilter.search.setField('placeName');
// 	}
// 	// EventsFilter.search.setField('country');
// })
Meteor.methods({
	"owner":function() {
		owner = this.userId;
        //should print the user details if logged in, undefined otherwise.
        console.log(owner);
    }
});