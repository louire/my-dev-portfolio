// Manejo del scroll suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionar todos los elementos que queremos animar
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Recoger los datos del formulario
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Aquí puedes agregar la lógica para enviar el formulario
        try {
            // Simulación de envío
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mostrar mensaje de éxito
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
}

// Generar el gráfico de contribuciones
function generateContributionGraph() {
    const contributionGraph = document.querySelector('.contribution-graph');
    if (!contributionGraph) return;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const grid = document.createElement('div');
    grid.className = 'contribution-grid';
    
    // Crear encabezados de meses
    const monthsRow = document.createElement('div');
    monthsRow.className = 'months-row';
    months.forEach(month => {
        const monthEl = document.createElement('span');
        monthEl.textContent = month;
        monthsRow.appendChild(monthEl);
    });
    contributionGraph.appendChild(monthsRow);
    
    // Generar cuadrícula de contribuciones
    for (let i = 0; i < 7; i++) {
        const row = document.createElement('div');
        row.className = 'contribution-row';
        
        for (let j = 0; j < 52; j++) {
            const cell = document.createElement('div');
            cell.className = 'contribution-cell';
            // Generar un número aleatorio de contribuciones
            const contributions = Math.floor(Math.random() * 4);
            cell.classList.add(`level-${contributions}`);
            cell.setAttribute('data-contributions', contributions);
            row.appendChild(cell);
        }
        
        grid.appendChild(row);
    }
    
    contributionGraph.appendChild(grid);
}

// Efecto de hover para las skill badges
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseover', () => {
        badge.style.transform = 'scale(1.1)';
        badge.style.transition = 'transform 0.3s ease';
    });
    
    badge.addEventListener('mouseout', () => {
        badge.style.transform = 'scale(1)';
    });
});

// Animación del terminal
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar la animación del terminal
const terminalContent = document.querySelector('.terminal-content');
if (terminalContent) {
    const commands = [
        'ls skills',
        'python, c#, .net, rust, django, fastapi',
        'mysql, postgres, sqlite, mongodb',
        'linux, arduino, raspberry pi',
        '',
        'ls tools',
        'vs code, pycharm, zsh',
        'dbeaver, anaconda'
    ];
    
    let delay = 0;
    commands.forEach((command, index) => {
        const line = document.createElement('p');
        terminalContent.appendChild(line);
        setTimeout(() => {
            typeWriter(line, command);
        }, delay);
        delay += command.length * 50 + 500; // Ajustar según la longitud del texto
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    generateContributionGraph();
    
    // Añadir clase para activar las animaciones iniciales
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Detectar scroll para la navegación
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scroll hacia abajo
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll hacia arriba
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});