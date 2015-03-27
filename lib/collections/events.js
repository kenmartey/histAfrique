Events = new Mongo.Collection('event');
Events.attachSchema(new SimpleSchema({

	placeName:{
		type:String,
		label: "Place of Visit"
	},

	history: {
		type: String,
		label: "History",
		max: 200
	},

	location: {
		type: String,
		label: 'Location'
	},
	contact: {
		type: Number,
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
		label: 'Choose file'
	},
	// owner: {
	// 	type: String,
	// 	autoform: {
	// 		omit: true
	// 	},
	// 	autoValue: function(){
	// 		if (this.isInsert){
	// 			return Meteor.userId();
	// 		}
	// 	}
	// },
}));
