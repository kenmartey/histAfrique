Hotels = new Mongo.Collection('hotels');
Hotels.attachSchema(new SimpleSchema({

	hotelName:{
		type:String,
		label: "Name of Hotel"
	},

	clientName: {
		type: String,
		label: "Your FullName"

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
	noOfPeople: {
		type: String,
		label: "No Of People coming"

	},
	gender: {
		type: String,
		label: "Specify Gender coming"

	},
	howYouHeardAboutUs: {
		type: String,
		label: "How did you hear about us?",
		max: 200,
		autoform: {
			rows: 2
		}
	},
	DateOfArrival: {
		type: String,
		label: "History eg. what you know about slavery"
	},
	duration: {
		type: String,
		label: "History eg. what you know about slavery"
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
	
}));
