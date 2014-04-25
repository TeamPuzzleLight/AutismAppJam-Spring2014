$(function() {
    var count = 0;
    $(".apple").draggable({
        revert: function() {
            if (currSpotCount !== 7) {
                return "invalid"
            } else {
                document.getElementById("message").innerHTML = "Your Basket is full.";
                return "invalid"
            }
        }
    });

    $(".basketSpot").draggable({
        revert: "invalid"
    });

    $("#basket").droppable({
        drop: function(event, ui) {
            count++;
            ui.draggable.remove();
        },
        accept: function() {
            if (count < 6) {
                return true;
            } else {
                $("#message").html("Your Basket is full.");
                return false;
            }
        }

    });

    $(".items > div").droppable({
        drop: function(event, ui) {
            amount = amount - 2;
            document.getElementById("display").innerHTML = amount;
            var copy = ui.draggable.html();
            currSpotCount--;
        }
    });

});

function getAmount() {
    return amount.innerHTML;
}