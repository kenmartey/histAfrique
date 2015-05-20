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