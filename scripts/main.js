//imagenes que cambian
var imagen = document.querySelector('img');

imagen.onclick = function(){
	var miSrc = imagen.getAttribute('src');//befirica el valor del atributo de la imagen (ruta)
	if (miSrc === 'images/gorillaz.jpg') {
		imagen.setAttribute('src','images/days.jpg');
	}
	else{
		imagen.setAttribute('src','images/gorillaz.jpg');
	}
}

//nombre de usuario

var boton = document.querySelector('button');
var titulo = document.querySelector('h1');

function cambiarNombre(){
	var usuario = prompt('Ingresa tu nombre: ');
	localStorage.setItem('nombre', usuario);
	titulo.textContent= usuario + ' la mejor Gorilla Fan';
}

if(!localStorage.getItem('nombre')){
	cambiarNombre();
}
else{
	var nombreAl = localStorage.getItem('nombre');
	titulo.textContent = nombreAl + ' la mejor Gorilla Fan';
}

boton.onclick = function(){
	cambiarNombre();
}
