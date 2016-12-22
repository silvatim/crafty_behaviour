var app = app || {};

app.InitializeView = Backbone.View.extend({
    el: "#app",

    render: function() {

      var initializeView = $("#initializeViewTemplate").html();
      this.$el.append(initializeView);
    }

});
