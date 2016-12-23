var app = app || {};

app.TourListView = Backbone.View.extend({
    tagName: "li",

    render: function() {
        var listView = "";
        var tour = this.model.attributes;
        var title = tour.tour_name;

        this.$el.text(title);
        this.$el.prependTo("#tourList");
    },



    events: {
        'click': 'showTourInfo'
    },



    showTourInfo: function() {

        $("#tourSessions li").remove();
        $("#breweryIndexView li").remove();
        $("#b").remove();
        $("#appViewHeading").remove();


        var tour = this.model.attributes;
        var breweries = tour.breweries;
        var tour_sessions = tour.tour_sessions;


        _.each(tour_sessions, function(tour_session) {
            var tourSessionView = new app.TourSessionView({
                model: tour_session
            });
            tourSessionView.render();
        });



        _.each(breweries, function(brewery) {
            var breweryView = new app.BreweryListView({
                model: brewery
            });
            breweryView.render();
        });

        // TODO: we need to render a single mapView for this tour. We need to send that view the details of each brewery in this tour. Probably want to remove mapView stuff from BreweryListView.js
        var GmapView = new app.MapView({
            breweries: tour.breweries
        });
        // GmapView.render();
    },
});
