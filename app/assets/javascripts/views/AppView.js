var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  render: function(){


    var tourView = $("#keyViewTemplate").html();
    this.$el.append(tourView);
    var mapView = $("#mapViewTemplate").html();
    this.$el.append(mapView);


    var GmapView = $("#GmapView").html();
    this.$el.append(GmapView);

    var sessionView = $("#tourDateTemplate").html();
    this.$el.append(sessionView);

  }
});
