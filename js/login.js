$(document).ready(function() {
    // Mostrar campos de texto
    $('#registrar').click(function() {
        $('#registrar-container').show();
        $('#iniciar-container').hide();
        $(this).css('font-weight', 'bold');
        $('#iniciar').css('font-weight', 'normal');
        $('#iniciar').css('text-decoration', 'none');
        $(this).addClass('selected');
        $('#iniciar').removeClass('selected');
    });

    // Mostrar campos de contraseña
    $('#iniciar').click(function() {
        $('#registrar-container').hide();
        $('#iniciar-container').show();
        $(this).css('font-weight', 'bold');
        $('#registrar').css('font-weight', 'normal');
        $('#registrar').css('text-decoration', 'none');
        $(this).addClass('selected');
        $('#registrar').removeClass('selected');
    });

    // Seleccionar "iniciar" por defecto
    $('#iniciar').trigger('click');
});