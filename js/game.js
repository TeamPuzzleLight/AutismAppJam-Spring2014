$(function() {
    $('#startgame').click(function() {

        $('body').append('<div id="instruction"><h2>Please add the items into your basket by clicking on them</h2></div>');
        //apple, banana, broccoli, carrot, tomato
        var food = [2, 3, 1, 2, 1];
        var foodimages = ["images/apple.jpg", "images/banana.jpg", "images/Broccoli.jpg", "images/carrot.jpg", "images/tomato.jpg", ];

        var updateShoppingList = function(index) {
            $($('#shoppinglist li span')[index]).html(food[index] < 0 ? '0' : food[index]);
        };

        $('#logo').remove();
        $(this).remove();
        $('#gamescreen').load("../ShoppingList.html", function() {
            $('#gamearea div').click(function() {
                var it = null;
                var index = $(this).index() - 1;
                food[index] -= 1;
                //                $($('#shoppinglist li span')[index]).html(food[index] < 0 ? '0' : food[index]);
                updateShoppingList(index);
                var newimage = '<img src=' + foodimages[index] + " class=foodinbasket alt=" + "'" + index + "'" + "/>";
                console.log(newimage);
                $('#basket').append(newimage);


            });

            $('#basket').on('click', 'img', function(event) {
                //console.log(event);
                var source = $(event.currentTarget);
                var i = source.attr('alt');
                console.log(i);
                food[i] += 1;
                updateShoppingList(i);
                source.remove();
            });

        });

    });
});