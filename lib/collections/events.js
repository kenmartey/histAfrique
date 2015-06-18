Events = new Mongo.Collection('events');
Events.attachSchema(new SimpleSchema({

	placeName:{
		type:String,
		label: "Historical place eg. Elmina Castle"
	},

	history: {
		type: String,
		label: "History eg. what you know about slavery",
		max: 5000,
		autoform: {
			rows: 4
		}
	},
	source:{
		type:String,
		label: "Source of Information"
	},
	country: {
		type: String,
		autoform: {
			options: function() {
				return _.map(Config.countries, function(item, key) {
					return {
						label: item.country,
						value: item.country
					}
				});
			}
		}
	},

	province: {
		type: String,
		autoform: {
			options: []
		}

	}, 
	likes: {
		type: Number,
		optional: true,
		autoform:{
			omit: true

		}

	},
	// picture: {
	// 	type: String,
	// 	autoform: {
	// 		afFieldInput: {
	// 			type: 'fileUpload',
	// 			collection: 'Images'
	// 		}
	// 	},
	// 	label: 'Picture of the place'
	// },
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
