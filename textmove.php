<html>
<head>
<style>
/**{
	font-family: "Comic Sans MS";
}*/
div{
	position: absolute;
	border-radius: 500px;
	text-align: center;
	overflow: hidden;
}
#stuff{
	position: absolute;
	top: 0px;
	left:0px;
	font-size: 14px;
	z-index:2;
	text-align: center;
	color:#000;
	border-radius: 0px;
	height:200px;
}
#border{
	position: absolute;
	width:0px;
	height:0px;
	top:0px;
	left:0px;
	background-color: #000;
	border-radius: 0px;
}
</style>
</head>
<?php
if(isset($_GET['num']))
{
	$num = $_GET['num'];
}
else
{
	$num = 1;
}
$g =1;
echo'<body onload="';
while($g <= $num){
	echo '
boxmove'.$g.'()
';
$g++;
}
$fart = $num +1;
echo'">

<div id="stuff"><a href="?num='.$fart.'">
<button type="button">Add A Box!</button>
</a><br>
<!--<form id="form">
<input type="text" placeholder="Horizontal Restraint" name="h"><br>
<input type="text" placeholder="Vertical Restraint" name="v"><br>
<button type="button" onclick="changesize()">Change the Sizes!</button>
</form>-->

<br></div>
<div id="border"></div>
';

$g = 1;
while($g <= $num){
	echo'
<div id="box'.$g.'"></div>
';
$g++;
}
?>
<script src="jquery.js"></script>
<script>

//THE SIZES OF THE WHOLE DANG THING
sizesv = screen.availHeight - 100;
sizesh = screen.availWidth;
// sizesv = window.innerHeight - 100;
// sizesh = screen.innerWidth;
function changesize()
{
	form = document.getElementById('form');
	sizeh = form.h.value;
	sizesv = form.v.value;
}
stuff = document.getElementById('stuff');
border = document.getElementById('border');
<?php
$i = 1;
while($i<=$num){
echo '
//MAKING SIZES

top'.$i.' = Math.round(Math.random()*(sizesv/2)-1)+1;
left'.$i.' = Math.round(Math.random()*(sizesh/2-1))+1;
height'.$i.' = Math.round(Math.random()*(sizesv - top'.$i.'-1))+1;
width'.$i.' = Math.round(Math.random()*(sizesh - left'.$i.'-1))+1;
box'.$i.' = document.getElementById("box'.$i.'");


//COLORS!!!
num1'.$i.' = Math.round(Math.random()*14+1);
num2'.$i.' = Math.round(Math.random()*14+1);
num3'.$i.' = Math.round(Math.random()*14+1);';
$d=1;
while($d<=3){
	echo '
	if(num'.$d.$i.' == 10){num'.$d.$i.' = "a"}
	else if(num'.$d.$i.' == 11){num'.$d.$i.' = "b"}
	else if(num'.$d.$i.' == 12){num'.$d.$i.' = "c"}
	else if(num'.$d.$i.' == 13){num'.$d.$i.' = "d"}
	else if(num'.$d.$i.' == 14){num'.$d.$i.' = "e"}
	else if(num'.$d.$i.' == 15){num'.$d.$i.' = "f"}
	';
$d++;
}
echo'
color'.$i.' = "#" + num1'.$i.' + num2'.$i.'+ num3'.$i.';
box'.$i.'.style.backgroundColor = color'.$i.';


//SETTING SIZES
border.style.width = sizesh;
border.style.height = sizesv;
box'.$i.'.style.left = left'.$i.';
box'.$i.'.style.width = width'.$i.';
box'.$i.'.style.height = height'.$i.';
box'.$i.'.style.top = top'.$i.';
box'.$i.'.style.fontSize = "" + height'.$i.' + "px";

//MOVEMENT FUNCTIONS
p'.$i.'=left'.$i.';
q'.$i.'=top'.$i.';
d'.$i.'=true;
s'.$i.'=true;
function boxmove'.$i.'(){
box'.$i.'.style.left = p'.$i.' + "px";
box'.$i.'.style.top = q'.$i.' + "px";
// stuff.innerHTML = box'.$i.'.style.left + " " + box'.$i.'.style.width + " " + box'.$i.'.style.height + " " + box'.$i.'.style.top;
//horizontal movement
	if(d'.$i.' == true)
	{
		if(p'.$i.' + width'.$i.' == sizesh)
		{
			d'.$i.'=false;
		}
		else if(p'.$i.'>=0)
		{
			p'.$i.'++;
		}
	}
	else if(d'.$i.' == false)
	{
		if(p'.$i.' == 0)
		{
			d'.$i.'=true;
		}
		else if(p'.$i.' + width'.$i.'<=sizesh)
		{
			p'.$i.'--;
		}
	}
//vertical movement
	if(s'.$i.' == true)
	{
		if(q'.$i.' + height'.$i.' == sizesv)
		{
			s'.$i.'=false;
		}
		else if(q'.$i.'>=0)
		{
			q'.$i.'++;
		}
	}
	else if(s'.$i.' == false)
	{
		if(q'.$i.' == 0)
		{
			s'.$i.'=true;
		}
		else if(q'.$i.' + height'.$i.'<=sizesv)
		{
			q'.$i.'--;
		}
	}
	setTimeout(boxmove'.$i.',1);
}';
$i++;
}

// MESSING WITH z-index
echo '
areas = new Array();
';
$t = 1;
while($t<=$num)
{
	echo 'areas['.$t.'] = width'.$t.'*height'.$t.';
';
	$t++;
}
echo '
areas.sort(function(a,b){return b-a});
';
$x = 1;
$w = 1;
echo'z=1;';
while($x<=$num)
{
	while($w<=$num)
	{
		if($w>1){echo'else ';}else{}echo '
		if(width'.$w.'*height'.$w.' == areas['.$x.'-1]){
			box'.$w.'.style.zIndex = z;
			box'.$w.'.innerHTML = z;
			z++;
		}
		';
		$w++;
	}
$w = 1;
$x++;
}
?>


</script>
</body>
</hmtl>