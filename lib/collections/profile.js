Profiles = new Mongo.Collection('profiles');
Profiles.attachSchema(new SimpleSchema({

	fullName: {
		type: String,
		max: 50
	},

	username: {
		type: String,
		max: 70
	},

	gender: {
		type: String,
		allowedValues: [ 'Male', 'Female' ]
	},

	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose file'
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