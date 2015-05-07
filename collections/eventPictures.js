EventPictures = new Mongo.Collection('eventPictures');
EventPictures.attachSchema(new SimpleSchema({

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
	pictureName:{
		type:String,
		optional: true,
		label: "PictureName"
	},

	history: {
		type: String,
		label: "History",
		optional: true,
		max: 200,
		autoform: {
			rows: 2
		}
	},
	createevents: {
		type: String,
		autoform: {
			omit: true
		}
	},
}));
