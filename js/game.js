$(function() {
    $('#startgame').click(function() {
        $('#logo').remove();
        $(this).remove();
        $('#gamescreen').load("../ShoppingList.html");
    });



});