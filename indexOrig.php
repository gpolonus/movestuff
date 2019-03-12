<html>
<head>
<title>GRJF'S TESTING PAGE</title>
<link rel="icon" type="image/ico" href="freak.ico" />
<style>
div
{
	position: absolute;
}

span
{
	position: absolute;
}

body
{
	margin: 0px;
	text-align: center;
}

#content
{
	position: absolute;
	top: 100px;
	width: 500px;
	overflow: scroll;
}

#opacity
{
	background-color: white;
	opacity: .7;
	position: absolute;
	top: 100px;
	width: 500px;
	z-index: -1;
}

#canvas
{
	position: absolute;
	top: 10px;
	z-index: -1;
}

#buttons
{
	position: absolute;
	top: 65px;
}

.image
{
	position: absolute;
	top: -300px;
	left:-300px;
}

#addworddiv
{
	top:65px;
	opacity: .7;
	background-color: white;
	visibility: hidden;
	width:250px;
}

#bgdiv
{
	opacity: .7;
	background-color: white;
	top:65px;
	visibility: hidden;
	width:250px;
}

#formdiv
{
	z-index: 2;
	top:65px;
}

#nextbgbutton
{
	position: absolute;
	top: 65px;
}

table
{
	/*border-collapse: collapse;*/
	position: relative;
	/*top:20px;*/
}

#th
{
	position: fixed;
}

td
{
	border: 1px solid #777;
	font-weight: bold;
}

a{
	cursor: url(cursors/link.cur),auto;
}

a:visited{
	color:#000;
}

a:visited:hover{
	color:#fff;
}

a:active{
	color:#ff2;
}

a:link{
	color:#000;
}

a:link:hover{
	color:#fff;
}

*
{
	font-family: Courier New;
	cursor:url(cursors/bw.cur),auto;
}
</style>

<?php

require_once('db_connect.php');
if(isset($_GET['newword']))
{	
	$newword = $_GET['newword'];
	$query = 'INSERT INTO words(newword,metadata) VALUES("'.$newword.'","0")';
	$result = mysql_query($query);
	if(!$result) die ("Database access failed: " . mysql_error());
}
$query = 'SELECT * FROM words';
$result = mysql_query($query);
$rows = mysql_num_rows($result);
$words = array();

for($i=1;$i<$rows;$i++)
{
	$words[$i-1] = mysql_result($result, $i, "newword");
}
?>

</head>
<body id="body">
<div id="images">
	
</div>

<span id="buttons" onmouseover="bgdivFunc()" onmouseout="bgdivFunc()">
	<form id="bgform">
		<select name='bgselect' id="options" onchange="changebg(form.bgselect.value)">
			
		</select>
		
	</form>
</span>

<button id="nextbgbutton" onclick="nextbg()">NEXT</button>

<canvas id="canvas" height="100" width="700"></canvas>

<!-- <div id="canvasInfo" style="position:absolute;visibility:hidden;top:10px;">This header is four random words supplied by visitor input in the box to the right!</div> -->

<div id="formdiv" onmouseover="getaddworddiv()" onmouseout="getridaddworddiv()">
<form id="form" method="get">
<input name="newword" placeholder="Add Your Own Word" type="text" maxlength="5">
</form>
</div>

