var app = app || {};

app.Breweries = Backbone.Collection.extend({
  url: "/breweries",

  model: app.Tours,

  initialize: function () {
    console.log("A new collection of tours was created");
  }
});
