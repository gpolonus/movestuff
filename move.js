function move(thing, starttop, startleft, boxtop, boxleft, boxheight, boxwidth)
{	
	if(startleft>boxleft)
	{
		var x = boxleft;
	}
	else
	{
		var x = startleft;
	}

	if(starttop>boxtop)
	{
		var y = boxtop;
	}
	else
	{
		var y = starttop;
	}

	thing.style.top = x + "px";
	thing.style.left = y + "px";
	thing.style.position = "absolute";

	var dx=1;
	var dy=1;
	setInterval(function()
	{
		if(dx==1)
		{
			if(x==boxwidth)
			{
				dx=0;
			}
			else
			{
				x++;
				thing.style.left = x + "px";
			}
		}

		else
		{
			if(x==boxleft)
			{
				dx=1;
			}
			else
			{
				x--;
				thing.style.left = x + "px";
			}
		}


		if(dy==1)
		{
			if(y==boxheight)
			{
				dy=0;
			}
			else
			{
				y++;
				thing.style.top = y + "px";
			}
		}

		else
		{
			if(y==boxtop)
			{
				dy=1;
			}
			else
			{
				y--;
				thing.style.top = y + "px";
			}
		}
		// thing.style.backgroundColor = "rgb("+(Math.round(x*255/boxwidth))+","+(Math.round(Math.random()*255+1))+","+(Math.round(y*255/boxheight))+")";
		thing.style.backgroundColor = "rgb("+(Math.round(Math.random()*255+1))+","+(Math.round(Math.random()*255+1))+","+(Math.round(Math.random()*255+1))+")";
	},10);
}

	var x = new Array();
	var y = new Array();
	var dx = new Array();
	var dy = new Array();

function movethings(thing, starttop, startleft, boxtop, boxleft, boxheight, boxwidth)
{
	var x = new Array();
	var y = new Array();
	var dx = new Array();
	var dy = new Array();
	i=0;
	// while(i<thing.length)
	while(i<3)
		{
			thing[i].style.position = "absolute";
			thing[i].style.top = x[i] + "px";
			thing[i].style.left = y[i] + "px";

			dx[i]=1;
			dy[i]=1;
			if(dx[i]==1)
			{
				if(x[i]==boxwidth[i])
				{
					dx[i]=0;
				}
				else
				{
					x[i]++;
					thing[i].style.left = x + "px";
				}
			}

			else
			{
				if(x[i]==boxleft[i])
				{
					dx[i]=1;
				}
				else
				{
					x[i]--;
					thing[i].style.left = x[i] + "px";
				}
			}


			if(dy[i]==1)
			{
				if(y[i]==boxheight[i])
				{
					dy[i]=0;
				}
				else
				{
					y[i]++;
					thing[i].style.top = y[i] + "px";
				}
			}

			else
			{
				if(y==boxtop[i])
				{
					dy[i]=1;
				}
				else
				{
					y[i]--;
					thing[i].style.top = y[i] + "px";
				}
			}
			// thing.style.backgroundColor = "rgb("+(Math.round(x*255/boxwidth))+","+(Math.round(Math.random()*255+1))+","+(Math.round(y*255/boxheight))+")";
			thing[i].style.backgroundColor = "rgb("+(Math.round(Math.random()*255+1))+","+(Math.round(Math.random()*255+1))+","+(Math.round(Math.random()*255+1))+")";
		i++;
		}
setTimeout(movethings, 10);
}

function xarrowmove(thing, event)
{
	xx = thing.style.left.substring(0,thing.style.left.indexOf("p"));
	// i = 1;
	// while(i == 1)
	// {
		if(event.keyCode == 37)
			{
				xx--;
				thing.innerHTML+=xx+" ";
			}
			else if(event.keyCode == 39)
			{
				xx++;
				thing.innerHTML+=xx+" ";
			}
			// else
			// {
			// 	i=0;
			// }
		thing.style.left=xx + "px";
	// }
}

