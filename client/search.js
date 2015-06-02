// Template.search.events({
//   'keydown .search': function(e) {
//     return Session.set('filter', e.currentTarget.value);
//   },
//   'click .crushBtn': function(e) {
//     Session.set('crushReceipient', this.createdBy);
//     return $('#crushRequestModal').modal();
//   }
// });

// Template.search.helpers({
//   'people': function() {
//     return Profiles.find({
//       'fullname': {
//         '$regex': Session.get('filter'),
//         '$options': 'i'
//       }
//     }).fetch().filter(function(e) {
//       return e.createdBy !== Meteor.userId();
//     });
//   },
//   'filter': function() {
//     return Session.get('filter');
//   }
// });

// Template.events.events({
// 	'keyup .search-query': function(){
// 		// alert("hello");
// 		var g = $(this).val().toLowerCase();
// 		$(".post-title .location").each(function() {
// 			var s = $(this).text().toLowerCase();
// 			$(this).closest('.entry-post')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
// 		});
// 	}
// });

// $("#search-criteria").on("keyup", function() {
//     var g = $(this).val().toLowerCase();
//     $(".fbbox .fix label").each(function() {
//         var s = $(this).text().toLowerCase();
//         $(this).closest('.fbbox')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
//     });
// });
// var options = {
// 	keepHistory: 1000 * 60 * 5,
// 	localSearch: true
// };
// var fields = ['placeName', 'country'];

// Events = new Events('events', fields, options);