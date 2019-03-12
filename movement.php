<?php
$h = 1;
while($h<=8){
echo '
		left'.$h.' = document.getElementById("'.$names[$h].'").style.left;
		width'.$h.' = document.getElementById("'.$names[$h].'").style.width;
		p'.$h.'=left'.$h.';
		d'.$h.'=true;
		function b'.$h.'(){
		box'.$h.' = document.getElementById("'.$names[$h].'");
		document.getElementById("'.$names[$h].'").style.left = p'.$h.' + "px";
		box'.$h.'.innerHTML = box'.$h.'.style.left;
		if(left'.$h.' + width'.$h.'< 500 && d'.$h.' == true)
			{
				p'.$h.'++;
			}
		else if(left'.$h.' + width'.$h.' == 500)
			{
				d'.$h.' = false;
				p'.$h.'--;
			}
		else if(left'.$h.' + width'.$h.' <= 500 && d'.$h.' == false && p'.$h.' != 0){
				p'.$h.'--;
			}
		else if(left'.$h.'== 0){
				d'.$h.' = true;
				p'.$h.'++;
			}
			setTimeout(b'.$h.',1);
		}';
		$h++;
}

?>