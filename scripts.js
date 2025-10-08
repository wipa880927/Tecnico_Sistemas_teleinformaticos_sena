// Inicialización de AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typed.js para el título animado
const typed = new Typed('#animated-title', {
    strings: ['Técnico en Sistemas Teleinformáticos', 'Formación Profesional SENA', 'Aprende con nosotros'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Contador de visitas
let visitorCount = localStorage.getItem('visitorCount') || 0;
document.getElementById('visitor-count').textContent = ++visitorCount;
localStorage.setItem('visitorCount', visitorCount);

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mostrar mensaje de éxito
    const alert = document.createElement('div');
    alert.className = 'alert alert-success mt-3';
    alert.textContent = 'Mensaje enviado correctamente';
    this.appendChild(alert);
    
    // Limpiar formulario
    this.reset();
    
    // Remover alerta después de 3 segundos
    setTimeout(() => alert.remove(), 3000);
});

// Inicialización del calendario
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'es',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'Inicio de módulo',
                    start: '2025-01-15'
                },
                {
                    title: 'Evaluación',
                    start: '2025-01-30'
                }
            ]
        });
        calendar.render();
    }
});

// Inicialización del mapa
function initMap() {
    const location = { lat: 2.4833, lng: -76.5833 }; // Coordenadas de Popayán
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'SENA CTPI Cauca'
    });
}

// Búsqueda en el sitio
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input[type="search"]').value;
    // Implementar lógica de búsqueda aquí
    console.log('Búsqueda:', searchTerm);
});

// Lazy loading para imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});