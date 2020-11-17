var clic401=document.getElementById('clic401');
var clic402=document.getElementById('clic402');
var clic403=document.getElementById('clic403');
var clic404=document.getElementById('clic404');
var clic405=document.getElementById('clic405');
var clic406=document.getElementById('clic406');
var clic407=document.getElementById('clic407');
var clic408=document.getElementById('clic408');
var clic409=document.getElementById('clic409');
var clic410=document.getElementById('clic410');
var clic411=document.getElementById('clic411');
var anientrazul=document.getElementById('anientrazul');
var anientraorange=document.getElementById('anientraorange');
var anihablazul1=document.getElementById('anihablazul1');
var anihablaorange1=document.getElementById('anihablaorange1');
var anihablazul2=document.getElementById('anihablazul2');
var anihablaorange2=document.getElementById('anihablaorange2');
var anientravolador=document.getElementById('anientravolador');
var anihablazul3=document.getElementById('anihablazul3');
var anihablavolador1=document.getElementById('anihablavolador1');
var anihablaorange3=document.getElementById('anihablaorange3');
var anifin=document.getElementById('anifin');
var sonido401=document.getElementById('sonido401');
var sonido402=document.getElementById('sonido402');
var sonido403=document.getElementById('sonido403');
var sonido404=document.getElementById('sonido404');
var sonido405=document.getElementById('sonido405');
var sonido406=document.getElementById('sonido406');
var sonido407=document.getElementById('sonido407');
var sonido408=document.getElementById('sonido408');
var sonido409=document.getElementById('sonido409');
var sonidoyo=document.getElementById('sonidoyo');
var sonidofinal=document.getElementById('sonidofinal');
var pasos=document.getElementById('pasos');
var volver1=document.getElementById('volver1');

var entrazul=function() {
	clic401.style.display="none";
	anientrazul.style.display="block";
	anientrazul.play();
	pasos.play();
	setTimeout(sonido4011,3000);
	setTimeout(fotoentrazul,6000);
}
var sonido4011=function(){
	sonido401.play();
}

var fotoentrazul=function(){
	clic402.style.display="block";
}


var entraorange=function() {
	clic402.style.display="none";
	anientraorange.style.display="block";
	anientraorange.play();
	pasos.play();
	setTimeout(sonido4022,3000);
	setTimeout(fotoentraorange,6000);
}

var sonido4022=function(){
	sonido402.play();
}

var fotoentraorange=function(){
	clic403.style.display="block";
}

var hablazul1=function() {
	clic403.style.display="none";
	anihablazul1.style.display="block";
	anihablazul1.play();
	sonido403.play();
	setTimeout(fotohablazul1,2000);
}

var fotohablazul1=function(){
	clic404.style.display="block";
}

var hablaorange1=function() {
	clic404.style.display="none";
	anihablaorange1.style.display="block";
	anihablaorange1.play();
	sonido404.play();
	setTimeout(fotohablaorange1,2000);
}

var fotohablaorange1=function(){
	clic405.style.display="block";
}

var hablazul2=function() {
	clic405.style.display="none";
	anihablazul2.style.display="block";
	anihablazul2.play();
	sonido405.play();
	setTimeout(fotohablazul2,3000);
}

var fotohablazul2=function(){
	clic406.style.display="block";
}

var hablaorange2=function() {
	clic406.style.display="none";
	anihablaorange2.style.display="block";
	anihablaorange2.play();
	sonido406.play();
	setTimeout(fotohablaorange2,3000);
}

var fotohablaorange2=function(){
	clic407.style.display="block";
}

var entravolador=function() {
	clic407.style.display="none";
	anientravolador.style.display="block";
	anientravolador.play();
	pasos.play();
	setTimeout(sonido4077,2000);
	setTimeout(fotoentravolador,3500);
}

var sonido4077=function(){
	sonido407.play();
}


var fotoentravolador=function(){
	clic408.style.display="block";
}

var hablazul3=function() {
	clic408.style.display="none";
	anihablazul3.style.display="block";
	anihablazul3.play();
	sonido408.play();
	setTimeout(fotohablazul3,2000);
}

var fotohablazul3=function(){
	clic409.style.display="block";
	
}

var hablavolador1=function() {
	clic409.style.display="none";
	anihablavolador1.style.display="block";
	anihablavolador1.play();
	sonidoyo.play();
	setTimeout(fotohablavolador1,2000);
}

var fotohablavolador1=function(){
	clic410.style.display="block";
}

var hablaorange3=function() {
	clic410.style.display="none";
	anihablaorange3.style.display="block";
	anihablaorange3.play();
	sonido409.play();
	setTimeout(fotohablaorange3,2000);
}

var fotohablaorange3=function(){
	clic411.style.display="block";
}

var fin=function() {
	clic411.style.display="none";
	anifin.style.display="block";
	sonidofinal.play();
	anifin.play();
	volver1.style.display="block";
}

