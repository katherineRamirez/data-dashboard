/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/* Hacemos el llamado de los id creados en html para usarlos en javascript */
var hamburguesa = document.getElementById("hamburguesa");
var equis = document.getElementById("equis");
var contenedorHamburguesa = document.getElementById("contenedor_menu_hamburguesa");

/* Asignando atributo para ocultar el botón equis */
	equis.setAttribute("style","visibility:hidden");

/* Función al botón hamburguesa para crear un menú para agregar, remover estudiante y agregar sprint */
hamburguesa.addEventListener("click", function(){

/* Al hacer click en el ícono hamburguesa éste se oculta y aparece el ícono de equis */
	 hamburguesa.setAttribute("style","visibility:hidden");
	 equis.setAttribute("style","visibility:visible");

/* Creando el menú para agregar, remover estudiante y agregar sprint */
	var divPerfil = document.createElement("div");
	/* Creando una clase al div para darle estilos en css */
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

/* Asignar padre a los huerfanos */
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

/* Función para las tabs */
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}






