function playCootie(stage_value){
	
	if($('.closed:visible')){
		turns = stage_value.length
		for (i=0;i<turns;i++){
			switchCootie();
			letter = stage_value.substring(i,(i+1));
			letter = letter.toUpperCase();
			alert(letter); /* acts as a kind of sleep, and user verification */
		}
		$('#stage1').css('background-color',stage_value);
 	$('#stage1').text(stage_value);
 	$('instructions').text("Pick a number.");	
		
	} else if ($('#stage2:empty')) {
		turns = stage_value;
		for (i=1;i<=turns;i++){
		  switchCootie();
		  alert(i);
		}
		progressColor = $('#stage1').css('background-color');
		$('#stage2').css('background-color',progressColor);
	 	$('#stage2').text(stage_value);
	 	$('instructions').text("Pick another number.");
	} else if ($('#stage3:empty')){
		fortune_index = stage_value -1; /* arrays start at 0 */
		fortune = pickFortune(fortune_index);

		progressColor = $('#stage1').css('background-color');
		$('#stage3').css('background-color',progressColor);
 	$('#stage3').text(stage_value);
		
		$('#instructions').css('background-color',progressColor);
 	$('instructions').text(fortune);		
		$('play again').show();
		
	} else {
	//	$('instructions').text("oops!");
	}
}	

function switchCootie(){
	/*check if first time ever run  .toggle */
	if ($('closed:visible')){
		$('closed').hide();
		$('wide').show();
	} else if ($('wide:visible')) {
		$('wide').hide(); 
		$('tall').show(); 
	} else {  
	  $('wide').show(); 
	  $('tall').hide(); 
	}	  	
}

function pickFortune(fortune_index){
 fortuneArray = [
   "You will be president.",
   "You like chocolate.", 
   "You will have a great day.",
   "Your cat's breath smells like cat food.", 
   "You will lose your favorite pencil.",
   "You will not get the money you expect.",
   "You will encounter a man with blond hair on an island. Beware.",
   "You will win a video game!"
 ];
	fortune = fortuneArray[fortune_index];
	return fortune;
	
}
