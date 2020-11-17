var ojosgrandes=document.getElementById('ojosgrandes');
var stop2=document.getElementById('stop2');
var fotocaida=document.getElementById('fotocaida');
var repro2=document.getElementById('repro2');
var grandem=document.getElementById('grandem');
var fotograndem=document.getElementById('fotograndem');
var corren=document.getElementById('corren');
var fotocorren=document.getElementById('fotocorren');
var clic301=document.getElementById('clic301');
var clic302=document.getElementById('clic302');
var clic303=document.getElementById('clic303');
var daleclic2=document.getElementById('daleclic2');
var vuelan=document.getElementById('vuelan');
var fotovuelan=document.getElementById('fotovuelan');
var sonido301=document.getElementById('sonido301');
var sonido302=document.getElementById('sonido302');
var sonido303=document.getElementById('sonido303');
var sonido304=document.getElementById('sonido304');

//cuento

var reprop2=function(){
	repro2.style.display="none";
	stop2.style.display="none";
	ojosgrandes.style.display="block";
	ojosgrandes.play();
	sonido301.play();
	setTimeout(fotoo,6500);	
}


var fotoo=function(){
	clic301.style.display="block";
	ojosgrandes.style.display="none";
	fotocaida.style.display="block";
}

var big=function(){
	fotocaida.style.display="none";
	clic301.style.display="none";
	grandem.style.display="block";
	grandem.play();
	sonido302.play();
	setTimeout(fotogrande,4000);	
}

var fotogrande=function(){
	grandem.style.display="none";
	fotograndem.style.display="block";
	clic302.style.display="block";
}

var correr=function(){
	fotograndem.style.display="none";
	clic302.style.display="none";
	corren.style.display="block";
	corren.play();
	sonido303.play();
	setTimeout(fotocorrer,6000);	
}

var fotocorrer=function(){
	clic303.style.display="block";
	corren.style.display="none";
	fotocorren.style.display="block";
}

var volar=function(){
	clic303.style.display="none";
	fotocorren.style.display="none";
	vuelan.style.display="block";
	vuelan.play();
	sonido304.play();
	setTimeout(fotovolar,6000);	
}

var fotovolar=function(){
	daleclic2.style.display="block";
	vuelan.style.display="none";
	fotovuelan.style.display="block";
}