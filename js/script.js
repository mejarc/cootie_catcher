//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function playCootie(whichColor) {
    //get letters in color name
    for (var i = 0, len = whichColor.length; i < len; i++) {
        var li = '<li>' + whichColor[i] + '</li>';
        $('#progress').append(li);
        moveCootie(i + 1);
    }
}

function moveCootie(howMuch) {
    var i, x, y;
    for (i = 1; i <= 4; i++) {
        switch (i) {
        case 1:
            x = '';
            y = '-=20';
            break;
        case 2:
            x = '+=20';
            y = '';
            break;
        case 3:
            x = '';
            y = '-=20';
            break;
        case 4:
            x = '';
            y = '-=20';
            break;
        }
        //dynamically assign values to top, left per nth-child selector.
        //.cootie canvas:nth-child(1)--move up; top -=20px
        //.cootie canvas:nth-child(2)--move right; left +=20px
        //.cootie canvas:nth-child(3)--move down; top +=20px
        //.cootie canvas:nth-child(4)--move left; left -=20px
   // }
   console.log('x'+x+'y'+ y);
}


//$('.cootie canvas', '#main')
//.removeClass('closed')
//.addClass('opened')
//.animate({
//top: y,
//left: x},500, 'linear',function() {}
//); 
}

function drawCootie() {
    var $canvas, ctx, width, height, grad, strokeColor, fillColors, rand, squareColor;
    width = 140;
    height = 140;
    strokeColor = '#999';
    fillColors = ['red', 'green', 'blue', 'yellow'];
    for (i = 0; i < 4; i++) {
        $canvas = $(document.createElement('canvas')).prop({
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
            ctx.fillStyle = squareColor;
            ctx.fillRect(0, 0, width, height);
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
