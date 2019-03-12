// fix for keydown and canvas
/////////////////////////////////////////////////////////
// var lastDownTarget, canvas;
// window.onload = function() {
//     canvas = document.getElementById('canvas');

//     document.addEventListener('mousedown', function(event) {
//         lastDownTarget = event.target;
//         alert('mousedown');
//     }, false);

//     document.addEventListener('keydown', function(event) {
//         if(lastDownTarget == canvas) {
//             alert('keydown');
//         }
//     }, false);
// }
////////////////////////////////////////////////////////////

var Index = function(start) {

	this.ctxs = [];
	this.starContext;
	// this.color = 0;
	var that = this;
	var utiLib = new UtilityLibrary();
	var scripts = {
			"bezierBlob" : BezierBlob,
			"bezierBlob2" : BezierBlob2,
			"drawAngled" : DrawAngled,
			"hills2" : Hills2,
			"maze" : MazeThing,
			"mirrormouse3" : Mirrormouse3,
			"morphingSquaresPlane" : MorphingSquaresPlane,
			"nextLine" : NextLine,
			"blackHole" : BlackHole,
			"rainDrops" : RainDrops,
			"randomPaths" : RandomPaths,
			"spinningThing" : SpinningThing,
			"stars" : Stars,
			"testScene" : TestScene,
			"thing" : Thing,
			"zombieGame" : ZombieGame
		};

	this.handler = function(e){

		var e = e == undefined ? event : e;
		var obj = e.path[0];
		var num = obj.attributes.num.value;
		// this.color += 100;
		// canLib.drawDiscatCenter(e.layerX, e.layerY, utiLib.distance(0, 0, e.layerX/3, e.layerY/3), utiLib.randomColor(), this.ctxs[event.path[0].attributes.num.value]);
		this.ctxs[num].script.handler(e);
	}

	// this.starHandler = function(e){
	// 	var e = e == undefined ? event : e;
	// 	$(".fixed").css("width", $("body").css("width"));
	// 	$(".fixed").css("height", $("body").css("height"));
	// 	this.starContext.canvas.width = $("body").css("width");
	// 	this.starContext.canvas.height = $("body").css("height");
	// 	this.starContext.script.handler(e);
	// }

	function init()
	{
		var scriptsArray = [
			"bezierBlob",
			"bezierBlob2",
			"drawAngled",
			"hills2",
			"maze",
			"mirrormouse3",
			"morphingSquaresPlane",
			// "nextLine",
			// "blackHole",
			// "rainDrops",
			"randomPaths",
			// "spinningThing",
			// "stars",
			// "testScene",
			// "thing",
			// "zombieGame"
		];

		for(var i = 0; i < scriptsArray.length; i++){
			var c = document.createElement("canvas");
			$(c).attr("num", i);
			$(c).css("width", "300px");
			$(c).css("height", "300px");
			that.ctxs.push(c.getContext("2d"));
			// var value = scriptsArray.splice(Math.round(Math.random()*(scriptsArray.length-1)), 1)[0];
			that.ctxs[i].script = new scripts[scriptsArray[i]](that.ctxs[i]);
			that.ctxs[i].canvas.width = 300;
			that.ctxs[i].canvas.height = 300;
			c.addEventListener("mousemove", function(){that.handler(event); } , false);
			c.addEventListener("mouseout", function(){that.handler(event); } , false);
			c.addEventListener("mousedown", function(){that.handler(event); } , false);
			c.addEventListener("mouseup", function(){that.handler(event); } , false);
			// c.addEventListener("keydown", function(){that.handler(event); } , false);
			// c.addEventListener("keyup", function(){that.handler(event); } , false);
			start.appendChild(c);
		}
		// $.each($("canvas"), function(key, value){
		// 	$(value).attr("num", key);
		// 	that.ctxs.push(value.getContext("2d"));
		// });

		// star canvas behind things
		// that.starContext = $(".fixed").get(0).getContext("2d");
		// that.starContext.script = new Stars(that.starContext);
		// $(".fixed").css("width", $("body").css("width"));
		// $(".fixed").css("height", $("body").css("height"));
		// that.starContext.canvas.width = $("body").css("width");
		// that.starContext.canvas.height = $("body").css("height");
		// $("body").on("mousemove", function(){that.starHandler(event);})
		$("canvas").css("margin", "7px");
	}
	init();

};

