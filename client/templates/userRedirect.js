AccountsTemplates.configureRoute('signIn', {
	redirect: '/'
});
AccountsTemplates.configureRoute('signUp', {
	redirect: '/'
});

var mySubmitFunc = function(error, state){
	if (!error) {
		if (state === "signIn") {
			return swal("Welcome!", "You have successfully signed-In", "success");
		}
		if (state === "signUp") {
			return swal({   title: "histAfrique",   
				text: "You can add historical places from Dashboard or Tour the app",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#9DC7B3",   
				confirmButtonText: "My Dashboard",   
				cancelButtonText: "Tour Now",   
				closeOnConfirm: false,   closeOnCancel: false }, 
				function(isConfirm){  
					if (isConfirm) { 
						Router.go('/dashboard')    
						swal("My Dashboard!", "You can now add historical places to histAfrique. Please Avoid Duplication!", "success");   
					} else {   
						Router.go('/historical-places')  
						swal("Tour Now", "You can tour histAfrique and discover more historical places in Africa", "success");   } });
		}
	}
};

AccountsTemplates.configure({
	onSubmitHook: mySubmitFunc
});

Accounts.onLogout(function() {
	return swal("histAfrique", "You have successfully signed out. Thanks for your time!", "success");
});