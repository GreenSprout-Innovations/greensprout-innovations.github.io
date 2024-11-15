// Selección de elementos del DOM
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const navLinks = document.querySelectorAll('.navbar-link');

let currentIndex = 0; // Índice actual del carrusel
const itemsToShow = 3; // Número de testimonios a mostrar

/**
 * Muestra los testimonios actuales basándose en el índice proporcionado.
 * @param {number} index - El índice desde el cual mostrar los testimonios.
 */
function showTestimonials(index) {
    carouselItems.forEach((item, i) => {
        // Determina si el ítem debe ser visible o no
        item.style.display = (i >= index && i < index + itemsToShow) ? 'flex' : 'none';
    });
}

/*
Establece el enlace activo según la posición de desplazamiento actual.
*/
function setActiveLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));

        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Verifica si el usuario está dentro de la sección
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                // Remueve el estado activo de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                // Añade el estado activo al enlace correspondiente
                link.classList.add('active');
            }
        }
    });
}

// Añadir un event listener para el evento scroll
window.addEventListener('scroll', setActiveLink);

// Inicializar el enlace activo cuando la página se carga
document.addEventListener('DOMContentLoaded', setActiveLink);

/*
Maneja el cambio al botón "anterior" del carrusel.
*/
prevButton.addEventListener('click', () => {
    // Actualiza el índice y muestra los testimonios correspondientes
    currentIndex = (currentIndex === 0) ? carouselItems.length - itemsToShow : currentIndex - itemsToShow;
    showTestimonials(currentIndex);
});

/*
Maneja el cambio al botón "siguiente" del carrusel.
*/
nextButton.addEventListener('click', () => {
    // Actualiza el índice y muestra los testimonios correspondientes
    currentIndex = (currentIndex + itemsToShow >= carouselItems.length) ? 0 : currentIndex + itemsToShow;
    showTestimonials(currentIndex);
});

// Mostrar los testimonios iniciales al cargar la página
showTestimonials(currentIndex);