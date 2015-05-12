
Events = new Mongo.Collection('events');
// Events.initEasySearch('placeName');
this.Pages = new Meteor.Pagination(Events,{
	templateName: "events", 
	perPage: 2
});

Events.attachSchema(new SimpleSchema({

	placeName:{
		type:String,
		label: "Place of Visit eg. Elmina Castle"
	},

	history: {
		type: String,
		label: "History eg. what you know about slavery",
		max: 5000,
		autoform: {
			rows: 5
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
	likes: {
		type: Number,
		optional: true,
		autoform:{
			omit: true

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
	countries:{
		type: String,
		autoform:{
			omit: true
		}
	},
	province:{
		type: String,
		autoform:{
			omit: true
		}
	}
}));
