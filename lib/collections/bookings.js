Bookings = new Mongo.Collection('bookings');
Bookings.attachSchema(new SimpleSchema({

	fullName:{
		type:String,
		label: "Full Name"
	},

	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
	},

	contact: {
		type: String,
		label: "Contact"
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
