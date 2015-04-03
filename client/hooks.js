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
			doc.eventsid = Session.get('eventId');
			console.log(Session.get('eventId'))
			// doc.eventsName=Session.get('eventName');
			// console.log(Session.get('eventName'))
			console.log(doc);
			return doc;
		}
	}

});
	// before: {
	// 	formToDoc: function(doc, ss, formId) {
	// 		doc.eventsName=Session.get('eventName');
	// 		console.log(Session.get('eventName'));
	// 		console.log(doc);
	// 		return doc;
	// 	}
	// }


	AutoForm.hooks({
		insertEventForm: {
			onSuccess: function(formType, result) {
				$('#createEvent').modal('hide');
				return $('#eventSuccess').modal('show');
			}
		},
		insertProfileForm: {
			onSuccess: function(formType, result) {
				return $('#profileSuccess').modal('show');
				Router.go ('events')
			}
		},
		insertEventPictureForm:{
			onSuccess: function(formType, result) {
				$('#createEventPicture').modal('hide');
				return $('#EventPicturesSuccess').modal('show');
			}
		},
		insertBookingForm:{
			onSuccess: function	(formType, result){
				$('#bookEvent').modal('hide');
				return $('#EventBookingSuccess').modal('show');
			}
		}
	});

