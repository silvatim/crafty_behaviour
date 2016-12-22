var app = app || {};

app.AppView = Backbone.View.extend({
    el: "#app",


    render: function() {

        var mapView = $("#mapViewTemplate").html();
        this.$el.html(mapView);
        var tourView = $("#keyViewTemplate").html();
        this.$el.prepend(tourView);
        var sessionView = $("#tourDateTemplate").html();
        this.$el.prepend(sessionView);
        var GmapView = $("#GmapView").html();
        this.$el.prepend(GmapView);
    }
});
