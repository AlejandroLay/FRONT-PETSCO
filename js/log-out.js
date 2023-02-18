function cambiarTexto(elemento) {
    elemento.innerHTML = "Cerrar Sesión";
    elemento.style.color = "red";
}

function restaurarTexto(elemento) {
    elemento.innerHTML = "<span class='original-text'>Hola, Alejandro</span>";
    elemento.style.backgroundColor = "";
    elemento.style.color = "";
}