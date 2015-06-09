Router.onBeforeAction(function(pause) {
	if (!Meteor.user()) {
    // pause();
    swal({   title: "histAfrique alert!",   text: "you need to be logged-in to view this page, Redirecting you to Home!",   timer: 4000,   showConfirmButton: false });

    // alert(
    // 	"you need to be logged-in to view this page, Redirecting you to Home!"
    // 	)
Router.go('\home');
} else {
	this.next();
}
}, {
	except: ['home', 'events', 'signup', 'signin', 'signout','eventPictures','comments','aboutHistafrique']
});


AutoForm.addHooks(null, {
	onError: function(operation, error, template) {
		console.log('Error: ' + error);
	}
})

// this section collects the id of the Event and add it to the Event picture collection
AutoForm.hooks({
	insertEventPictureForm: {
		formToDoc: function(doc, ss, formId) {
			console.log(doc);
			doc.createevents = Router.current().params._id;
			console.log(doc);
			return doc;
		}
	}

});
// this section collects the id of the Event and add it to bookings collection with Session.get
AutoForm.hooks({
	insertBookingForm: {
		formToDoc: function(doc, ss, formId) {
			console.log(doc);
			doc.eventsid = Session.get('eventId');
			doc.eventname = Session.get('eventname');
			console.log(doc);
			return doc;
		}
	}

});
// this section collects the id of the country and add it to Province collection with Session.get
// AutoForm.hooks({
// 	insertProvinceForm: {
// 		formToDoc: function(doc, ss, formId) {
// 			console.log(doc);
// 			doc.country = Session.get('countriesId');
// 			console.log(doc);
// 			return doc;
// 		}
// 	}

// });

// this section collects the id of the Event and add it to the Comment collection
AutoForm.hooks({
	insertCommentForm: {
		formToDoc: function(doc, ss, formId) {
			console.log(doc);
			doc.eventsid = Router.current().params._id;
			console.log(doc);
			return doc;
		}
	}

});
// AutoForm.hooks({
// 	insertEventsForm: {
// 		formToDoc: function(doc, ss, formId) {
// 			console.log(doc);
// 			doc.likes = Session.get('eventId');
// 			console.log(doc);
// 			return doc;
// 		}
// 	}

// });


AutoForm.hooks({
	insertEventForm: {
		onSuccess: function(formType, result) {
			$('#createEvent').modal('hide');
			// return $('#eventSuccess').modal('show');
			swal("Good job!", "You have successfully added a historical place", "success");
		}
	},
	updateEventForm:{
		onSuccess: function(formType, result){
			return $('#editEvent').modal('hide');
		}
	},
	insertProfileForm: {
		onSuccess: function(formType, result) {
			return $('#profileSuccess').modal('show');
			Router.go ('/events');
		}

	},
	updateProfileForm:{
		onSuccess: function(formType, result){
			return	$('#UpdateProfile').modal('hide');
		}
	},
	insertEventPictureForm:{
		onSuccess: function(formType, result) {
			$('#createEventPicture').modal('hide');
			// return $('#EventPicturesSuccess').modal('show');
			swal("Great Job!", "You have successfully added an image", "success");

		}
	},
	insertBookingForm:{
		onSuccess: function	(formType, result){
			$('#bookEvent').modal('hide');
			return $('#EventBookingSuccess').modal('show');
		}
	},
	onSubmitHook:{
		onSuccess: function(formType, result){
			return	$('#loginSuccess').modal('show');
		}
	},
	insertCommentForm:{
		onSuccess: function(formType, result){
			$('#commentModal').modal('hide');
			// return $('#successCommentModal').modal('show');
			return swal("Good job!", "Thanks for your comment", "success")
		}
	}
});


