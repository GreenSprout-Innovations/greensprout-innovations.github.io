function validatePasswords() {
    // Obtener los valores de las contraseñas
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Obtener el elemento de mensaje de error
    const errorMessage = document.getElementById('error-message');
    
    // Obtener el formulario
    const form = document.getElementById('password-form');

    // Verificar si las contraseñas coinciden
    if (password === confirmPassword) {
        // Si coinciden, ocultar el mensaje de error (si estaba visible)
        errorMessage.style.display = 'none';
        
        // Enviar el formulario
        form.submit();
        
    } else {
        // Si no coinciden, mostrar el mensaje de error
        errorMessage.style.display = 'block';
    }
}

// Añadir un evento para eliminar el mensaje de error cuando el usuario empiece a escribir
document.getElementById('password').addEventListener('input', function() {
    document.getElementById('error-message').style.display = 'none';
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    document.getElementById('error-message').style.display = 'none';
});
