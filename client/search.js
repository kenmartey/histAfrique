//capture the value typed in the search Box
Template.events.events({
	'keyup #searchtext': function(event, template) {
		searchName = document.getElementById('searchtext').value
		Session.set("searchText", searchName);
		// console.log(searchName)
	}
})

//search through the collection for the word entered into the textbox
Template.events.helpers({
	createevents: function(){

		if(Session.get("searchText"))
			return myPagination.find({placeName: {$regex: Session.get("searchText"), $options: "i"}}, {itemsPerPage: 6})
		else{
			return myPagination.find({}, {itemsPerPage: 6})
		}
	}
});

