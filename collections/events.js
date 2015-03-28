Events = new Mongo.Collection('events');
Events.attachSchema(new SimpleSchema({

	placeName:{
		type:String,
		label: "Place of Visit"
	},

	history: {
		type: String,
		label: "History",
		max: 200,
		autoform: {
			rows: 2
		}
	},

	location: {
		type: String,
		label: 'Location'
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
