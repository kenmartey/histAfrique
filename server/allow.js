
Events.allow({
  insert: function(userId, doc) {
    if (userId) {

      return true;
    }
  },
  update: function(userId, doc, fields, modifier) {
    if (userId) {
      return true;
    }
  },
  remove: function(userId, doc) {
    if (userId) {
      return true;
    }
  }
});
Comments.allow({
  insert: function(userId, doc) {
    if (userId) {

      return true;
    }
  },
  update: function(userId, doc, fields, modifier) {
    if (userId) {
      return true;
    }
  },
  remove: function(userId, doc) {
    if (userId) {
      return true;
    }
  }
});
EventPictures.allow({
  insert: function(userId, doc) {
    if (userId) {

      return true;
    }
  },
  update: function(userId, doc, fields, modifier) {
    if (userId) {
      return true;
    }
  },
  remove: function(userId, doc) {
    if (userId) {
      return true;
    }
  }
});
Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fields, modifier) {
    return false;
  },
  remove: function(userId, doc) {
    return false;
  },
  download: function() {
    return true;
  }
});