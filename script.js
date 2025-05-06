/*=============== zobrazeni menu po kliknuti na hambac ===============*/

    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

/*=============== tlacitko ===============*/

    function toggleBorders() {
        document.body.classList.toggle('highlight-borders');
    }