//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function moveCootie(times) {
    var len = times,
        i = 0,
        $cootie = $('.cootie.opened');
    for (; i < len; i++) { //Blog: why won't this loop???

            $('.cootie.opened').switchClass('skew', 'revskew', 500);
            console.log($cootie.attr('class'));

    }

}

function playCootie(whichColor) {
    var i, len, li;
    //get letters in color name
    for (i = 0, len = whichColor.length; i < len; i++) {
        li = '<li>' + whichColor[i] + '</li>';
        $('#progress').append(li);
        //$('#progress li').fadeIn(1000).delay(800).fadeOut(1000);
    }
    moveCootie(i);

}

function drawCootie() {
    var $canvas, ctx, rand, squareColor;
    var i = 0,
        w = 140,
        h = 140,
        strokeColor = '#999',
        fillColors = ['red', 'green', 'blue', 'yellow'];

    for (; i < 4; i++) {
        $canvas = $(document.createElement('canvas')).prop({
            'width': w,
            'height': h
        }).appendTo('.cootie');
    }
    if ($('.cootie canvas').length) {
        $('.cootie canvas').each(function() {
            rand = Math.floor(Math.random() * fillColors.length);
            squareColor = fillColors.splice(rand, 1)[0];
            ctx = $(this)[0].getContext('2d'); //weird. 'Canvas' returns an array?! Blog
            ctx.strokeStyle = strokeColor;
            ctx.fillStyle = squareColor;
            ctx.fillRect(0, 0, w, h);
            $(this).addClass('target ' + squareColor);
            $(this).click(function(e) {
                var clr = e.target.className.split(' ').pop();
                //get last class name, since that has the color
                if ($(this).is('.target')) {
                    playCootie(clr);
                    $('.cootie canvas').removeClass('target');
                }

            });

        });
    }


}
$(function() {
    drawCootie();
});