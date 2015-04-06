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
	
	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose Profile Picture'
	},
	eventsid: {
		type: String,
		autoform: {
			omit: true
		}
	},
}));
