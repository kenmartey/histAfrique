// Meteor.publish('User',function(){
// 	if (this.userId){
// 		return Meteor.users.find({_id: this.userId})
// 	} else {
// 		return this.ready();
// 	}
// })

Meteor.publish('events', function(){
	return	Events.find();
});

Meteor.publish('images', function(){
	return Images.find();
});

Meteor.publish('comments', function(_id){
	var events = Events.findOne(_id)
	return Comments.find({eventsid: _id})
})
// Meteor.publish('pictureDetails', function(_id){
// 	return EventPictures.find(_id)
// })
Meteor.publish('myBoard', function(){
	return Events.find();
})
Meteor.publish('eventPictures', function(_id){
	var events = Events.findOne(_id)
	return EventPictures.find({createevents:_id})
})
// Meteor.publish('comments', function(_id){
// 	return Comments.find();
// })
