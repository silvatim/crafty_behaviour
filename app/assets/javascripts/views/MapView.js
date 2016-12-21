var app = app || {};

app.MapView = Backbone.View.extend({
  el: "#map",



  initialize: function(options){
    var map = {};
    var breweries = options.breweries;
    console.log(breweries);
    var lat = breweries[0].latitude;
    var lng = breweries[0].longitude;
    var latLng = {lat: lat, lng: lng};
    console.log(latLng);
  //   var brewery = this.model;
  //   var maplat = brewery.latitude;
  //   var maplong = brewery.longitude;
  //   var myLatLng = {lat: maplat, lng: maplong};
  //   console.log( maplat, maplong );
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: latLng
    });
    for (var i = 0; i < breweries.length; i++) {
      console.log(breweries[i]);
      var marker = new google.maps.Marker({
        position: {lat: breweries[i].latitude, lng: breweries[i].longitude},
        map: map,
        title: 'Hello World!'
      });
      var brewery_name = breweries[i].brewery_name;
      var description = breweries[i].description;
      var image = breweries[i].image;
      var website = breweries[i].website;


      var infoWindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'mouseover', (function(marker) {
        return function() {
          var content = "<h2>" + brewery_name + " </h2><img class='brewpics' src='" + image + "'><p>" + description + "</p>";
          console.log(content);
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        }
      })(marker));

    }

  }

});
