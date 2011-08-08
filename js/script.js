//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/


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
            grad = ctx.createLinearGradient(0, 0, width, height);
            grad.addColorStop(0, '#fff');
            grad.addColorStop(1, squareColor);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);


            //canvas.live('click', function() {
            //   playCootie(stage_value);
            // });
        });
    }
}
$(function() {
    //   var canvas, ctx, width, height, padding, colors, stage_value;
    drawCootie();
    // 
});
