document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-link');
    const sections = document.querySelectorAll('.docs-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
                const activeId = entry.target.id;
                setActiveLink(activeId);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    function setActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(id)) {
                link.classList.add('active');
            }
        });
    }

    // Click event for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
