var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  render: function(){

    var mapView = $("#mapViewTemplate").html();
    this.$el.html(mapView);

    var kvt = new app.keyViewTemplate();
    kvt.render();
  }
});
