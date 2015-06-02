AccountsTemplates.configureRoute('signIn', {
	// name: 'signin',
	// path: '/login',
	// template: 'myLogin',
	// layoutTemplate: 'myLayout',
	redirect: '/'
});
AccountsTemplates.configureRoute('signUp', {
	// name: 'signin',
	// path: '/login',
	// template: 'myLogin',
	// layoutTemplate: 'myLayout',
	redirect: '/dashboard'
});
// AccountsTemplates.configureRoute('signOut', {
// 	// name: 'signin',
// 	// path: '/login',
// 	// template: 'myLogin',
// 	// layoutTemplate: 'myLayout',
// 	redirect: '/events'
// });
var mySubmitFunc = function(error, state){
	if (!error) {
		if (state === "signIn") {
      // Successfully logged in
      // return $('#signinSuccess').modal('show');
      return swal("Welcome!", "You have successfully signed-In", "success");

  }
  if (state === "signUp") {
      // Successfully registered
      // return $('#signupSuccess').modal('show');
      return swal("Good job!", "You have successfully signed up", "success");

  }
}
};

AccountsTemplates.configure({
	onSubmitHook: mySubmitFunc
});
// Router.route('/sign-out', {
// 	name: 'signOut',
// 	onBeforeAction: function() {
// 		Meteor.logout(function() {
// 			return Router.go('/signIn');
// 		});
// 		this.next();
// 	}
// });