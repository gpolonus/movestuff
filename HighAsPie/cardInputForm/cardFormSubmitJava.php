<?php
var_dump($_POST);
if($_POST["type"] == 'g')
{
	$cardsFileTEMP = fopen("GreenCards.java.txt", "a+");
	$str = "\t\toptions = new ArrayList<String>();
	\t\toptions.add(\"".$_POST["greenOp1"]."\");
	\t\toptions.add(\"".$_POST["greenOp2"]."\");
	\t\toptions.add(\"".$_POST["greenOp3"]."\");
	\t\toptions.add(\"".$_POST["greenOp4"]."\");
	\t\tcards.add(new GreenCard(\"".$_POST["question"]."\", options, ".$_POST["correct"]."));\n\n";

	fwrite($cardsFileTEMP, $str);

	$contents = file_get_contents("GreenCards.java.txt");
	$cardsFile = fopen("GreenCards.java", "w");
	fwrite($cardsFile, $contents."\n\t}\n\n}");
}
else if($_POST['type'] == 'r')
{
	$cardsFileTEMP = fopen("RedCards.java.txt", "a+");
	$str = "\t\tcards.add(new RedCard(\"".$_POST["question"]."\"));\n\n";

	fwrite($cardsFileTEMP, $str);

	$contents = file_get_contents("RedCards.java.txt");
	$cardsFile = fopen("RedCards.java", "w");
	fwrite($cardsFile, $contents."\n\t}\n\n}");
}

fclose($cardsFileTEMP);
fclose($cardsFile);

?>
<script>
	window.location.href= "index.html";
</script>