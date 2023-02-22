const boton = document.getElementById("miBoton");

boton.addEventListener("click", function(event) {
    // Deshabilitar el desplazamiento del cuerpo de la página
    event.preventDefault();
    document.body.style.overflow = "hidden";

    // Aquí puedes colocar el código que quieres ejecutar al hacer clic en el botón
    // ...

    // Volver a habilitar el desplazamiento del cuerpo de la página
    document.body.style.overflow = "auto";
});