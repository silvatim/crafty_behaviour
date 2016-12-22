var app = app || {};

app.InitializeView = Backbone.View.extend({
    el: "#app",

    render: function() {



        var initializeView = $("#initializeViewTemplate").html();
        this.$el.append(initializeView);

        var b = function($b, speed) {
            var beeWidth = $b.width();

            $b.animate({ //animates the bee to the right side of the screen
                "left": "90%"
            }, speed, function() { //when finished it goes back to the left side
                $b.animate({
                    "left": 0 - beeWidth + "px"
                }, speed, function() {
                    b($b, speed); //finally it recalls the same function and everything starts again
                });
            });
        };

        $(function() { //document ready
            b($("#b"), 7000); //calls the function
        });

    }

});
