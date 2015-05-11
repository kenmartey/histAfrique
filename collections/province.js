Province = new Mongo.Collection('province');
Province.attachSchema(new SimpleSchema({
	province: {
		type: String,
		label: "Province",
		max: 5000,
		autoform: {
			rows: 5
		}
	},
	country:{
		type: String,
		autoform:{
			omit: true
		}
	},
}));
