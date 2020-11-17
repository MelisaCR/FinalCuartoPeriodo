var playy=function() {
	var b=document.getElementById('play');
	b.style.display="none";
	var aninicio=document.getElementById('aninicio').play();
	var musicaintro=document.getElementById('musicaintro').play();
	setTimeout(botoncuento,5000);
}

var botoncuento=function() {
	var boton=document.getElementById('cuentoboton');
	boton.style.display="block";
	setInterval(playmusica);
}

var playmusica=function() {
	var musicaintro=document.getElementById('musicaintro').play();
}



