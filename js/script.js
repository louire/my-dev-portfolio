// Gestión del tema oscuro/claro
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('.material-icons');

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.textContent = 'dark_mode';
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.textContent = 'light_mode';
    }
    localStorage.setItem('theme', theme);
}

// Cambiar tema al hacer click
themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    setTheme(newTheme);
});

// Gestión de proyectos (mostrar/ocultar)
const loadMoreBtn = document.querySelector('.load-more');
const projectsGrid = document.querySelector('.projects-grid');


loadMoreBtn.addEventListener('click', () => {
    projectsGrid.classList.toggle('show-all');
    loadMoreBtn.textContent = projectsGrid.classList.contains('show-all') 
        ? 'Show Less' 
        : 'Load more';
});

// Navegación suave al hacer click en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botón volver arriba
const backToTopButton = document.getElementById('back-to-top');

// Mostrar/ocultar botón según el scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll suave al hacer click en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loader de página
window.addEventListener('load', () => {
    // Inicializar particles.js cuando la página esté cargada
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FF7E3B"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#FF7E3B",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }

    // Inicializar AOS si está disponible
    if (window.AOS) {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Ocultar el loader
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animaciones de entrada para las tarjetas
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.project-card, .experience-card, .skills-card, .education-card');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50,  // Reducido de 80 a 50
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "opacity": {
            "value": 0.3,  // Reducido de 0.5 a 0.3
            "random": false,
        },
        "size": {
            "value": 2,    // Reducido de 3 a 2
            "random": true,
        },
        "move": {
            "speed": 4,    // Reducido de 6 a 4
        }
        // ... resto de tu configuración actual
    }
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema guardado o tema por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Inicializar animaciones
    initializeCardAnimations();

    // Agregar efecto hover a los elementos del footer
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateX(10px)';
        });
        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateX(0)';
        });
    });
});