/*//////////////////////////////////////////
PAGE OBJECTS
//////////////////////////////////////////*/

function BezierBlob(context){
	var canLib = new CanvasLibrary(context);
	var ctx = context;
	ctx.strokeStyle = "black";
	ctx.lineWidth = 3;
	var stopped = true;
	var points = [];
	var num = 6;
	var first = true;
	var prev = {x: 0, y:0 };

	function start()
	{
		if(points.length == 0)
		{
			for(var i = 0; i < num; i++)
				points.push({
					x: 75*Math.cos(i*2*Math.PI/num) + 150 ,
					y: 75*Math.sin(i*2*Math.PI/num) + 150 ,
					x0: -1*37*Math.cos(i*2*Math.PI/num + Math.PI/2) + 75*Math.cos(i*2*Math.PI/num) + 150 ,
					y0: -1*37*Math.sin(i*2*Math.PI/num + Math.PI/2) + 75*Math.sin(i*2*Math.PI/num) + 150 
				});
		}
		stopped = false;
		draw();
	}

	function stop()
	{
		stopped = true;
		first = false;
	}

	function draw()
	{
		canLib.whiteCanvas();
		ctx.strokeStyle = "gray";
		for(p in points)
		{
			points[p].x  += Math.round(Math.random()*2)-1;
			points[p].y  += Math.round(Math.random()*2)-1;
			points[p].x0 += Math.round(Math.random()*2)-1;
			points[p].y0 += Math.round(Math.random()*2)-1;
			if(1==2){	
				canLib.drawDiscatCenter(points[p].x, points[p].y, 5, "red");
				canLib.drawDiscatCenter(points[p].x0, points[p].y0, 5, "blue");
				canLib.drawDiscatCenter(points[p].x*2-points[p].x0, points[p].y*2-points[p].y0, 5 , "green");
				ctx.beginPath();
				ctx.moveTo(points[p].x0, points[p].y0);
				ctx.lineTo(points[p].x*2-points[p].x0, points[p].y*2-points[p].y0);
				ctx.closePath();
				ctx.stroke();
			}
		}

		ctx.strokeStyle = "black";
		ctx.beginPath();
		for(var p = 0; p < points.length; p++)
		{
			ctx.moveTo(points[p].x, points[p].y);
			ctx.bezierCurveTo(points[p].x*2 - points[p].x0, points[p].y*2 - points[p].y0, points[(p+1)%num].x0, points[(p+1)%num].y0, points[(p+1)%num].x, points[(p+1)%num].y);
		}
		ctx.stroke();

		if(!stopped)
		{
			setTimeout(draw, 1);
		}
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type) {
			case "mousemove":
				if(first){
					start();
					first = false;
				} else if(stopped){
					stopped = false;
					draw();
				} else{
					for(var i = 0 ; i < num; i++) {
						if(i%2 == 0)
						{
							points[i].x0 += e.layerX - prev.x;
							points[i].y0 += e.layerY - prev.y;
						}
					}
				}
				prev.x = e.layerX;
				prev.y = e.layerY;
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":
				stop();
				points = [];
				first = false;
				num++;
				start();
			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function BezierBlob2(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var pon = [];
	var num = 6;
	var radius = 75;
	var controlRadius = 50;
	var controlRadius2= controlRadius;
	var direction = true;
	var mouse = {x:0, y:0};

	function start(){
		pon = [];
		for(var i = 0; i < num; i++)
		{
			pon.push({x: radius*Math.cos(i*2*Math.PI/num) + 150 , y: -1*radius*Math.sin(i*2*Math.PI/num) + 150});
			pon[i].x0 = pon[i].x - controlRadius*Math.sin(i*Math.PI*2/num);
			pon[i].y0 = pon[i].y - controlRadius*Math.cos(i*Math.PI*2/num);
		}

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){
		var dist = utiLib.distance(150, 150, pon[0].x, pon[0].y);
			if(dist > 100)
				direction = !direction;
		for(var i = 0; i < num; i++){
			//pon[i].x0 = 400/2 + 200*Math.cos(Math.PI/num*i*2 + (500-dist)/250*Math.PI);
			//pon[i].y0 = pageHeight/2+ 400*Math.sin(Math.PI/num*i*2 + (500-dist)/250*Math.PI);
			if(i%2 == 0){
				if(direction){
					 pon[i].x += Math.cos(i*2*Math.PI/num);
					 pon[i].y -= Math.sin(i*2*Math.PI/num);
				} else {
					 pon[i].x -= Math.cos(i*2*Math.PI/num);
					 pon[i].y += Math.sin(i*2*Math.PI/num);
				}
			} else {
				if(!direction) {
					 pon[i].x += Math.cos(i*2*Math.PI/num);
					 pon[i].y -= Math.sin(i*2*Math.PI/num);
				} else {
					 pon[i].x -= Math.cos(i*2*Math.PI/num);
					 pon[i].y += Math.sin(i*2*Math.PI/num);
				}
			}
		}
		canLib.blackCanvas();
		// var grad = ctx.createRadialGradient(150, pageHeight/2,0, pageWidth/2, pageHeight/2, Math.sqrt(Math.pow(pon[0].x,2)+Math.pow(pon[0].y,2)));
		// var grad = ctx.createRadialGradient(pageWidth/2, pageHeight/2,0, pageWidth/2, pageHeight/2, 200);
		// grad.addColorStop(0,"white");
		// grad.addColorStop(1,"black");
		var grad = "white";
		ctx.fillStyle = grad;
		ctx.strokeStyle = grad;
		for(var i = 0; i < num; i++) {
			ctx.beginPath();
			ctx.moveTo(pon[i].x, pon[i].y);
			ctx.bezierCurveTo(pon[i].x0, pon[i].y0, pon[(i+1)%num].x*2 - pon[(i+1)%num].x0, pon[(i+1)%num].y*2 -  pon[(i+1)%num].y0, pon[(i+1)%num].x, pon[(i+1)%num].y );
			ctx.stroke();
			// ctx.fill();
			if(1==2) {
				canLib.drawDiscatCenter(pon[i].x, pon[i].y, 10, "red");
				canLib.drawDiscatCenter(pon[i].x0, pon[i].y0, 10, "blue");
				canLib.drawDiscatCenter(pon[i].x*2 - pon[i].x0, pon[i].y*2 - pon[i].y0, 10, "green");
			}
		}

		if(!stopped)
			setTimeout(draw, 10);
	}
	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
				} else if(stopped){
					stopped = false;
					draw();
				} else {
					for(var i = 0; i < num; i++) {
			 			pon[i].x0 = e.layerX + 200*Math.cos(i*Math.PI/num*2) - controlRadius*Math.sin(i*Math.PI*2/num); ;
			    		pon[i].y0 = e.layerY - 200*Math.sin(i*Math.PI/num*2) - controlRadius*Math.cos(i*Math.PI*2/num); ;
			 		}
			 	}
				mouse = {x: e.layerX, y: e.layerY};
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":
				stop();
				num += 2;
				start();
			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function DrawAngled(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var num = 0;
	var funcs = [
		canLib.shark,
		// canLib.bob,
		canLib.drawCat,
		canLib.drawShape
	];

	function start(){
		canLib.blackCanvas();
		first = false;
		stopped = false;
		// draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(x, y){

		funcs[num%funcs.length](
			x, y, 100,
			utiLib.rgb(Math.round(x / 400 * 255), Math.round((y) / 400 * 255), 85),  
			27*(x*y)/(400*400)*Math.PI
		);
		// if(!stopped)
		// 	setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
				}
				draw(e.layerX, e.layerY);
			break;
			case "mouseout":
			break;
			case "mousedown":
				num++;
			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function Hills2(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var disc = new Image();
	disc.src = "disc.png";

	function start(){
		first = false;
		stopped = false;
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(x, y){
		// canLib.blackCanvas();
		var distance = 50;
		for(var i = 0; i < 400 / distance * 2; i++)
		{
			for(var j = 0; j < 400 / distance * 2; j++)
			{
				drawDisc(i * distance - 400/2 + (400/2 - x) * (j%2), j * distance - 400/2 + (400/2 - y) * (i%2));
			}
		}
		// if(!stopped)
		// 	setTimeout(draw, 1);
	}

	function drawDisc(x, y)
	{
		ctx.drawImage(disc, x-25,y-25, 50,50);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				draw(e.layerX, e.layerY);
			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function MazeThing(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var solving = new utiLib.BooleanLock();
	var startedSolving = false;
	var maze;
	var finishBox;
	var prevBox;
	var num = 30;

	function start(){
		maze = new Maze(num,num, Math.floor(300 / num));
		maze.connectBoxes4(0.15);
		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		num = (num - 25)%50 + 30;
		stopped = true;
		first = true;
		solving.unlock();
		startedSolving = false;
	}

	function draw(){

		maze.drawFull();
		// if(!stopped)
		// 	setTimeout(draw, 1);
	}

	function getCurrentBox(mouseX, mouseY)
	{
		return new utiLib.Point(Math.floor(mouseX/maze.size), Math.floor(mouseY/maze.size));
	}

	function writeGood(){
		solving.lockFalse();
		canLib.drawRectangle(0, 0, 300, 300, "#0f0");
		ctx.font = "bold 50px Courir New";
		ctx.strokeStyle = "white";
		ctx.strokeText("WINNER", 50, 150);
	}

	function writeBad(){
		solving.lockFalse();
		canLib.drawRectangle(0, 0, 300, 300, "#f00");
		ctx.font = "bold 50px Courir New";
		ctx.strokeStyle = "white";
		ctx.strokeText("LOSER", 50, 150);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
				} else if(solving.value() && startedSolving){
					var m = getCurrentBox(e.layerX, e.layerY);
					if(m.x == finishBox.x && m.y == finishBox.y){
						writeGood();
					} else if(m.x != prevBox.x || m.y != prevBox.y){
						if(m.x > prevBox.x && prevBox.righSide == 0){
							writeBad();
							return;
						}
						if(m.x < prevBox.x && prevBox.leftSide == 0){
							writeBad();
							return;
						}
						if(m.y > prevBox.y && prevBox.bottSide == 0){
							writeBad();
							return;
						}
						if(m.y < prevBox.y && prevBox.toppSide == 0){
							writeBad();
							return;
						}
						prevBox = maze.squares[m.x][m.y];
					}
				} else {
					// maybe a maze crawler following you here
				}
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":
				if(solving.true() && !startedSolving) {
					var m = getCurrentBox(e.layerX, e.layerY);
					prevBox = maze.squares[m.x][m.y]; 
					finishBox = maze.findLongestPath(m.x, m.y).box;
					startedSolving = true;
				}
			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}
	}

	function Maze(l,h,size)
	{
		this.squares = [];
		this.l = l;
		this.h = h;
		this.size = size;
		for(var i = 0; i < l; i++)
		{
			this.squares[i] = [];
			for(var j = 0; j < h; j++)
			{
				this.squares[i][j] = new Box(i,j);
			}
		}

		this.connectBoxes4 = function(adjust)
		{
			adjust = adjust == undefined ? 0 : adjust;
			entries = [];
			entries.push({x:Math.floor(this.l/2),y:0});

			while(entries.length != 0)
			{
				p = entries.splice(0,1)[0];
				i = p.x;
				j = p.y;
				if(Math.round(Math.random()+adjust) >= 1 && j != this.h-1 && !this.squares[i][j+1].marked)
				{
					this.squares[i][j].bottSide = 1;
					this.squares[i][j+1].toppSide = -1;
					this.squares[i][j+1].marked = true;
					entries.push({x:i,y:j+1});
				}
				if(Math.round(Math.random()+adjust) >= 1 && i != this.l-1 && !this.squares[i+1][j].marked)
				{
					this.squares[i][j].righSide = 1;
					this.squares[i+1][j].leftSide = -1;
					this.squares[i+1][j].marked = true;
					entries.push({x:i+1,y:j});
				}
				if(Math.round(Math.random()+adjust) >= 1 && j != 0 && !this.squares[i][j-1].marked)
				{
					this.squares[i][j].toppSide = 1;
					this.squares[i][j-1].bottSide = -1;
					this.squares[i][j-1].marked = true;
					entries.push({x:i,y:j-1});
				}
				if(Math.round(Math.random()+adjust) >= 1 && i != 0 && !this.squares[i-1][j].marked)
				{
					this.squares[i][j].leftSide = 1;
					this.squares[i-1][j].righSide = -1;
					this.squares[i-1][j].marked = true;
					entries.push({x:i-1,y:j});
				}
			}
		}

		this.drawFull = function()
		{
			canLib.whiteCanvas();
			for(var i = 0; i < l; i++)
			{
				for(var j = 0; j < h; j++)
				{
					if(this.squares[i][j].marked)
					{
						canLib.drawRectangle(i*this.size,j*this.size,this.size,this.size,"red");
					}
				}
			}

			for(var i = 0; i < l; i++)
			{
				for(var j = 0; j < h; j++)
				{
					this.squares[i][j].drawFull(this.size);
				}
			}		
		}

		this.findLongestPath = function(i,j)
		{
			if(i == undefined || j == undefined)
			{
				i = Math.round(Math.random()*(this.l-1));
				j = Math.round(Math.random()*(this.h-1));
			}

			var entries = [];
			var maxBox = {box:this.squares[i][j],length:0,dir:""};
			entries.push(maxBox);
			while(entries.length != 0)
			{
				p = entries.splice(0,1)[0];
				var length = p.length;
				var balls = 0;
				if(p.box.leftSide != 0)
				{
					balls++;
				}
				if(p.box.toppSide != 0)
				{
					balls++;
				}
				if(p.box.righSide != 0)
				{
					balls++;
				}
				if(p.box.bottSide != 0)
				{
					balls++;
				}

				if(balls == 1 && !(p.box.x == i && p.box.y == j))
				{
					if(maxBox.length < length+1)
						maxBox = {box:p.box, length:length+1};
				}
				else
				{
					if(p.box.leftSide != 0 && p.dir != "righ")
					{
						entries.push({box:this.squares[p.box.x-1][p.box.y],length:length+1,dir:"left"});
					}
					if(p.box.toppSide != 0 && p.dir != "bott")
					{
						entries.push({box:this.squares[p.box.x][p.box.y-1],length:length+1,dir:"topp"});
					}
					if(p.box.righSide != 0 && p.dir != "left")
					{
						entries.push({box:this.squares[p.box.x+1][p.box.y],length:length+1,dir:"righ"});
					}
					if(p.box.bottSide != 0 && p.dir != "topp")
					{
						entries.push({box:this.squares[p.box.x][p.box.y+1],length:length+1,dir:"bott"});
					}
				}
			}

			this.squares[i][j].drawFull(this.size,"blue");
			maxBox.box.drawFull(this.size,"green");
			return maxBox;
		}

		function Box(x,y) {
			this.x = x;
			this.y = y;
			this.leftSide = 0;
			this.bottSide = 0;
			this.toppSide = 0;
			this.righSide = 0;
			this.marked = false;

			this.drawFull = function(size,color) {
				ctx.lineWidth = 2;
				ctx.strokeStyle = "black";
				if(color != undefined){
					canLib.drawRectangle(this.x*size,this.y*size,size,size,color);
				}
				if(this.righSide == 0){
					ctx.beginPath();
					ctx.moveTo((this.x+1)*size,(this.y)*size);
					ctx.lineTo((this.x+1)*size,(this.y+1)*size);
					ctx.closePath();
					ctx.stroke();
				}
				if(this.bottSide == 0){
					ctx.beginPath();
					ctx.moveTo((this.x)*size,(this.y+1)*size);
					ctx.lineTo((this.x+1)*size,(this.y+1)*size);
					ctx.closePath();
					ctx.stroke()
				}
				if(this.toppSide == 0){
					ctx.beginPath();
					ctx.moveTo((this.x)*size,(this.y)*size);
					ctx.lineTo((this.x+1)*size,(this.y)*size);
					ctx.closePath();
					ctx.stroke()
				}
				if(this.leftSide == 0){
					ctx.beginPath();
					ctx.moveTo((this.x)*size,(this.y)*size);
					ctx.lineTo((this.x)*size,(this.y+1)*size);
					ctx.closePath();
					ctx.stroke()
				}
			}
		}
	}
}

function Mirrormouse3(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var going = false;
	var prevPoints = [];
	var axisVectors = [];
	var axes = 2;
	var mouseVector = new Vector(150, 150, 0, 0);
	var mouse = new utiLib.Point();

	function start(){

		canLib.blackCanvas();
		axisVectors = [];
		for(var i = 0; i < axes; i++)
		{
			axisVectors.push( new Vector(150, 150, 150 + Math.cos(Math.PI/axes * i + Math.PI/2)*100, 150 + Math.sin(Math.PI/axes * i + Math.PI/2)*100));
		}
		first = false;
		stopped = false;
		// draw();
	}

	function stop(){
		axes = (Math.floor(axes*3/2) - 2)%100 + 2;
		stopped = true;
		first = true;
		going = false;
	}

	function draw(){
		if(going)
		{
			var points = [];
			points.push({x: mouse.x, y: mouse.y});
			var current;
			var prev = mouseVector.returnCopy();
			for(var i = 0; i < axes*2 ; i++)
			{
				current = axisVectors[i%axes].returnCopy();
				current.rotate(-1 * prev.angleBetween(axisVectors[i%axes]));
				current.scale(mouseVector.distance());
				points.push({
					x: current.final.x,
					y: current.final.y
				});
				prev = current;
			}
	 		
	 		if(prevPoints.length != 0)
				for(var i in points)
					canLib.drawLine(points[i], prevPoints[i], "white");
			// for(var i in axisVectors)
			// 	axisVectors[i].draw();

			prevPoints = points;
		}

		// if(!stopped)
		// 	setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
					first = false;
				} else{
					mouseVector.final = {x: e.layerX, y: e.layerY};
					draw();
				}
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":
				prevPoints = [];
				going = true;
			break;
			case "mouseup":
				prevPoints = [];
				going = false;
			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}
	}
}

function MorphingSquaresPlane(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var squares = [[]];
	var squareW = 15;
	
	function start(){
		for(var i = 0; i < 21; i++) {
			squares[i] = [];
			for(var j = 0; j < 21; j++) {
				// squares[i].push({x:Math.random()*squareW+squareW*i,y:Math.random()*squareW+squareW*j});
				squares[i].push({x:squareW*i,y:squareW*j,h:0});
			}
		}
		first = false;
		stopped = false;
		draw();
	}

	function stop() {
		stopped = true;
		first = false;
	}

	function draw() {
		// canLib.blackCanvas();
		for(var i = 0; i < 20; i++) {
			for(var j = 0; j < squares[i].length; j++) {
				var corner = true;
				if(i == 20) {
					corner = false;
				}
				if(j == squares[i].length-1) {
					corner = false;
				}
				if(corner) {
					ctx.globalAlpha = 0.6;
					ctx.fillStyle = utiLib.rgb(255-Math.round(255/squares.length*i), Math.round(255/squares.length*i), Math.round(255/squares.length*j));
					ctx.beginPath();
					ctx.moveTo(squares[i][j].x,squares[i][j].y);
					ctx.lineTo(squares[i+1][j].x,squares[i+1][j].y);
					ctx.lineTo(squares[i+1][j+1].x,squares[i+1][j+1].y);
					ctx.lineTo(squares[i][j+1].x,squares[i][j+1].y);
					ctx.lineTo(squares[i][j].x,squares[i][j].y);
					ctx.closePath();
					ctx.fill();
					ctx.globalAlpha = 1;
				}
				if(!stopped)
					randomize(squares[i][j]);
			}
		}
		if(!stopped)
			setTimeout(draw, 1);
	}

	function randomize(point) {
		point.x += 3*(Math.round(Math.random())*2-1);
		point.y += 3*(Math.round(Math.random())*2-1);
	}

	function reset()
	{
		// canLib.blackCanvas();
		var uns = 0;
		for(var i = 0; i < 21; i++) {
			for(var j = 0; j < squares[i].length; j++) {
				if(i*squareW != squares[i][j].x || j*squareW != squares[i][j].y) {
					var dist = Math.sqrt(Math.pow(squares[i][j].x - i*squareW,2)+Math.pow(squares[i][j].y - j*squareW,2));
					if(dist <= 1) {
						squares[i][j] = {x:squareW*i,y:squareW*j};
					} else {
						squares[i][j].x = (i*squareW - squares[i][j].x)/dist+squares[i][j].x;
						squares[i][j].y = (j*squareW - squares[i][j].y)/dist+squares[i][j].y;
					}
				}
				else
					uns++;
			}
		}
		draw();
		if(uns == squares.length*squares[0].length)
			stopped = true;
		else if(stopped)
			setTimeout(reset,10);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first)
					start();
				else if(stopped){
					stopped = false;
					draw();
				}
			break;
			case "mouseout":
				stop();
				reset();
			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function NextLine(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function BlackHole(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	ctx.lineWidth = 1;
	var stopped = false;
	var first = true;
	var points = [];
	var num = 2;
	var angle = 0;

	function start(){
		canLib.whiteCanvas();
		points = [];
		for(var i = 0; i < num; i++)
			points.push(new utiLib.Point(150 + 50*Math.cos(Math.PI/num*2 * i), 150 + 50*Math.sin(Math.PI/num*2 * i)));
		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		num = Math.round(num*3/2);
		stopped = true;
		first = true;
	}

	function draw(){
		for(var i = 0 ; i < points.length; i++)
			canLib.drawLine(
				new utiLib.Point( points[i].x + Math.cos(angle) * 200, points[i].y + Math.sin(angle) * 200 ),
				new utiLib.Point( points[i].x - Math.cos(angle) * 200, points[i].y - Math.sin(angle) * 200 ),
				"black");
		angle += 0.03;
		if(!stopped)
			setTimeout(draw, 10);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
				}
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function RainDrops(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type) {
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function RandomPaths(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var color = utiLib.randomColor();
	var mouse1 = new Mouse();
	var mouse2 = new Mouse();
	var prev = new utiLib.Point();


	function start(){
		canLib.blackCanvas();
		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){
		if(mouse2.x > 0 && mouse1.x < 300)
		{
			mouse1.moveNext();
			mouse1.drawMouse();
			mouse2.backwards();
			mouse2.drawMouse();
		}
		else
		{
			mouse1 = new Mouse();
			mouse2 = new Mouse();
			mouse2.x = 300;
			mouse1.y = Math.floor(Math.random()*300);
			mouse1.y = mouse1.y-mouse1.y%5;
			mouse2.y = Math.floor(Math.random()*300);
			mouse1.y = mouse2.y-mouse2.y%5;
			color = utiLib.randomColor();
		}

		if(!stopped)
			setTimeout(draw, 1);
	}


	function Mouse() {
		this.x = 0;
		this.y = 150;

		this.drawMouse = function() {
			canLib.drawDiscatCenter(this.x,this.y,1.5,color);
		}

		this.moveNext = function() {
			switch(Math.floor(Math.random()*5))
			{
				case 0:
					this.y+=5;
				break;
				case 1:
					this.y+=5;
					this.x+=5;
				break;
				case 2:
					this.x+=5;
				break;
				case 3:
					this.x+=5;
					this.y-=5;
				break;
				case 4:
					this.y-=5;
				break;
			}	
		}

		this.backwards = function() {
			switch(Math.floor(Math.random()*5))
			{
				case 0:
					this.y+=5;
				break;
				case 1:
					this.y+=5;
					this.x-=5;
				break;
				case 2:
					this.x-=5;
				break;
				case 3:
					this.x-=5;
					this.y-=5;
				break;
				case 4:
					this.y-=5;
				break;
			}	
		}		

		this.inc = function(x,y) {
			this.x += x;
			this.y += y;
		}
	}

	this.handler = function(e) {
		e = e == undefined ? event : e;

		switch(e.type) {
			case "mousemove":
				if(first) {
					start();
				} else if(stopped) {
					stopped = false;
					draw();
				}else {
					mouse1.inc(e.layerX - prev.x, e.layerY - prev.y);
					mouse2.inc(e.layerX - prev.x, e.layerY - prev.y);
				}
				prev.x = e.layerX;
				prev.y = e.layerY;
			break;
			case "mouseout":
				stop();
			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function SpinningThing(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function Stars(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;
	var stars = [];

	function Star(x,y,z) {
		this.radius = 100;
		this.scale = 5000;
		this.x = x == undefined ? Math.floor(Math.random()*parseInt($("body").css("width"))*2) : x;
		this.y = y == undefined ? Math.floor(Math.random()*parseInt($("body").css("height"))*2) : y;
		// this.z = z == undefined ? 0 : z;
		this.z = z == undefined ? Math.floor(Math.random()*this.scale) : z;
		this.val = Math.floor(Math.random()*150);
		this.draw = function() {

			x = this.x/2 + Math.cos(Math.PI/2-Math.PI/2*(Math.abs(this.x-parseInt($("body").css("width")))/parseInt($("body").css("width"))))*this.z*(this.x < parseInt($("body").css("width")) ? -1 : 1);
			y = this.y/2 + Math.cos(Math.PI/2-Math.PI/2*(Math.abs(this.y-parseInt($("body").css("height")))/parseInt($("body").css("height"))))*this.z*(this.y < parseInt($("body").css("height")) ? -1 : 1);

			// get("x").innerHTML = this.x+' : '+x;
			// get("y").innerHTML = this.y+' : '+y;
			// get("z").innerHTML = this.z;
			if(this.val != 1)
				// tLetter(x,y,this.radius*this.z/this.scale,"white","stroke",ctx);
				canLib.drawDiscatCenter(x, y, this.radius*this.z/this.scale, "white");
			else
				canLib.bob(x,y,100*this.z/this.scale,"blue");
			this.moveNext(x,y);
		}

		this.moveNext = function(x,y) {
			this.z+=this.z/20;
			if(this.z >= this.scale || x > parseInt($("body").css("width")) || x < 0 || y < 0 || y > parseInt($("body").css("height"))) {
				// this.z = Math.floor(Math.random()*this.scale);
				this.z = 10;
				this.x = Math.floor(Math.random()*parseInt($("body").css("width"))*2);
				this.y = Math.floor(Math.random()*parseInt($("body").css("height"))*2);
			}

		}
	}

	function start(){
		for(i = 0; i < 200; i++)
			stars[i] = new Star();
		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){
		canLib.blackCanvas();
		for(balls in stars)
			stars[balls].draw();

		// if(!stopped)
		// 	setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":
				if(first){
					start();
				} else {
					draw();
				}
			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function TestScene(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function Thing(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}

function ZombieGame(context){
	var canLib = new CanvasLibrary(context);
	var utiLib = new UtilityLibrary();
	var ctx = context;
	var stopped = false;
	var first = true;

	function start(){

		first = false;
		stopped = false;
		draw();
	}

	function stop(){
		stopped = true;
		first = false;
	}

	function draw(){


		if(!stopped)
			setTimeout(draw, 1);
	}

	this.handler = function(e)
	{
		e = e == undefined ? event : e;

		switch(e.type)
		{
			case "mousemove":

			break;
			case "mouseout":

			break;
			case "mousedown":

			break;
			case "mouseup":

			break;
			case "keydown":

			break;
			case "keyup":

			break;
		}

	}
}