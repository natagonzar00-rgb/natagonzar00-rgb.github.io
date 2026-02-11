// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
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


/* ===============================
   Acordeón para Skills
================================= */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(card => {
    const header = card.querySelector(".accordion-header");
    const content = card.querySelector(".accordion-content");

    header.addEventListener("click", () => {

        // Cerrar otros
        accordions.forEach(item => {
            if (item !== card) {
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.maxHeight = null;
            }
        });

        card.classList.toggle("active");

        if (card.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
