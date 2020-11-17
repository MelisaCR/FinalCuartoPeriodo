var clic201=document.getElementById('clic201');
var clic202=document.getElementById('clic202');
var clic203=document.getElementById('clic203');
var clic204=document.getElementById('clic204');
var paisaje=document.getElementById('paisaje');
var anientra1=document.getElementById('anientra1');
var quieto1=document.getElementById('quieto1');
var quietos=document.getElementById('quietos');
var habla1=document.getElementById('habla1');
var habla2=document.getElementById('habla2');
var stop=document.getElementById('stop');
var pasamet=document.getElementById('pasam');
var daleclic1=document.getElementById('daleclic1');
var pasos=document.getElementById('pasos');
var sonido201=document.getElementById('sonido201');
var sonido202=document.getElementById('sonido202');
var sonido2201=document.getElementById('sonido2201');
var sonido2202=document.getElementById('sonido2202');
var sonido203=document.getElementById('sonido203');


//cuentoo 

var entra1=function(){
	clic201.style.display="none";
	paisaje.style.display="none";
	anientra1.style.display="block";
	
	anientra1.play();
	sonido201.play();
	setTimeout(fotoquieto,5000);
}

var fotoquieto=function(){
	quieto1.style.display="block";
	clic202.style.display="block";
}

var entra2=function(){
	clic202.style.display="none";
	quieto1.style.display="none";
	anientra2.style.display="block";
	pasos.play();
	anientra2.play();
	sonido202.play();
	setTimeout(fotoquieto2,5000);
}

var fotoquieto2=function(){
	quietos.style.display="block";
	clic203.style.display="block";
}

var hablar1=function(){
	clic203.style.display="none";
	quietos.style.display="none";
	habla1.style.display="block";
	habla1.play();
	sonido2201.play();
	setTimeout(fotoquieto3,5000);
}

var fotoquieto3=function(){
	stop.style.display="block";
	clic204.style.display="block";
}

var hablar2=function(){
	clic204.style.display="none";
	stop.style.display="none";
	habla2.style.display="block";
	habla2.play();
	sonido2202.play();
	
	setTimeout(meteoro,5000);
}



var meteoro=function(){
	habla2.style.display="none";
	pasamet.style.display="block";
	pasamet.play();
	sonido203.play();
	setTimeout(darclic,4000);
}

var darclic=function(){
	daleclic1.style.display="block";
}
