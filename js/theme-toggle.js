// Manejador del tema
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Función para establecer el tema
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Actualizar el texto del botón
    themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
}

// Inicializar tema
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Escuchar clicks en el botón
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});