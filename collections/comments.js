Comments = new Mongo.Collection('comments');
// Comments.initEasySearch('placeName');
Comments.attachSchema(new SimpleSchema({

	name:{
		type:String,
		label: "Name"
	},

	email: {
		type: String,
		label: "Email"
	},
	
	comment: {
		type: String,
		label: "Leave a Review",
		max: 200,
		autoform: {
			rows: 2
		}
	},
	eventsid: {
		type: String,
		autoform: {
			omit: true
		}
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			return Meteor.userId();
		}
	}
	
}));
