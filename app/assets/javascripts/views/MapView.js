var app = app || {};

app.MapView = Backbone.View.extend({
  tagName: 'div',

  initialize: function(){
    this.map = new google.maps.Map(this.el, this.model.attributes);
    this.render();
  },
  render: function(){
    $('#map').replaceWith(this.el);
  }
});
APP.mapView = new APP.MapView({model: APP.map});


















