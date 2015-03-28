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
	}

});

