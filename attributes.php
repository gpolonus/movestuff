<?php
$names = array(
	1 => 'one',
	2 => 'two',
	3 => 'three',
	4 => 'four',
	5 => 'five',
	6 => 'six',
	7 => 'seven',
	8 => 'eight',
	);
$h=1;

while($h <= 8){
		echo 'top'.$h.' = Math.round(Math.random()*500)+1;';
		echo 'left'.$h.' = Math.round(Math.random()*500)+1;';
		echo 'width'.$h.' = Math.round(Math.random()*500)+1;';
		echo 'height'.$h.' = Math.round(Math.random()*500)+1;';
				
// fixes stuff if stuff is wrong
		echo '
		if(height'.$h.' + top'.$h.' >= 500){
			height'.$h.' = 500 - top'.$h.';
		}
		else{}

		if(width'.$h.' + left'.$h.' >= 500){
			width'.$h.' = 500 - left'.$h.';
		}
		else{}
		';
// SETS all variables as the actual css attributes
		echo '
		$(".'.$names[$h].'").css("top",top'.$h.');	
		$(".'.$names[$h].'").css("left",left'.$h.');
		$(".'.$names[$h].'").css("width",width'.$h.');	
		$(".'.$names[$h].'").css("height",height'.$h.');	
		';
				$h++;
	//final closing for loop
	}?>