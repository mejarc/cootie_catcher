//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function moveCootie(times) { //blog: looping this is a nightmare/lesson in setInterval;
    var rt, lt, $cootie = $('.cootie.opened'),
        start = times - 1 || 1,
        skew = function() {
            lt = setInterval(function() {
                $cootie.toggleClass('skew');
            }, 800);

            rt = setInterval(function() {
                $cootie.toggleClass('revskew');
            }, 800);
            start++;
            if (start >= times) {
                clearInterval(lt);
                clearInterval(rt);
            }
        };
    skew();

}

function playCootie(whichColor) {
    var i, len = whichColor.length,
        li;
    //get letters in color name
    for (i = 0; i < len; i++) {
        li = '<li>' + whichColor[i] + '</li>';
        $('#progress').append(li);
    }
    moveCootie(len);
}

function drawCootie() {
    var $canvas, ctx, rand, squareColor, i = 0,
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