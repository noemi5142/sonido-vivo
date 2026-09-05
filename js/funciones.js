document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mi-formulario');
    const msgExito = document.getElementById('mensaje-confirmacion');

    form.addEventListener('submit', function(e) {
        // 1. Evitar recarga (Guía 08)
        e.preventDefault(); 
        
        // Limpiar estados previos
        document.querySelectorAll('.error-texto').forEach(el => el.textContent = '');
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        msgExito.style.display = 'none';
        
        let valido = true;

        // Validar Nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim().length < 3) {
            document.getElementById('error-nombre').textContent = 'Ingresa al menos 3 caracteres';
            nombre.classList.add('input-error');
            valido = false;
        }

        // Validar Email con Regex (Guía 08)
        const email = document.getElementById('email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value)) {
            document.getElementById('error-email').textContent = 'Formato de correo inválido (ej: user@mail.com)';
            email.classList.add('input-error');
            valido = false;
        }

        // Validar Motivo
        const motivo = document.getElementById('motivo');
        if (motivo.value === "") {
            document.getElementById('error-motivo').textContent = 'Selecciona un motivo';
            motivo.classList.add('input-error');
            valido = false;
        }

        // Validar Mensaje
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim().length < 10) {
            document.getElementById('error-mensaje').textContent = 'El mensaje debe tener más de 10 caracteres';
            mensaje.classList.add('input-error');
            valido = false;
        }

        // Mostrar confirmación solo si es válido (Guía 08)
        if (valido) {
            msgExito.style.display = 'block';
            form.reset();
        }

        // Validar Teléfono (Solo números)
        const telefono = document.getElementById('telefono');
        // Regex: ^\d+$ significa "solo dígitos del 0 al 9, uno o más caracteres"
        const regexTelefono = /^\d+$/; 

        if (telefono.value.trim() !== "" && !regexTelefono.test(telefono.value)) {
            document.getElementById('error-telefono').textContent = 'El teléfono solo debe contener números';
            telefono.classList.add('input-error');
            valido = false;
        }
    });
});