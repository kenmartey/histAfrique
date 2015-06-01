// Meteor.publish('User',function(){
// 	if (this.userId){
// 		return Meteor.users.find({_id: this.userId})
// 	} else {
// 		return this.ready();
// 	}
// })