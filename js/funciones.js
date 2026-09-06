document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mi-formulario');
    const msgExito = document.getElementById('mensaje-confirmacion');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // Limpiar estados previos
        document.querySelectorAll('.error-texto').forEach(el => el.textContent = '');
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        msgExito.style.display = 'none';
        
        let valido = true;

        // Validar Nombre
        const nombre = document.getElementById('nombre');
        const regexNombre = /^[a-zA-Z\s]+$/; // Solo letras y espacios
        if (!regexNombre.test(nombre.value.trim())) {
            document.getElementById('error-nombre').textContent = 'El nombre solo debe contener letras y espacios';
            nombre.classList.add('input-error');
            valido = false;
        }

        const email = document.getElementById('email');
        const regexEmail = /^[^\s@]+@duocuc\.cl$/; 
        if (!regexEmail.test(email.value)) {
            document.getElementById('error-email').textContent = 'Formato de correo intitucional invalido (ej: user@duocuc.cl)';
            email.classList.add('input-error');
            valido = false;
        }

        // Validar Motivo
        const motivo = document.getElementById('motivo');
        const regexMotivo = /^[a-zA-Z\s]+$/; // Solo letras y espacios
        if (!regexMotivo.test(motivo.value.trim())) {
            document.getElementById('error-motivo').textContent = 'El motivo solo debe contener letras y espacios';
            motivo.classList.add('input-error');
            valido = false;
        }

        // Validar Mensaje
        const mensaje = document.getElementById('mensaje');
        const regexMensaje = /^.{10,}$/; // Al menos 10 caracteres
        if (!regexMensaje.test(mensaje.value.trim())) {
            document.getElementById('error-mensaje').textContent = 'El mensaje debe tener más de 10 caracteres';
            mensaje.classList.add('input-error');
            valido = false;
        }

        // Mostrar confirmación solo si es válido
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
