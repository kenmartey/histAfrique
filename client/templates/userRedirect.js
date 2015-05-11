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
	redirect: '/create_profile'
});
AccountsTemplates.configureRoute('signOut', {
	// name: 'signin',
	// path: '/login',
	// template: 'myLogin',
	// layoutTemplate: 'myLayout',
	redirect: '/events'
});
var mySubmitFunc = function(error, state){
	if (!error) {
		if (state === "signIn") {
      // Successfully logged in
      return $('#signinSuccess').modal('show');
      
  }
  if (state === "signUp") {
      // Successfully registered
      return $('#signupSuccess').modal('show');
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