var app = app || {};

app.BreweryListView = Backbone.View.extend({
    tagName: "li",



    render: function() {

        var brewery = this.model;
        // the brewery variable is an object, includes all the lat and long for the brewery, etc.
        var name = brewery.brewery_name;

        this.$el.text("");
        this.$el.text(name);
        this.$el.prependTo("#breweryIndexView");


        // this.model.attributes.breweries === an array of all the associated bookings
        // 1. create a template (in script tags in app.html.erb) for a single, list-item style brewery
        // 2. create a js view that you can use to render them
        // 3. iterate through each of the breweries, creating a new brewery view and rendering it.
        // TODO: Have moved this to TourListView.    
    }
});
