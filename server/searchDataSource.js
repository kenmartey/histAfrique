// Events.defineEvents('events', function(searchText, options) {
//   var options = {sort: {isoScore: -1}, limit: 20};

//   if(searchText) {
//     var regExp = buildRegExp(searchText);
//     var selector = {$or: [
//       {placeName: regExp},
//       {description: regExp}
//       ]};

//       return Events.find(selector, options).fetch();
//     } else {
//       return Events.find({}, options).fetch();
//     }
//   });

// function buildRegExp(searchText) {
//   // this is a dumb implementation
//   var parts = searchText.trim().split(/[ \-\:]+/);
//   return new RegExp("(" + parts.join('|') + ")", "ig");
// }