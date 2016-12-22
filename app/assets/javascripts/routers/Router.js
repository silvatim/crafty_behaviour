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

        var initializeView = new app.InitializeView();
        initializeView.render();

        // var cityFringe = new app.TourListView({
        //   model: app.tours.models[0]
        // });
        //
        // cityFringe.render();
        // cityFringe.showTourInfo();

    }
});
