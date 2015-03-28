AutoForm.addHooks(null, {
	onError: function(operation, error, template) {
		console.log('Error: ' + error);
	}
})

// this section collects the id of the job and add it to the application form
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
	}
});

