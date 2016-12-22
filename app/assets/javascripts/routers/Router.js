var app = app || {};

app.Router = Backbone.Router.extend({

    routes: {
        '': 'initializeApp',
        'breweries': 'showMapView',
        '*error': 'error'
    },

    initializeApp: function() {
        var appView = new app.AppView();
        appView.render();

        _.each(app.tours.models, function(tour) {
            var tourView = new app.TourListView({
                model: tour
            });
            tourView.render();
        });

    }
});
