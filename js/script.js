var cootie = {
    play: function(whichColor) {
        var i, $progress = $('#progress').empty(),
            $cootie = $('.cootie.container'),
            len = whichColor.length,
            letters = whichColor.split(''),
            li;
        //get letters in color name; print each
        $.each(letters, function(i, char) {
            li = document.createElement('li');
            $(li).text(char).hide().delay(800 * i).appendTo($progress).fadeOut('fast', function() {
                $(this).fadeIn('slow');
                if ($cootie.is('.skew')) {
                    $cootie.removeClass('skew');
                }
                else {
                    $cootie.addClass('skew');
                }
            });

        });
    },
    draw: function() {
        var rand, i = 0,
            fillColors = ['red', 'green', 'blue', 'yellow'];


        for (; i < fillColors.length; i++) {
            $('<div class="cootie square">').prependTo($('.cootie.container'));
        }
        if ($('.cootie.container .square').length) {
            $('.cootie.container .square').each(function() {
                rand = Math.floor(Math.random() * fillColors.length);
                squareColor = fillColors.splice(rand, 1)[0];

                $(this).addClass('target ' + squareColor);
                $(this).click(function(e) {
                    var clr = e.target.className.split(' ').pop();
                    //get second CSS class name, since that has the color
                    if ($(this).is('.target')) {
                        cootie.play(clr);
                        // $('.target').removeClass('target');
                    }

                });

            });
        }
    }
};

$(function() {
    cootie.draw();
});​