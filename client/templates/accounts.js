Meteor.startup(function () {
	AccountsEntry.config({
		homeRoute: '/' ,
      dashboardRoute: '/'      // mandatory - path to redirect to after successful sign-in
      
  });
});