//http://www.banane.com/2010/02/07/how-cootie-catcher-is-made/
function drawCootie() {
var canvas, ctx, width, height, grad,strokeColor, fillColor;
width=140;
height=140;
strokeColor='#300';
fillColor='#ffc';
for (i=0; i<4; i++) {
canvas=$(document.createElement('canvas'))
.prop({'width':width, 'height':height})
.addClass('closed')
.appendTo('.cootie');
}
if($('.cootie canvas').length) {
 $('.cootie canvas').each(function(){
   ctx = $(this)[0].getContext('2d'); //weird. 'Canvas' returns an array?! Blog
   ctx.strokeStyle=strokeColor;
       // ctx.fillStyle = fillColor; 
       //todo: cycle through bg colors through selectors
       //ctx.moveTo(0,0);
       //ctx.lineTo(width, height);
       //ctx.stroke();
       var myGradient = ctx.createLinearGradient(0, 0, width, height);
myGradient.addColorStop(0, "#fff");
myGradient.addColorStop(1, "#900");
ctx.fillStyle = myGradient;
ctx.fillRect(0, 0, width, height);
      // ctx.fillRect(0, 0, width, height);
       // ctx.fill();  
      
        //canvas.live('click', function() {
         //   playCootie(stage_value);
       // });
    });
}}
$(function() {
 //   var canvas, ctx, width, height, padding, colors, stage_value;
drawCootie();
   // colors = ['red', 'green', 'blue', 'yellow'];
 
});