<div id="content">
<table id="table">
	<th>MAIN STUFF</th><th>Description</th><th>Rating</th>
	<tr>
		<div class="td"><td>Canvas Shape Function Creator: <a href="movestuff/shapeFunctioner.html" target="_blank">Lines</a> or <a href="movestuff/contShapeFunctioner.html" target="_blank">Draw</a></td></div>
		<div class="td"><td>Drawing shapes in the canvas can be hard, this tool makes it easy! Draw the shape, copy the code, call the function. Done.</td></div>
		<div class="td"><td>Really only helpful for me. But it's always fun to draw shapes.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/gridDiagram.html" target="_blank">Grid Diagram of Knots</a></td></div>
		<div class="td"><td>Easy-to-use interface for creating grid diagrams of topological knots. Needed for my senior project. Hopefully it will be helpful.</td></div>
		<div class="td"><td>X's and O's are weird, but I don't care. Adjacent verticies are not well depicted as being connected, but that's a work in progress.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/raindropsCross.html" target="_blank">Swirling Lines</a></td></div>
		<div class="td"><td>Derivatived from rotating shapes. Rotating lines instead of shapes now! Make sure to use the wiggle option!</td></div>
		<div class="td"><td>Kinda trippy. Not even kidding.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/rotatingShapes.html" target="_blank">Rotating Shapes</a></td></div>
		<div class="td"><td>Triangles rotate and follow the cursor much like raindrops!</td></div>
		<div class="td"><td>I really like this one. Fun and simple.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="FormStuff/formstuff.php" target="_blank">FormStuff</a></td></div>
		<div class="td"><td>Create tables, input information, and edit data in this dynamic form!</td></div>
		<div class="td"><td>End product will be almost style-less, but function first, right?</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/grapher/testscene.html" target="_blank">Three.js Testing Site</a></td></div>
		<div class="td"><td>I downloaded Three.js and I'm trying out some stuff with it. Type ideas that I should try into the header form.</td></div>
		<div class="td"><td>Spinning donuts and moving around. Schweet Schit.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="Complex FlashCards/index.php" target="_blank">Complex Flash Cards</a></td></div>
		<div class="td"><td>Boring math thing that will help me study for my complex analysis test on my phone.</td></div>
		<div class="td"><td>15 terms. Good stuff.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/raindrop.html" target="_blank">Raindrop</a></td></div>
		<div class="td"><td>New thing! Fun circles appear RaNdOmLy!</td></div>
		<div class="td"><td>PRETTY. It works well, but never stops.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/raindrops.html" target="_blank">Raindrops</a></td></div>
		<div class="td"><td>Other new thing! Fun circles appear RaNdOmLy!</td></div>
		<div class="td"><td>PRETTIER. Mouseover everything to get circles of color!</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="assignments/index.html" target="_blank">Assignments Index</a></td></div>
		<div class="td"><td>Main page of the website I had to make in class.</td></div>
		<div class="td"><td>Kinda boring, but has some good parts.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/boxmove.html" target="_blank">Boxmove</a></td></div>
		<div class="td"><td>Finished product of the Boxmove intiative. Input number of boxes desired.</td></div>
		<div class="td"><td>This took more time than I'm willing to admit, but it works really well.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/boxmove2.html" target="_blank">Boxmove 2</a></td></div>
		<div class="td"><td>Not finished product. It just makes stuff.</td></div>
		<div class="td"><td>One step in the process of awesome.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/divzez.html" target="_blank">divzez</a></td></div>
		<div class="td"><td>Mouseover test. It works.</td></div>
		<div class="td"><td>Colors!</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/epilepsy.html" target="_blank">epilepsy</a></td></div>
		<div class="td"><td>Not finished. Expected random flashing colors.</td></div>
		<div class="td"><td>Trippy Colors! But is inoperable at the moment.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/boxmove3.html" target="_blank">Boxmove 3: Epilepsy</a></td></div>
		<div class="td"><td>Took the Boxmove code and did what I wanted to with the epilepsy code.</td></div>
		<div class="td"><td>Does make your brain hurt. And don't hit enter after inputting a number. It just refreshes.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/fill.html" target="_blank">fill</a></td></div>
		<div class="td"><td>Not intended for anyone to understand.</td></div>
		<div class="td"><td>Click on boxes and buttons. It does not contain an infinite loop. I checked.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/keycodes.html" target="_blank">KeyCodes</a></td></div>
		<div class="td"><td>Use your WASD keys. It gets messy.</td></div>
		<div class="td"><td>One step in the process of awesome that has not been acheived yet.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/puzzle.html" target="_blank">Puzzle</a></td></div>
		<div class="td"><td>Another mouseover test. It also works.</td></div>
		<div class="td"><td>Kinda tricky, kinda not.</td></div>
	</tr>
	<tr>
		<div class="td"><td><a href="movestuff/thinghting.html" target="_blank">thinghting</a></td></div>
		<div class="td"><td>The name is not misspelled.</td></div>
		<div class="td"><td>Super not fun.</td></div>
	</tr>
</table>


<h2>As a tribute to the original FREAKSQUAD website, we have a video:</h2>
<iframe width="483" height="315" src="//www.youtube.com/embed/ZQgYn23Xvck" frameborder="0" allowfullscreen></iframe>


