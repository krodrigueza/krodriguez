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
boton.onclick = function(){
	cambiarNombre();
}
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



/*
var miTitulo = document.querySelector('h1');//se obtiene una referencia al titulo & de esa forma  lo intercambia, se selecciono el selector
miTitulo.innerHTML = '¡Gorillaz!';//innerHTML reemplaza la sintaxis del elemento por la nueva que se ha declarado
//Objeto
var cadena = 'Karina';
var numero = 10;
var boolean = true;
var arreglo = [22,'Karina',23,'Marzo'];


document.write("<ul><li>" 
	+ cadena +"</li>" 
	+ "<li>" + numero +"</li>"
	+ "<li>" + boolean +"</li>" 
	+ "<li>" + arreglo +"</li>"
	+ "</ul>");

var album = "The Now Now";

if (album == "The Now Now") {
	alert("Yeah, mi album favorito");
}
else{
	alert("Mi favorito es Plastic Beach");//alert es una función
}

/*document.querySelector('html').onclick = function(){
	alert("Ouch! Deja de pincharme!")
}*/
