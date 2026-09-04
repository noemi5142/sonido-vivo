Document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('mi-formulario');
    const msgExito= document.getElementById('mensaje-confirmacion');

    form.addEventListener('submit', function(e){

        // evita la recarga
        e.preventDefault();

        document.querySelectorAll('.error-texto').forEach(el => el.textContent = '');
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        msgExito.style.display = 'none';

        let valido = true;

        //validamos el nombre

        const nombre = document.getElementById('nombre');
        if (nombre.ariaValueMax.trim().length < 3){
            document.getElementById('error-nombre').textContent = 'Ingresa al menos 3 caracteres';
            nombre.classList.add('input-error');
            valido = false;
        }

        const email = document.getElementById('email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value)) {
            document.getElementById('error-email').textContent = 'Formato de correo inválido (ej: user@mail.com)';
            email.classList.add('input-error');
            valido = false;
        }
    });
});