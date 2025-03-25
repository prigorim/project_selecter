document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destination = document.querySelector(this.getAttribute('href'));
        if (destination) {
            destination.scrollIntoView({ behavior: 'smooth' });
        }
    });
});