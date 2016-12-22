var app = app || {};

app.MapView = Backbone.View.extend({
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
        }

    }

});
