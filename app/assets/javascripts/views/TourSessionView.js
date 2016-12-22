var app = app || {};

app.TourSessionView = Backbone.View.extend({
    tagName: "li",


    render: function() {

        var tour = app.tours.get(this.model.tour_id);
        var tour_name = tour.attributes.tour_name;
        var tour_session = this.model;
        // console.log(content.tour_name);
        var date = moment(tour_session.tour_date).format('Do MMM YYYY');
        // console.log(dates.tour_date);

        this.$el.text(tour_name + ": " + date);
        this.$el.appendTo("#tourSessions");



        // this.model.attributes.tour_sessions === an array of all the tour sessions
        // 1. create a template (in script tags in app.html.erb) for a single, list-item style tour
        // 2. create a js view that you can use to render them
        // 3. iterate through each of the tour sessions, creating a new brewery view and rendering it.

    }

});