</div>
<div id="opacity"></div>
<div id="bgdiv">Click on a button to get a different background! Woo!</div>
<div id="addworddiv">Add a 5 letter word to be included in the header!</div>

<script>
<?php
// if(isset($_GET['newword'])){echo 'document.location.href="http://voidfiller.site90.net/"';}
if(isset($_GET['newword'])){echo 'document.location.href="index.php";';}
?>
var body;
var NUMBGS;
var canvas;
var ctx;
var words;
var rows;
function init()
{
	body = document.body;
	NUMBGS = 17;
	body.style.backgroundImage = 'url(lions.png)';
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;
	ctx.font = "bold 50px Courier New";
	words  = new Array();



	// //unnecessary sizing shit
	document.getElementById('content').style.left = screen.availWidth/2 - 500/2 + 'px';
	document.getElementById('opacity').style.left = screen.availWidth/2 - 500/2 + 'px';
	document.getElementById('formdiv').style.left = screen.availWidth/2 + 500/2 - 157 + 'px';
	document.getElementById('buttons').style.left = screen.availWidth/2 - 250 + 'px';
	document.getElementById('opacity').style.height = document.body.clientHeight - 100 + 'px';
	document.getElementById('content').style.height = document.body.clientHeight - 100 + 'px';
	document.getElementById('bgdiv').style.left = screen.availWidth/2 - 500 + 'px';
	document.getElementById('addworddiv').style.left = screen.availWidth/2 + 270 + 'px';
	document.getElementById('nextbgbutton').style.left = screen.availWidth/2 + 10 + 'px';
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	<?php
	echo "rows =\"".$rows."\";";
	if($rows == 1)
		echo 'words[0] = "Bad";';
	else
	{
		for($i=0;$i<$rows-1;$i++)
		{
			echo "words[".$i."] = '".$words[$i]."';\n";
		}
	}
	?>
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	changebg(Math.random()*(NUMBGS-1)+1);
	writeOptions();
	setInterval(nextbg(),30000);
}
init();

function changebg(num)
{
	body.style.backgroundImage = 'url("bg'+num+'.jpg")';
	writeheader();
}
	
function writeheader()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'white';
	if(words[0]=='Bad')
		headstring = 'No words in bank.';
	//numbers = new Array();
	else
	{
		// for(i=0;i<4;i++)
		// 	numbers[i] = Math.round(Math.random()*(rows-2));
		// headstring = words[numbers[1]]+' '+words[numbers[2]]+' '+words[numbers[3]]+' '+words[numbers[4]];
		headstring = words[Math.round(Math.random()*(rows-2))]+' '+words[Math.round(Math.random()*(rows-2))]+' '+words[Math.round(Math.random()*(rows-2))]+' '+words[Math.round(Math.random()*(rows-2))];
	}
	ctx.fillText(headstring, 0, 50);
	ctx.strokeText(headstring, 0, 50);
	centerit = headstring.length * 700/23;
	canvas.style.left = screen.availWidth/2 - centerit/2;
}

function writeOptions()
{
	options = '<option selected value="1">Choose a Background!</option>';
	images = '';
	for(i=1;i<=NUMBGS;i++)
	{
		options += '<option value="'+i+'">'+i+'</option>';
		images += '<img src="bg'+i+'.jpg"class="image">';
	}
	document.getElementById('options').innerHTML = options;
	document.getElementById('images').innerHTML = images;

}
var bgdivSent = false;
function bgdivFunc()
{
	bgdivSent = !bgdivSent;
	bgdivSent ? document.getElementById('bgdiv').style.visibility = 'visible' : document.getElementById('bgdiv').style.visibility = 'hidden';
}

var addworddivSent = false;
function addworddivFunc()
{
	addworddivSent = !addworddivSent;
	addworddivSent ? document.getElementById('addworddiv').style.visibility = 'visible';
}

var i = document.getElementById('bgform').bgselect.value;
function nextbg()
{
	i++;
	if(i>17)
	{
		i=1;
	}
	changebg(i);
	writeheader();
}


// content.innerHTML = content.getAttribute('width');
// element = document.getElementById('content');
// style = window.getComputedStyle(element);
// top1 = style.getPropertyValue('top');
// content.innerHTML = top1;
</script>
</body>
</html>