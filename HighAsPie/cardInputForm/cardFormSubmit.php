<?php
var_dump($_POST);
$cardsFile = fopen("cards.js", "a");
if($_POST["type"] == 'g')
{
		fwrite($cardsFile, "cardsGreen.push({
		\tquestion:'".$_POST["question"]."',
		\toptions:[
			\t\t'".$_POST["greenOp1"]."',
			\t\t'".$_POST["greenOp2"]."',
			\t\t'".$_POST["greenOp3"]."',
			\t\t'".$_POST["greenOp4"]."',
		],
		\tcorrect:".$_POST["correct"]."
	});\n\n");
}
else if($_POST['type'] == 'r')
{
	fwrite($cardsFile, "cardsRed.push({
		\tquestion:'".$_POST["question"]."'
	});\n\n");
}
fclose($cardsFile);

?>
<script>
	window.location.href= "index.html";
</script>