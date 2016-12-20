var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'initializeApp',
    'breweries': 'showMapView',
    // 'breweries/:id': 'showMapView',
    '*error': 'error'
  },

  initializeApp: function() {
    var appView = new app.AppView();
    appView.render();

  },

showMapView: function (id){

  console.log(id);
}


});
