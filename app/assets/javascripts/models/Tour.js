var app = app || {};

app.Tour = Backbone.Model.extend({
  urlRoot: "/tours",

  default:{
    tour_name: "innerwest",
    price: 120.50,
    num_capacity: 15

  },

  initialize: function(){
    console.log("A new Tour!");
  }
});
