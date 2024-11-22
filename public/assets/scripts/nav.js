// JavaScript para la funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const navLinks = document.querySelector('.navbar-links');
    const navButton = document.querySelector('.navbar-button');
    const dropdowns = document.querySelectorAll('.navbar-item-dropdown');

    // Toggle menú móvil
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        navButton.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Función para cerrar el menú
    function closeMenu() {
        navLinks.classList.remove('active');
        // Solo ocultar el botón en móvil
        if (window.innerWidth <= 768) {
            navButton.style.display = 'none';
        }
        document.body.style.overflow = '';
        // Cerrar todos los submenús abiertos
        document.querySelectorAll('.navbar-item-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }

    // Manejar clicks en dropdowns
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.navbar-link');
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Cerrar otros submenús
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });

    // Permitir que los enlaces del submenú funcionen
    document.querySelectorAll('.navbar-sublink').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            // No prevenir el comportamiento por defecto para que los enlaces funcionen
        });
    });

    // Agregar el evento click a todos los enlaces del menú
    document.querySelectorAll('.navbar-link, .navbar-sublink').forEach(link => {
        link.addEventListener('click', function(e) {
            // Si es un enlace del dropdown en móvil, no cerrar el menú
            if (window.innerWidth <= 768 && 
                this.parentElement.classList.contains('navbar-item-dropdown') && 
                !this.classList.contains('navbar-sublink')) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            } else {
                // Para todos los demás enlaces, cerrar el menú
                closeMenu();
            }
        });
    });

    // Agregar el evento click a todos los enlaces del menú
    document.querySelectorAll('.navbar-link, .navbar-sublink').forEach(link => {
        link.addEventListener('click', function(e) {
            // Si es un enlace del dropdown en móvil, no cerrar el menú
            if (window.innerWidth <= 768 && 
                this.parentElement.classList.contains('navbar-item-dropdown') && 
                !this.classList.contains('navbar-sublink')) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            } else {
                // Para todos los demás enlaces, cerrar el menú móvil
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            }
        });
    });

    // Ajustar al redimensionar ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            navButton.style.display = '';
            document.body.style.overflow = '';
        }
    });
});