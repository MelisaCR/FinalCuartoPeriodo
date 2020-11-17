var foto=document.getElementById('fotoestrella');
var tierra=document.getElementById('anitierra');
var fototi=document.getElementById('fototierra');
var zoom=document.getElementById('anizoom');
var repro=document.getElementById('repro');
var clic101=document.getElementById('clic101');
var clic102=document.getElementById('clic102');
var daleclic=document.getElementById('daleclic');
var sonido101=document.getElementById('sonido101');
var sonido100=document.getElementById('sonido100');
var sonido102=document.getElementById('sonido102');
var sonido103=document.getElementById('sonido103');
var sonido104=document.getElementById('sonido104');

//del cuento
var cuentop1=function() {
	repro.style.display="none";
	var anip1=document.getElementById('anip1').play();
	sonido101.play();
	sonido100.play();
	setTimeout(fotii,4000);
}

var fotii=function() {
	clic101.style.display="block";
	foto.style.display="block";
	anip1.style.display="none";
}


var aparecetierra=function() {
	clic101.style.display="none";
	foto.style.display="none";
	tierra.style.display="block";
	tierra.play();
	sonido102.play();
	sonido104.play();
	setTimeout(fototierra,5500);
}

var fototierra=function() {
	clic102.style.display="block";
	fototi.style.display="block";
	tierra.style.display="none";
}

var mundo=function() {
	clic102.style.display="none";
	fototi.style.display="none";
	zoom.style.display="block";
	zoom.play();
	setTimeout(darclic,2000);
	sonido103.play();
}

var darclic=function()
{
	daleclic.style.display="block";
}
