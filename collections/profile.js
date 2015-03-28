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
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
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

	// createdBy: {
	// 	type: String,
	// 	autoform: {
	// 		omit: true
	// 	}
	// },

	// createdAt: {
	// 	type: Date,
	// 	autoform: {
	// 		omit: true
	// 	}
	// },

	// updatedAt: {
	// 	type: Date,
	// 	autoform: {
	// 		omit: true
	// 	}
	// },
}));