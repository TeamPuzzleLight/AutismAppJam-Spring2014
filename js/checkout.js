$(function() {
    var getarray = function(number) {
        var output = [],
            sNumber = number.toString();
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        }
        if (output.length === 1) {
            output = []
        }
        return output;
    };


    var paying = 0;
    $('#wallet').on('click', 'div img', function() {
        paying += parseInt($(this).attr('alt'));
        $('#paying').html(paying);
        $(this).remove();
    });
});