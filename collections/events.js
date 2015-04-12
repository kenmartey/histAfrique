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
		autoform:{
			options: function(){
				return[{
					label:"Ashanti Region",
					value:"Ashanti Region"
				},{

					label:"Brong Ahafo Region",
					value:"Brong Ahafo Region"
				},{

					label:"Central Region",
					value:"Central Region"
				},{

					label:"Eastern Region",
					value:"Eastern Region"
				},{

					label:"Greater Accra",
					value:"Greater Accra"
				},{

					label:"Northern Region",
					value:"Northern Region"
				},{

					label:"Upper East",
					value:"Upper East"
				},{

					label:"Upper West",
					value:"Upper West"
				},{

					label:"Volta Region",
					value:"Volta Region"
				},{

					label:"Western Region",
					value:"Western Region"
				}
				]
			}
		}
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
	},

}));
