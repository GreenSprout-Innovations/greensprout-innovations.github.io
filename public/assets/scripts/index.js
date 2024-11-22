// Selección de elementos del DOM
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const navLinks = document.querySelectorAll('.navbar-link');

let currentIndex = 0; // Índice actual del carrusel

/**
 * Determina el número de items a mostrar según el ancho de la pantalla
 * @returns {number} Número de items a mostrar
 */
function getItemsToShow() {
    if (window.innerWidth <= 768) {
        return 1; // Móvil
    } else if (window.innerWidth <= 1024) {
        return 2; // Tablet
    }
    return 3; // Desktop
}

/**
 * Muestra los testimonios actuales basándose en el índice proporcionado
 * @param {number} index - El índice desde el cual mostrar los testimonios
 */
function showTestimonials(index) {
    const itemsToShow = getItemsToShow();
    
    carouselItems.forEach((item, i) => {
        item.style.display = (i >= index && i < index + itemsToShow) ? 'flex' : 'none';
    });
    
    // Actualizar estado de los botones
    prevButton.disabled = index === 0;
    nextButton.disabled = index + itemsToShow >= carouselItems.length;
    
    // Actualizar estilos de los botones deshabilitados
    prevButton.style.opacity = index === 0 ? '0.5' : '1';
    nextButton.style.opacity = (index + itemsToShow >= carouselItems.length) ? '0.5' : '1';
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
// Manejador para el botón "anterior"
prevButton.addEventListener('click', () => {
    const itemsToShow = getItemsToShow();
    currentIndex = Math.max(0, currentIndex - itemsToShow);
    showTestimonials(currentIndex);
});

// Manejador para el botón "siguiente"
nextButton.addEventListener('click', () => {
    const itemsToShow = getItemsToShow();
    const maxIndex = carouselItems.length - itemsToShow;
    currentIndex = Math.min(maxIndex, currentIndex + itemsToShow);
    showTestimonials(currentIndex);
});

// Manejar cambios en el tamaño de la ventana
window.addEventListener('resize', () => {
    // Asegurarse de que el índice actual sea válido para la nueva vista
    const itemsToShow = getItemsToShow();
    const maxIndex = carouselItems.length - itemsToShow;
    currentIndex = Math.min(currentIndex, maxIndex);
    showTestimonials(currentIndex);
});

// Inicializar el carrusel
showTestimonials(currentIndex);