//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function moveCootie(times) {
    var $cootie, degree, i, j, interval;
    $cootie = $('.cootie.opened');
    i = 1;
    j = 0;
    degree = 15;

    function skew() {
        $cootie.css('-webkit-transform', 'skew(-' + degree + 'deg)').css('-moz-transform', 'skew(-' + degree + 'deg)').css('transform', 'skew(-' + degree + 'deg)'); //skew one way
        $cootie.css('-webkit-transform', 'skew(' + degree + 'deg)').css('-moz-transform', 'skew(' + degree + 'deg)').css('transform', 'skew(' + degree + 'deg)'); //skew the other
        //todo:opera
    }
    interval = setInterval(function(){
    skew();
    }, 1000);

    if (i < times) {//Blog: why won't this loop???
        skew();
    }++i;
    if (i>=times) {
        if (j < times || times === 0) {
            i = 1;
        }
        else {
            clearInterval(interval);
        }
    }j++;
}

function playCootie(whichColor) {
    var i = 0;
    //get letters in color name
    for (; i < whichColor.length; i++) {
        var li = '<li>' + whichColor[i] + '</li>';
        $('#progress').append(li);
    }
    moveCootie(i);
}

function drawCootie() {
    var i, $canvas, ctx, w, h, strokeColor, fillColors, rand, squareColor;
    i = 0;
    w = 140;
    h = 140;
    strokeColor = '#999';
    fillColors = ['red', 'green', 'blue', 'yellow'];
    for (; i < 4; i++) {
        $canvas = $(document.createElement('canvas')).prop({
            'width': w,
            'height': h
        }).appendTo('.cootie');
    }
    if ($('.cootie canvas', '#main').length) {
        $('.cootie canvas', '#main').each(function() {
            rand = Math.floor(Math.random() * fillColors.length);
            squareColor = fillColors.splice(rand, 1)[0];
            ctx = $(this)[0].getContext('2d'); //weird. 'Canvas' returns an array?! Blog
            ctx.strokeStyle = strokeColor;
            ctx.fillStyle = squareColor;
            ctx.fillRect(0, 0, w, h);
            $(this).addClass(squareColor);
            $(this).click(function(e) {
                var clr = e.target.className.split(' ').pop();
                //get last class name, since that has the color
                playCootie(clr);
            });
        });
    }


}
$(function() {
    drawCootie();
});