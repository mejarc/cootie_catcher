//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function playCootie(e,ctx,clr){
var x, y, hex;
x=e.pageX;
y=e.pageY;
c = ctx.getImageData(x, y, 1, 1).data;
hex = '#' + clr;
console.log('!!'+x+','+y+','+hex);
}

function drawCootie() {
    var canvas, ctx, width, height, grad, strokeColor, fillColors, rand, squareColor;
    width = 140;
    height = 140;
    strokeColor = '#ccc';
    fillColors = ['red', 'green', 'blue', 'yellow'];
    for (i = 0; i < 4; i++) {
        canvas = $(document.createElement('canvas')).prop({
            'width': width,
            'height': height
        }).addClass('closed').appendTo('.cootie');
    }
    if ($('.cootie canvas', '#main').length) {
        $('.cootie canvas', '#main').each(function() {
            rand = Math.floor(Math.random() * fillColors.length);
            squareColor = fillColors.splice(rand, 1)[0];
            ctx = $(this)[0].getContext('2d'); //weird. 'Canvas' returns an array?! Blog
            ctx.strokeStyle = strokeColor;
           // grad = ctx.createLinearGradient(0, 0, width, height);
           // grad.addColorStop(0, '#fff');
           // grad.addColorStop(1, squareColor);
            ctx.fillStyle = squareColor;
            ctx.fillRect(0, 0, width, height);
        });
        $(this).click( function(e) {
            //   playCootie(stage_value);
            playCootie(e, ctx,squareColor);
          });
            //how to attach event to each square?
    }
}
$(function() {
    //   var canvas, ctx, width, height, padding, colors, stage_value;
    drawCootie();
    // 
});
