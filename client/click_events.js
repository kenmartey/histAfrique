
//This template helper pulls the id of the event and gives it to bookings with Session.set
Template.events.events({
	'click [data-book-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-book-event');
		// console.log(this);
		Session.set('eventId', this._id);
		Session.set('eventname', this);
		// Session.set('eventNameForMorePictures', this);
	},
	//This template pulls the id of the event picture
	'click #eventpicture': function (e,t) {
		var id = this._id
		// var _id = $(e.currentTarget).attr('eventpicture');
		Session.set("pictureId", id);
	},
	//This section gets the id of the likes
	'click [data-likes-event]': function (e,t) {
		var _id = $(e.currentTarget).attr('data-likes-event');
		// console.log(this);
		Session.set('eventId', this._id);
	},
	'click .likes': function(){
		eventsId = Session.get('eventId');
		console.log(eventsId)
		myevents = Events.update(eventsId, {$inc:{likes: +1 }});
		console.log(myevents)
	}
	
});




Template.myBoard.events({
	'click .edit': function(e, t) {
		Session.set('cardId', this._id);
	}
})

//This sections handles the click event on the customized form in the modal with the Id field
Template.modals.events({
	'change #listOfCountries': function (e,t) {
		var countries = e.currentTarget.value
		// var countries $(this).find(':selected').data("country");
		Session.set('countries', countries);

	},
	"change .file_bag": function(event, template){
		var files = $("input.file_bag")[0].files
		S3.upload({
			files:files,
			path:"images",
			unique_name: false,
			acl: "public-read"
		},function(error, success){
			if (error) {
				swal('we are sorry, something went wrong');
			}
			else {
				Session.set('fileExists', true);
				Session.set('absoluteImageUrl', success.url);
				Session.set('relativeImageUrl', success.relative_url);
				Session.set('percent_uploaded', success.percent_uploaded);
			}
		});
	},
	"click [data-action='remove-image']": function() {
		var relative_url = this.relative_url;
		S3.delete(
			relative_url,
			function(error, success) {
				if (error) {
					console.log(error);
				}
				else {
					this.status = 'removed';
					reset_form_element( $('.file_bag') );
					$("#imageThumbnail img").attr("src", "");
					$('.img-thumbnail').hide();
					$("[data-action='remove-image']").hide();
					$(".progress").remove();
				}
			});

	},
	"change .create-eventpicture-file_bag": function(event, template){
		var files = $("input.create-eventpicture-file_bag")[0].files
		S3.upload({
			files:files,
			path:"images",
			unique_name: false,
			acl: "public-read"
		},function(error, success){
			if (error) {
				swal('we are sorry, something went wrong');
			}
			else {
				Session.set('fileExists', true);
				Session.set('absoluteImageUrl', success.url);
				Session.set('relativeImageUrl', success.relative_url);
				Session.set('percent_uploaded', success.percent_uploaded);
			}
		});
	},
	"click [data-action='remove-addeventpicture-image']": function() {
		var relative_url = this.relative_url;
		S3.delete(
			relative_url,
			function(error, success) {
				if (error) {
					console.log(error);
				}
				else {
					this.status = 'removed';
					reset_form_element( $('.create-eventpicture-file_bag') );
					$("#imageThumbnail img").attr("src", "");
					$('.img-thumbnail').hide();
					$("[data-action='remove-addeventpicture-image']").hide();
					$(".progress").remove();
				}
			});

	}

});
Template.editEventsModal.events({
	'change #listOfCountries': function (e,t) {
		var countries = e.currentTarget.value
		// var countries $(this).find(':selected').data("country");
		Session.set('countries', countries);

	},
	"change .updateEvent-file_bag": function(event, template){
		var files = $("input.updateEvent-file_bag")[0].files
		S3.upload({
			files:files,
			path:"images",
			unique_name: false,
			acl: "public-read"
		},function(error, success){
			if (error) {
				swal('we are sorry, something went wrong');
			}
			else {
				Session.set('fileExists', true);
				Session.set('absoluteImageUrl', success.url);
				Session.set('relativeImageUrl', success.relative_url);
				Session.set('percent_uploaded', success.percent_uploaded);
			}
		});
	},
	"click [data-action='remove-image']": function(e, t) {
		var relative_url = this.relative_url;
		S3.delete(
			relative_url,
			function(error, success) {
				if (error) {
					console.log(error);
				}
				else {
					this.status = 'removed';
					reset_form_element( $('.updateEvent-file_bag') );
					$("#imageThumbnail img").attr("src", "");
					$('.img-thumbnail').hide();
					$("[data-action='remove-image']").hide();
					$(".progress").remove();
				}
			});
	}
});
reset_form_element = function(e) {
	e.wrap('<form>').parent('form').trigger('reset');
	e.unwrap();
}



Template.createEventPicture.events({
	'click .imageclick': function(e,t){
		// alert("hello")
		// console.log(this.url());
		// Session.set('relativeImageUrl', relative_url);
		var imageclick = e.currentTarget.getAttribute("data-id")
		Session.set('absoluteImageUrl', imageclick);
		// Session.set('relativeImageUrl', relativeImageUrl);
		// Session.set('absoluteImageUrl', success.url);
	}
})

Template.events.rendered = function () {
	new WOW().init();
};

Template.myBoard.rendered = function () {

	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});

};

Template.comments.rendered = function() {
	try {
		FB.XFBML.parse();
	}catch(e) {}   
};

Template.events.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  this.subscribe("events");
});