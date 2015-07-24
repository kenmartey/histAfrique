if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: false,
    prettyJson: true
  });

  // Maps to: /api/posts/:id
  Api.addRoute('v1/data/historical-places.json', {authRequired: false}, {
    get: function () {
      var historicalPlaces = Events.find().fetch();
      if (historicalPlaces) {
        return {status: 'JSON Responds OK', data: historicalPlaces};
      }
      return {
        statusCode: 404,
        body: {status: 'fail', message: 'historical data not found'}
      };
    }
  })
  Api.addRoute('v1/historical-places/post/', {authRequired: false}, {
   post: {
    // roleRequired: ['author', 'admin'],
    action: function () {

     var placeName = this.bodyParams.placeName;
     var history = this.bodyParams.history;
     var source = this.bodyParams.source;
     var country = this.bodyParams.country;
     var province = this.bodyParams.province;
     var latitude = this.bodyParams.latitude;
     var longitude = this.bodyParams.longitude;
     var likes = this.bodyParams.likes;
     var absoluteImageUrl = this.bodyParams.absoluteImageUrl;
     var relativeImageUrl = this.bodyParams.relativeImageUrl;
     var owner = this.bodyParams.owner;
     var createdAt = this.bodyParams.createdAt;

     var history_place = Events.insert({placeName:placeName, history:history, source: source,
      country: country, province:province, latitude:latitude, longitude:longitude,likes: likes,
      absoluteImageUrl: absoluteImageUrl, relativeImageUrl: relativeImageUrl, owner:owner, createdAt: createdAt
    })
     if(history_place){
      return{status: "A historical place has been added successfully", data: history_place};
    };
    return{
      statusCode: 400,
      body: {status: "Failed", message: "Unable to make a post"}
    };

  }
}
})
  Api.addRoute('v1/historical-places/update/', {authRequired: false}, {
   put: {
    // roleRequired: ['author', 'admin'],
    action: function () {
      var id = this.bodyParams.id;
      var placeName = this.bodyParams.placeName;
      var history = this.bodyParams.history;
      var source = this.bodyParams.source;
      var country = this.bodyParams.country;
      var province = this.bodyParams.province;
      var latitude = this.bodyParams.latitude;
      var longitude = this.bodyParams.longitude;
      var likes = this.bodyParams.likes;
      var absoluteImageUrl = this.bodyParams.absoluteImageUrl;
      var relativeImageUrl = this.bodyParams.relativeImageUrl;
     // var owner = this.bodyParams.owner;
     // var createdAt = this.bodyParams.createdAt;

     var history_place = Events.update(id, {$set: {placeName:placeName, history:history, source: source,
      country: country, province:province, latitude:latitude, longitude:longitude,likes: likes,
      absoluteImageUrl: absoluteImageUrl, relativeImageUrl: relativeImageUrl
    }})
     if(history_place){
      return{status: "A historical place has been updated successfully", data: history_place};
    };
    return{
      statusCode: 400,
      body: {status: "Failed", message: "Unable to make a post"}
    };

  }
}
})
  Api.addRoute('historical-places/:id', {authRequired: false}, {
    get: function () {
      var historicalPlacesById = Events.findOne(this.urlParams.id)
      if (historicalPlacesById) {
        return {status: 'success', data: historicalPlacesById};
      }
      return {
        statusCode: 404,
        body: {status: 'fail', message: 'historical data not found'}
      };
    }
  });
  Api.addRoute('v1/historical-data/delete/', {authRequired: false}, {
    delete: {
    // roleRequired: ['author', 'admin'],
    action: function () {

      console.log("hellow")
      var historical_data = Events.remove(this.bodyParams.id)
      if (historical_data){
        return{status: 'historical data Deleted successfully', data: historical_data};
      }
      return {
        statusCode: 400,
        body: {status: 'fail', message: 'Unable to Delete a historical data'}
      };
    }
  }
})
}