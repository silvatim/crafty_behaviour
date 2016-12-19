var app = app || {};

$(document).ready(function (){

if($("#app").length === 0){
  return false;
}

  app.breweries = new app.Breweries();
  app.breweries.fetch().done(function(){

    app.router = new app.Router();
    Backbone.history.start();

  });

});
