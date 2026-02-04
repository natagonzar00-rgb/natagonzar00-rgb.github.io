// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajuste por la barra de navegación fija
                behavior: 'smooth'
            });
        }
    });
});

// Animación simple al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});