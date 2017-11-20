/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var contenedor = document.getElementById("contenedor_menu");
var hamburguesa = document.getElementById("hamburguesa");
var equis = document.getElementById("equis");
var contenedorHamburguesa = document.getElementById("contenedor_menu_hamburguesa");

	equis.setAttribute("style","visibility:hidden");

hamburguesa.addEventListener("click", function(){

	 hamburguesa.setAttribute("style","visibility:hidden");
	 equis.setAttribute("style","visibility:visible");


	var divPerfil = document.createElement("div");
		divPerfil.classList.add("class", "clase_div");
	var imgPerfil = document.createElement("img");
		imgPerfil.setAttribute("src", "assets/images/foto.jpg");
		imgPerfil.classList.add("class", "clase_img");
	var pPerfil = document.createElement("p");
		pPerfil.textContent = "Valentina Smith";
		pPerfil.classList.add("class", "clase_p");
	var navPerfil = document.createElement("nav");
		navPerfil.classList.add("class", "clase_nav");
	var ulPerfil = document.createElement("ul");
		ulPerfil.classList.add("class", "clase_ul");
	var liPerfil = document.createElement("li");
		liPerfil.classList.add("class", "clase_linea");
	var aPerfil = document.createElement("a");
		aPerfil.setAttribute("href", "#");
		aPerfil.textContent = "Agregar Estudiante";
		aPerfil.classList.add("class", "clase_a");
	var liPerfil2 = document.createElement("li");
		liPerfil2.classList.add("class", "clase_linea2");
	var aPerfil2 = document.createElement("a");
		aPerfil2.setAttribute("href", "#");
		aPerfil2.textContent = "Remover Estudiante";
		aPerfil2.classList.add("class", "clase_a2");
	var liPerfil3 = document.createElement("li");
		liPerfil3.classList.add("class", "clase_linea3");
	var aPerfil3 = document.createElement("a");
		aPerfil3.setAttribute("href", "#");
		aPerfil3.textContent = "Agregar Sprint";
		aPerfil3.classList.add("class", "clase_a3");

	
	liPerfil.appendChild(aPerfil);
	liPerfil2.appendChild(aPerfil2);
	liPerfil3.appendChild(aPerfil3);
	navPerfil.appendChild(liPerfil);
	navPerfil.appendChild(liPerfil2);
	navPerfil.appendChild(liPerfil3);
	divPerfil.appendChild(imgPerfil);
	divPerfil.appendChild(pPerfil);
	divPerfil.appendChild(navPerfil);
	contenedorHamburguesa.appendChild(divPerfil);
})

	equis.addEventListener("click", function(){
		contenedorHamburguesa.setAttribute("style","visibility:hidden");
		equis.setAttribute("style","visibility:hidden");
		hamburguesa.setAttribute("style","visibility:visible");

	})

	 var ciudad = document.getElementById('ciudad');
ciudad.addEventListener("click", function(){

	var selectAño = document.createElement("select");
	var optgroupAño = document.createElement("optgroup");
		optgroupAño.setAttribute("label","2014");
	var turnoAm = document.createElement("option");
		turnoAm.setAttribute("value", "1");
	var textoAm = document.createTextNode("Turno Am");
	var turnoPm = document.createElement("option");
		turnoPm.setAttribute("value", "2");
	var textoPm = document.createTextNode("Turno Pm");

	var optgroupAño2 = document.createElement("optgroup");
		optgroupAño2.setAttribute("label","2015");
	var turnoAm2 = document.createElement("option");
		turnoAm2.setAttribute("value", "3");
	var textoAm2 = document.createTextNode("Turno Am");
	var turnoPm2 = document.createElement("option");
		turnoPm2.setAttribute("value", "4");
	var textoPm2 = document.createTextNode("Turno Pm");

	var optgroupAño3 = document.createElement("optgroup");
		optgroupAño3.setAttribute("label","2016");
	var turnoAm3 = document.createElement("option");
		turnoAm3.setAttribute("value", "5");
	var textoAm3 = document.createTextNode("Turno Am");
	var turnoPm3 = document.createElement("option");
		turnoPm3.setAttribute("value", "6");
	var textoPm3 = document.createTextNode("Turno Pm");

	var optgroupAño4 = document.createElement("optgroup");
		optgroupAño4.setAttribute("label","2017");
	var turnoAm4 = document.createElement("option");
		turnoAm4.setAttribute("value", "7");
	var textoAm4 = document.createTextNode("Turno Am");
	var turnoPm4 = document.createElement("option");
		turnoPm4.setAttribute("value", "8");
	var textoPm4 = document.createTextNode("Turno Pm");

	optgroupAño.appendChild(turnoAm);
	optgroupAño.appendChild(turnoPm);
	turnoAm.appendChild(textoAm);
	turnoPm.appendChild(textoPm);
	selectAño.appendChild(optgroupAño);

	optgroupAño2.appendChild(turnoAm2);
	optgroupAño2.appendChild(turnoPm2);
	turnoAm2.appendChild(textoAm2);
	turnoPm2.appendChild(textoPm2);
	selectAño.appendChild(optgroupAño2);

	optgroupAño3.appendChild(turnoAm3);
	optgroupAño3.appendChild(turnoPm3);
	turnoAm3.appendChild(textoAm3);
	turnoPm3.appendChild(textoPm3);
	selectAño.appendChild(optgroupAño3);

	optgroupAño4.appendChild(turnoAm4);
	optgroupAño4.appendChild(turnoPm4);
	turnoAm4.appendChild(textoAm4);
	turnoPm4.appendChild(textoPm4);
	selectAño.appendChild(optgroupAño4);

	contenedor.appendChild(selectAño);
})

	var contenedorEstudiantes = document.getElementById("contenedor-estudiantes");
	var students = document.getElementById("estudiantes");
students.addEventListener("click", function(){

	var divEstudiantes = document.createElement("div");
	var botonActivas = document.createElement("button");
		botonActivas.textContent = "Activas";
		botonActivas.classList.add("class", "clase_activas");
	var botonInactivas = document.createElement("button");
		botonInactivas.textContent = "Inactivas";
		botonInactivas.classList.add("class", "clase_inactivas");
	var inputEstudiantes = document.createElement("input");

	divEstudiantes.appendChild(botonActivas);
	divEstudiantes.appendChild(botonInactivas);
	divEstudiantes.appendChild(inputEstudiantes);
	contenedor-estudiantes.appendChild(divEstudiantes);

})






