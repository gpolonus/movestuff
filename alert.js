// #cover
// {
	// position: absolute;
	// z-index: -1;
	// opacity: 0.5;
	// background-color: gray;
	// top:0px;
	// left:0px;
	// width:auto;
	// height: auto;
// }

// #alert
// {
	// color: white;
	// position: absolute;
	// z-index: -2;
	// background-color: black;
	// font-size:30px;
// }

document.getElementsByTagName("body")[0].innerHTML += '<div id="cover" onclick="UNBAD()" style="visibility:hidden;position: absolute;z-index: -1;opacity: 0.5;background-color: gray;top:0px;width:100%;left:0px;height:100%;"></div><div id="alert" onclick="UNBAD()" style="color: white;position: absolute;top:0px;left;0px;z-index: -2;background-color: black;font-size:30px;"></div>';

function bad(string)
{
	document.getElementById("cover").style.height = "100%";
	document.getElementById("cover").style.width = "100%";
	document.getElementById("cover").style.zIndex = 99;
	document.getElementById("cover").style.visibility = "visible";
	document.getElementById("alert").style.zIndex = 100;
	document.getElementById("alert").style.visibility = "visible";
	document.getElementById("alert").innerHTML = string;
}

function UNBAD()
{
	document.getElementById("cover").style.zIndex = -1;
	document.getElementById("alert").style.zIndex = -2;
	document.getElementById("cover").style.visibility = "hidden";
	document.getElementById("alert").style.visibility = "hidden";
	document.getElementById("alert").innerHTML = "";
}