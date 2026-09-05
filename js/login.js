document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-login");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        let valido = true;

        document.querySelectorAll(".error-texto").forEach(x => x.textContent = "");
        document.querySelectorAll(".input-error").forEach(x => x.classList.remove("input-error"));

        const email = document.getElementById("login-email");
        const pass = document.getElementById("login-pass");
        const mensaje = document.getElementById("mensaje-login");

        mensaje.style.display = "none";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            document.getElementById("error-login-email").textContent = "Ingresa un correo válido.";
            email.classList.add("input-error");
            valido = false;
        }

        if (!pass.value.trim()) {
            document.getElementById("error-login-pass").textContent = "Ingresa tu contraseña.";
            pass.classList.add("input-error");
            valido = false;
        }

        if (valido) {
            mensaje.textContent = "¡Inicio de sesión correcto!";
            mensaje.style.display = "block";
        }
    });
});