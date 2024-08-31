function truncate(number, digits) {
	return Math.trunc(number*Math.pow(10, digits))/Math.pow(10, digits)
}

function updateDateTime() {
	var now = new Date();

	var a = Math.abs(new Date("1999/12/28")-now);
	var b = Math.abs(new Date("2001/05/06")-now);

	var c = new Date("2023/09/01");
	var d = Math.abs(c - now);

	document.getElementById("a").innerHTML = spanA + " " + truncate((d * 100) / a, 10) + " %";
	document.getElementById("b").innerHTML = spanB + " " +  truncate((d * 100) / b, 10) + " %";

}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 100);

var strA = "✧✧Mysterious✧✧ Number #1:"
var strB = "✧✧Mysterious✧✧ Number #2:"

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(col) {
	if(col == "light"){		
		h = getRandomNumber(0,360)
		s = getRandomNumber(30,100)
		l = getRandomNumber(30,100)
	}
	else{
		h = getRandomNumber(0,360)
		s = getRandomNumber(0,70)
		l = getRandomNumber(0,70)
	}
	return h + ',' + s + '%,' + l + '%'
}

spanA = ''
spanB = ''
for(let i=0; i < strA.length; i++){
	spanA += '<span style="color:hsl(' + getRandomColor("dark") + ');">' + strA[i] + '</span>';
	spanB += '<span style="background-color:hsl(' + getRandomColor("light") + ');">' + strB[i] + '</span>';
}
