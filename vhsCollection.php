<html>
<head>
<style>
	#canvas
	{
		position: absolute;
		top: 0px;
		left: 0px;
	}
</style>
</head>
<body>
<canvas id="canvas"></canvas>
<script>
//preliminary stuff
function get(id)
{
	return document.getElementById(id);
}

function getClasses(clas)
{
	return document.getElementsByClassName(clas);
}
var canvas = get("canvas");
var ctx = canvas.getContext("2d");
var pageHeight = document.body.clientHeight;
var pageWidth = document.body.clientWidth;
ctx.canvas.height = pageHeight;
ctx.canvas.width = pageWidth;

//the actual data structure
var showHanger = new Array();
for(i = 0 ; i < 6; i++)
	shoeHanger[0] = {contents:new Array(),capacity:15};

var blondie = new Array();
blondie[0] = new Array();
blondie[0][0] = {contents:new Array(),capacity:4};
blondie[0][1] = new Array();
blondie[1][0] = new Array();
blondie[1][1] = new Array();
for(i=0; i < 3; i++)
{
	blondie[0][1][i] = {contents:new Array(),capacity:18};
	blondie[1][0][i] = {contents:new Array(),capacity:18};
	blondie[1][1][i] = {contents:new Array(),capacity:18};
}
blondie[1][1][2].capacity = 14;

//title,medium,number,row,place
function addMedia()
{

}
</script>
</body>
</html>