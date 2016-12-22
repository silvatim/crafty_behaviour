var app = app || {};

app.MapView = Backbone.View.extend({
    el: "#map",

    initialize: function(options) {
        // var map = {};
        var breweries = options.breweries;
        // console.log(breweries);
        var lat = breweries[0].latitude;
        var lng = breweries[0].longitude;
        var latLng = {
            lat: lat,
            lng: lng
        };

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: latLng
        });

        var image_marker = {
            url: 'https://i.gyazo.com/thumb/200/_eb58c8d0345b271c2da891461944b6cb-png.jpg',
            //   //        // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            //   //        // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            //   //        // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        //       // Shapes define the clickable region of the icon. The type defines an HTML
        //       // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        //       // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };

        var createMarker = function(num) {

            console.log(breweries[num]);

            var marker = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                position: {
                    lat: breweries[num].latitude,
                    lng: breweries[num].longitude
                },
                map: map,
                icon: image_marker,
                shape: shape,
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
            google.maps.event.addListener(marker, 'mouseover', (function(marker) {
                return function() {
                    var content = "<h2>" + brewery_name + " </h2><img class='brewpics' src=" + image + "><p>" + description + "</p><p>" + website + " </p>";
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                };
            })(marker));
        };

        for (var i = 0; i < breweries.length; i++) {
            createMarker(i);
        }
    }
});
