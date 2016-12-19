var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'initializeApp',
    'breweries': 'showMapView',
    // 'breweries/:id': 'showMapView',
    '*error': 'error'
  },

  initializeApp: function() {
    var appView = new app.AppView({
      collection: app.breweries
    });
    appView.render();
  },

  

});
