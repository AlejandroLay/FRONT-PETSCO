$(document).ready(function() {
    // Selecciona todos los divs que se van a ocultar
    var divsAOcultar = $('.div-a-ocultar');

    // Agrega un evento de escucha al input
    $('#mi-input').on('input', function() {
        var valorInput = $(this).val();
        if (valorInput !== '') {
            // Oculta los divs seleccionados
            divsAOcultar.hide();
        } else {
            // Muestra los divs seleccionados
            divsAOcultar.show();
        }
    });
});