function yarrowmove(thing, event)
{
	yy = thing.style.top.substring(0,thing.style.top.indexOf("p"));
	// j = 1;
	// while(j == 1)
	// {
			if(event.keyCode == 38)
			{
				yy--;
				thing.innerHTML+=yy+" ";
			}
			else if(event.keyCode == 40)
			{
				yy++;
				thing.innerHTML+=yy+" ";
			}
			// else
			// {
			// 	j=0;
			// }
		thing.style.top=yy + "px";
	// }
}

function xarrowstop()
{
	clearInterval(hmove);
}

function yarrowstop()
{
	clearInterval(vmove);
}

function hmove(thing, event)
{
	setInterval(xarrowmove(thing,event), 10);
}

function vmove(thing, event)
{
	setInterval(yarrowmove(thing,event), 10);
}

function boxs(num)
{
	//MAKING THE STUFF
	z = new Array();
	p = new Array();
	q = new Array();
	s = new Array();
	d = new Array();

	document.write('<div id="asdf"></div>');
	asdf = document.getElementById('asdf');
	// asdf.innerHTML = '';

	j=0;
	while(j<num)
	{
		asdf.innerHTML += '<div class="box"></div>';
		j++;
	}

	box = document.getElementsByClassName("box");

	i=0;
	while(i<=num-1)
	{
		//MAKING SIZES
		style = "";
		box[i].style.position = 'absolute';
		box[i].style.top = Math.round(Math.random()*(document.body.clientHeight/2)-1)+1 + 'px';
		box[i].style.left = Math.round(Math.random()*(document.body.clientWidth/2-1))+1 + 'px';
		box[i].style.height = Math.round(Math.random()*(document.body.clientHeight - top[i]-1))+1 + 'px';
		box[i].style.width = box[i].getAttribute('height');
		box[i].style.zIndex = Math.round(-( box[i].getAttribute('width') * box[i].getAttribute('height')));
		
		box[i].style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')';

		//MOVEMENT FUNCTIONS
		p[i]=box[i].getAttribute('left');
		q[i]=box[i].getAttribute('top');
		d[i] = Math.round(Math.random());
		s[i] = Math.round(Math.random());


		i++;
	}

	this.box = new Array();
	this.p = new Array();
	this.q = new Array();
	this.s = new Array();
	this.d = new Array();

	this.box = box;
	this.p = p;
	this.q = q;
	this.s = s;
	this.d = d;
	this.num = num;

	this.boxmove = boaxmove;
}

	function boaxmove()
	{
		i=0;
		while(i<=this.num-1)
		{
			width = box[i].getAttribute('width');
			height = box[i].getAttribute('height');
			this.box[i].style.left = p[i] + "px";
			this.box[i].style.top = q[i] + "px";
			// stuff.innerHTML = box[i].style.left + " " + box[i].style.width + " " + box[i].style.height + " " + box[i].style.top;
			
			//horizontal movement
			if(this.d[i] == 0)
			{
				if(this.p[i] + width == document.body.clientWidth)
				{
					this.d[i]=1;
				}
				else if(this.p[i]>=0)
				{
					this.p[i]++;
				}
			}
			else if(this.d[i] == 1)
			{
				if(this.p[i] == 0)
				{
					this.d[i]=0;
				}
				else if(this.p[i] + width<=document.body.clientWidth)
				{
					this.p[i]--;
				}
			}
			//vertical movement
			if(this.s[i] == 0)
			{
				if(this.q[i] + height == document.body.clientHeight)
				{
					this.s[i]=1;
				}
				else if(q[i]>=0)
				{
					this.q[i]++;
				}
			}
			else if(this.s[i] == 1)
			{
				if(this.q[i] == 0)
				{
					this.s[i]=0;
				}
				else if(this.q[i] + height<=document.body.clientHeight)
				{
					this.q[i]--;
				}
			}

			//end of loop
			i++;
		}
		setTimeout(boaxmove,10);
	// end of function boxmove()
	}