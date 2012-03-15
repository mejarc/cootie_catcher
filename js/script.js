//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/

function moveCootie(times) { //blog: looping this is a nightmare/lesson in setInterval;
    var i = 0,
        $cootie = $('.cootie.container');
    console.log('times:' + times);
    console.log($cootie.hasClass('skew'));
    for (; i <= times; i++) {//how to get this to apply/reapply xnumber of times??
        if ($cootie.is('skew')) {
            $cootie.removeClass('skew');
        }
        else {
            $cootie.addClass('skew');
        }
    }


    //   lt = setInterval(function() {
    //        $cootie.toggleClass('skew');
    //   }, 800);
    //  rt = setInterval(function() {
    //      $cootie.toggleClass('revskew');
    //  }, 800);
    //  start++;
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
    var rand, i = 0,
        fillColors = ['red', 'green', 'blue', 'yellow'];

    console.log(i);
    for (; i < 4; i++) {
        $('<div class="cootie square">').prependTo($('.cootie.container'));
    }
    if ($('.cootie.container .square').length) {
        $('.cootie.container .square').each(function() {
            rand = Math.floor(Math.random() * fillColors.length);
            squareColor = fillColors.splice(rand, 1)[0];
            console.log(squareColor);

            $(this).addClass('target ' + squareColor);
            $(this).click(function(e) {
                var clr = e.target.className.split(' ').pop();
                //get last class name, since that has the color
                if ($(this).is('.target')) {
                    playCootie(clr);
                    $('.target').removeClass('target');
                }

            });

        });
    }
}
$(function() {
    drawCootie();
});