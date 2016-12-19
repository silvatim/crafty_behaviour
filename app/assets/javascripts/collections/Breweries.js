var app = app || {};

app.Breweries = Backbone.Collection.extend({
  url: "/breweries",

  model: app.Breweries,

  initialize: function () {
    console.log("A new collection of breweries was created");
  }
});
