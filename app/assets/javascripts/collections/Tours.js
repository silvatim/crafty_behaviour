var app = app || {};

app.Tours = Backbone.Collection.extend({
  url: "/tours",

  model: app.Tour,

  initialize: function () {
    console.log("A new collection of tours was created");

  }
});
