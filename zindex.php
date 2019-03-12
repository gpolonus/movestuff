<?php
//messes with Z-Index of stuff
		echo '
		
		$(".'.$names[$h].'").mouseover(function(){
			$(".'.$names[$h].'").css("z-index",i);
			i++;
			$(".stuff").text(i)
		});
		';
		echo '
		$(".'.$names[$h].'").click(function(){
			$(".'.$names[$h].'").css("z-index",1);
		';
?>