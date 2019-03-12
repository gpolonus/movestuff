<?php
echo '<pre>';
var_dump($_POST);
echo '</pre>';
$drawings = fopen("drawnFunctions.js","a");
fwrite($drawings,$_POST['function']."\n if(drawingButtons)\ndocument.getElementById('drawingButtons').innerHTML+='<button onclick=\"drawThing = ".$_POST['functionName']."\">Draw ".$_POST['functionName']."</button>';\n\n");
fclose($drawings);
?>
<script>
window.location.href="playCanvase.html";
</script>