var app = app || {};

$(document).on("ready turbolinks:load", function() {

    if ($("#app").length === 0) {
        return false;

    }




    app.tours = new app.Tours();
    app.tours.fetch().done(function() {

        app.router = new app.Router();
        Backbone.history.start();

    });



});
