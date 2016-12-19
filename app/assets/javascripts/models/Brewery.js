var app = app || {};

app.Brewery = Backbone.Model.extend({
  urlRoot: "/breweries",
  defaults:{
    brewery_name: "",
    address: "",
    longitude: 100,
    latitude: 100,
    image: "",
    description: "",
    website: ""
  },

  initialize: function (){
    console.log( "A new brewery was created" );
  }
});

var brewery = new app.Brewery();

brewery.fetch();
