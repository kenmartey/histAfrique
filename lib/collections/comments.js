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
		max: 500,
		autoform: {
			rows: 4
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
	},
	createdAt: {  
		type: Date,  
		label: Date, 
		autoform: {
			omit: true
		}, 
		autoValue: function() {  
			if (this.isInsert) {  
				return new Date();  
			}  
		}  
	}  

}));
