
//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function moveCootie(howMuch) {
var $j, h, w,m;
$j='.cootie canvas';
h=280;
w=280;
m=20;
$j.css(
{ 'width': w,
            'height': h,
            'margin-right':m+'px'}
);



//$('.cootie canvas', '#main')
//.removeClass('closed')
//.addClass('opened')
//.animate({
//top: y,
//left: x},500, 'linear',function() {}
//); 
}
function playCootie(whichColor) {
var i=0;
    //get letters in color name
    for (; i < whichColor.length; i++) {
        var li = '<li>' + whichColor[i] + '</li>';
        $('#progress').append(li);
        moveCootie(i + 1);
    }
}



function drawCootie() {
    var i, $canvas, ctx, w, h, grad, strokeColor, fillColors, rand, squareColor;
    i=0;
    w = 140;
    h = 140;
    strokeColor = '#999';
    fillColors = ['red', 'green', 'blue', 'yellow'];
    for (; i < 4; i++) {
        $canvas = $(document.createElement('canvas')).prop({
            'width': w,
            'height': h
        }).addClass('closed').appendTo('.cootie');
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
        });
        $(this).click(function(e) {
            var clr = e.target.className.split(' ').pop();
            //get last class name, since that has the color
            playCootie(clr);
        });
    }
}
$(function() {
    drawCootie();
});
