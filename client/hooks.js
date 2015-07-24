// var requireLogin = function() {
// 	if (!Meteor.isServer && !Meteor.userId() && !Meteor.loggingIn()) {
// 		this.redirect('auth');
// 	} else {
// 		this.next();
// 	}
// };

// Router.onBeforeAction(requireLogin, {
// 	except: ['auth']
// });

Router.onBeforeAction(function(pause) {
	if (!Meteor.user()) {
    // pause();
    swal({   title: "histAfrique alert!",   text: "you need to be logged-in to view this page, Redirecting you to Home!",   timer: 3000,   showConfirmButton: false });
    Router.go('\home');
} else {
	this.next();
}
}, {
	except: ['home', 'events', 'signup', 'signin', 'signout','eventPictures','comments','aboutHistafrique','view_map']
});


AutoForm.addHooks(null, {
	onError: function(operation, error, template) {
		console.log('Error: ' + error);
	}
})

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

AutoForm.hooks({
	insertEventForm: {
		formToDoc: function(doc, ss, formId) {
			doc.relativeImageUrl = Session.get('relativeImageUrl');
			doc.absoluteImageUrl = Session.get('absoluteImageUrl');
			doc.delivery_status = "not-delivered"
			doc.owner = Meteor.userId();
			return doc;
		},
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('insertEvents', insertDoc, function (error, result) {
				if (error) {
					this.done(new Error(error));
				}
				else {
					reset_form_element( $('.file_bag') );
					$(".progress").remove();
					$(".resetimage").remove();
					$('#createEvent').modal('hide');
			// return $('#eventSuccess').modal('show');
			swal("Good job!", "You have successfully added a historical place", "success");

		}
	});
			return false; 
		},
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

AutoForm.hooks({
	updateEventForm: {
		formToDoc: function(doc, ss, formId) {
			doc.relativeImageUrl = Session.get('relativeImageUrl');
			doc.absoluteImageUrl = Session.get('absoluteImageUrl');
			return doc;
		},
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('editEvents', currentDoc._id, updateDoc, function (error, result) {
				if (error) {
					this.done(new Error(error));
				};
			});
			this.done();
			return false;  
		},
		onSuccess: function(formType, result) {
			reset_form_element( $('.file_bag') );
			$(".progress").remove();
			$(".resetimage").remove();
			$('#editEvent').modal('hide');
			// return $('#EventPicturesSuccess').modal('show');
			swal("Great Job!", "You have successfully updated this post", "success");

		}
	}
})

AutoForm.hooks({
	insertEventPictureForm: {
		formToDoc: function(doc, ss, formId) {
			doc.relativeImageUrl = Session.get('relativeImageUrl');
			doc.absoluteImageUrl = Session.get('absoluteImageUrl');
			doc.createevents = Router.current().params._id;
			return doc;
		},
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('insertEventsPicture', insertDoc, function (error, result) {
				if (error) {
					this.done(new Error(error));
				}
				else {
					reset_form_element( $('.file_bag') );
					$(".progress").remove();
					$(".resetimage").remove();
			// return $('#eventSuccess').modal('show');
			swal("Good job!", "You have successfully added an image", "success");
		}
	})
			this.done();
			return false; 
		}
	}
})