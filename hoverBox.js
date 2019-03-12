var itemNum = 0;

//to be called by a onmouseover or onclick
function hoverBox(thing, string, fontsize, color)
{
	fontsize = typeof fontsize == "undefined" ? 10 : fontsize;
	bgcolor = typeof color == "undefined" ? "white" : invert(color);
	color = typeof color == "undefined" ? "black" : color;
	document.getElementsByTagName("body")[0].innerHTML += "<span id='hoverBox"+itemNum+"' style='position:absolute;z-index:10;visibility:hidden;background-color:"+bgcolor+";color:"+color+";font-weight:bold;'></span>";
	thing.addEventListener("mouseover",function(){hoverBoxON(itemNum);});
	thing.addEventListener("mouseout",function(){hoverBoxOFF(itemNum);});
	itemNum++;
}

function hoverBoxON(num)
{
	document.getElementById("hoverBox"+num).style.visibility = 'visible';
	document.getElementById("hoverBox"+num).style.top = event.clientY;
	document.getElementById("hoverBox"+num).style.left = event.clientX;
}

function hoverBoxOFF(num)
{
	document.getElementById("hoverBox"+num).style.visibility = 'hidden';
	document.getElementById("hoverBox"+num).style.top = "-10%";
	document.getElementById("hoverBox"+num).style.left = "-10%";
}