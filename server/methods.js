Meteor.methods({
	insertEvents: function(doc) {
		Events.insert(doc, function(err, id){
		});
	},
	editEvents: function(eventId, doc) {
		Events.update({_id: eventId}, doc, function(err, success){
		});
	},
	insertEventsPicture: function(doc){
		EventPictures.insert(doc, function(err,id){
		})
	}
})