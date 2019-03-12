<html>
<head>
<title>WATCH AT YOUR OWN RISK</title>
<script src="move.js"></script>
</head>
<body>
<form><input type="text" name="num" placeholder="How many!?!?"></form>
<div id="outer"></div>
<script>

outer = document.getElementById("outer");
<?php
if(isset($_GET['num']))
{
	$num = $_GET['num'];
}
else
{
	$num = 3;
}
echo '
i=0;
num = '.$num.'
inner = document.getElementsByClassName("inner");

while(i<num)
{
	space = 100;
	outer.innerHTML += "<div class=\'inner\' style=\'height:"+(Math.round(Math.random()*space+1))+";width:"+(Math.round(Math.random()*space+1))+";\'></div>";

	inner[i].style.zIndex = (-(inner[i].style.width * inner[i].style.height));
	
	boxtop = new Array();
	boxleft = new Array();
	boxwidth = new Array();
	boxheight = new Array();
	starttop = new Array();
	startleft = new Array();

	boxtop[i] = Math.round(Math.random()*space+1);
	boxleft[i] = Math.round(Math.random()*space+1);
	boxwidth[i] = Math.round(Math.random()*space+1);
	boxheight[i] = Math.round(Math.random()*space+1);
	starttop[i] = (boxtop[i] + boxheight[i])/2;
	startleft[i] = (boxleft[i] + boxwidth[i])/2;
	i++;
}

movethings(inner, starttop, startleft, boxtop, boxleft, boxheight, boxwidth); 

';
?>
</script>
</body>
</html>