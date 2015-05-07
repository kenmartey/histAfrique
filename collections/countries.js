Countries = new Mongo.Collection('countries');
Countries.attachSchema(new SimpleSchema({
	countries: {
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
	}
}));
