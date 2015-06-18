EventPictures = new Mongo.Collection('eventPictures');
EventPictures.attachSchema(new SimpleSchema({

	absoluteImageUrl: {
		type: String,
		label: "select image",
		autoform: {
			omit: true
		}
	},
	relativeImageUrl: {
		type: String,
		autoform: {
			omit: true
		}
	},
	pictureName:{
		type:String,
		optional: true,
		label: "PictureName"
	},
	createevents: {
		type: String,
		autoform: {
			omit: true
		}
	},
}));
