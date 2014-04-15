'use strict';

$(function() {
    $("#dragsources > div > div").draggable({
        revert: "invalid"
    });

    $("#droptargets > div > div").droppable({
        drop: function(event, ui) {
            if ($(this).html() !== "-") {
                $(this).html(ui.draggable.html());
                ui.draggable.remove();

            }
        },
        accept: function(dropElement) {
            return ($(this).html() !== "-");
        }
    });

});