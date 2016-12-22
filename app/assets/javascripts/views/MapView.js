var app = app || {};

app.MapView = Backbone.View.extend({
<<<<<<< HEAD
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

    var image_marker = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //        // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
    //        // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
    //        // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
         };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };

    for (var i = 0; i < breweries.length; i++) {
      console.log(breweries[i]);
      var marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: breweries[i].latitude, lng: breweries[i].longitude},
        map: map,
        icon: image_marker,
        shape: shape,
        title: 'Hello World!'
      });
        // marker.addListener('click', toggleBounce);

      // function toggleBounce() {
      //   if (marker.getAnimation() !== null) {
      //     marker.setAnimation(null);
      //     } else {
      //       marker.setAnimation(google.maps.Animation.BOUNCE);
      //     }
      //   }


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
=======
    el: "#map",



    initialize: function(options) {
        var map = {};
        var breweries = options.breweries;
        // console.log(breweries);
        var lat = breweries[0].latitude;
        var lng = breweries[0].longitude;
        var latLng = {
            lat: lat,
            lng: lng
        };

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: latLng
        });

        var createMarker = function( num ) {

            console.log(breweries[num]);

            var marker = new google.maps.Marker({
                position: {
                    lat: breweries[num].latitude,
                    lng: breweries[num].longitude
                },
                map: map,
                title: 'Hello World!'
            });
            var brewery_name = breweries[num].brewery_name;
            var description = breweries[num].description;
            var image = breweries[num].image;
            var website = breweries[num].website;


            function makeInfoWindowEvent(map, infowindow, marker) {
                return function() {
                    infowindow.open(map, marker);
                };
            }

            var infoWindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', (function(marker) {
                return function() {
                    var content = "<h2>" + brewery_name + " </h2><img class='brewpics' src='" + image + "'><p>" + description + "</p>";
                    console.log(content);
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                };
            })(marker));
        };

        for (var i = 0; i < breweries.length; i++) {
            createMarker(i);
>>>>>>> a4616a859b61fbbfa051cc64716e484b3cbe5895
        }

    }

});
