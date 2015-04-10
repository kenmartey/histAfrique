Events = new Mongo.Collection('events');
// Events.initEasySearch('placeName');
Events.attachSchema(new SimpleSchema({

	placeName:{
		type:String,
		label: "Place of Visit eg. Elmina Castle"
	},

	history: {
		type: String,
		label: "History eg. what you know about slavery",
		max: 200,
		autoform: {
			rows: 2
		}
	},

	location: {
		type: String,
		label: 'Location eg. Central Region'
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
		label: 'Picture of the place'
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
