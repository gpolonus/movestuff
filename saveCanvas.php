<?php

$img = $_POST['picture'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
$fileName = "canvases/" . uniqid("pic") . '.png';
file_put_contents($fileName, $fileData);

?>
<script>
	window.location.href = "mirrormouse3.html";
</script>