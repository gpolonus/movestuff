// function testFunction(func)
// {
// 	var d = new Date();
// 	var n = d.getTime();
// 	func();
// 	return d.getTime() - n;
// }

function rgb(r,g,b)
{
	color = '#'+convertToHex(r);
	color += convertToHex(g);
	color += convertToHex(b);

	return color;
}

function invert(color)
{
	red = hexToDecimal(color.charAt(1) + color.charAt(2));
	green = hexToDecimal(color.charAt(3) + color.charAt(4));
	blue = hexToDecimal(color.charAt(5) + color.charAt(6));
	return rgb(256-red,256-green,256-blue);
}

function hexToDecimal(hexNum)
{
	var num = 0;
	var hexNum1 = hexNum;
	if(typeof hexNum == "number")
		hexNum1 = ""+hexNum;
	for(irl = 0; irl<hexNum1.length;irl++)
	{
		switch(hexNum1.charAt(irl))
		{
			case 'a': case 'A':
				num += 10*Math.pow(16,hexNum1.length - irl-1);
				break;
			case 'b': case 'B':
				num += 11*Math.pow(16,hexNum1.length - irl-1);
				break;
			case 'c': case 'C':
				num += 12*Math.pow(16,hexNum1.length - irl-1);
				break;
			case 'd': case 'D':
				num += 13*Math.pow(16,hexNum1.length - irl-1);
				break;
			case 'e': case 'E':
				num += 14*Math.pow(16,hexNum1.length - irl-1);
				break;
			case 'f': case 'F':
				num += 15*Math.pow(16,hexNum1.length - irl-1);
				break;
			default:
				num += hexNum1.charAt(irl)*Math.pow(16,hexNum1.length - irl-1);
				break;
		}

	}

	// return ""+num;
	return num;
}

function randomColor()
{
	return rgb(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255));
}

function bestConvertToHex(num, base)
{
	var result = "";
	var times = Math.ceil(Math.log(num) / Math.log(base));
	if(times < Math.log(num) / Math.log(base))
		times++;
	for(var i = times-1; i >= 0; i--)
	{
		var next = Math.floor(num/Math.pow(base, i));
		num -= Math.pow(base, i) * next;
		if(next > 10)
			next = String.fromCharCode(next + 55);
		result += next;
	}
	return result;
}

function convertToHex(num)
{
	num = Math.floor(num%256);
	hex = '';
	tens = Math.floor(num/16);
	switch(tens)
	{
		case 10:
			hex = 'a';
			break;
		case 11:
			hex = 'b';
			break;
		case 12:
			hex = 'c';
			break;
		case 13:
			hex = 'd';
			break;
		case 14:
			hex = 'e';
			break;
		case 15:
			hex = 'f';
			break;
		default:
			hex = tens;
			break;
	}

	switch(num%16)
	{
		case 10:
			hex += 'a';
			break;
		case 11:
			hex += 'b';
			break;
		case 12:
			hex += 'c';
			break;
		case 13:
			hex += 'd';
			break;
		case 14:
			hex += 'e';
			break;
		case 15:
			hex += 'f';
			break;
		default:
			hex += ''+num%16;
			break;
	}
	return hex;
}

function percentWhite(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	return rgb(Math.round(percent*255),Math.round(percent*255),Math.round(percent*255));
}

function percentGreenToWhite(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	if(percent > 0.5)
		return rgb(Math.round(percent/0.5*255),255,Math.round(percent/0.5*255));
	return rgb(0,Math.round(percent/0.5*255),0);
}

function percentRedToWhite(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	if(percent > 0.5)
		return rgb(255,Math.round(percent/0.5*255),Math.round(percent/0.5*255));
	return rgb(Math.round(percent/0.5*255),0,0);
}

function percentBlueToWhite(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	if(percent > 0.5)
		return rgb(Math.round(percent/0.5*255),Math.round(percent/0.5*255),255);
	return rgb(0,0,Math.round(percent/0.5*255));
}

function percentGreen(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	return rgb(0,Math.round(percent*255),0);
}

function percentRed(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	return rgb(Math.round(percent*255),0,0);
}

function percentBlue(percent)
{
	if(typeof percent != "number" || percent > 1 || percent < 0)
		return "#000";
	return rgb(0,0,Math.round(percent*255));
}