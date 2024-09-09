document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    nav.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            e.preventDefault();
            const href = target.getAttribute('href');
            const section = document.querySelector(href);
            if (section) {
                const offsetTop = section.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        }
    });

    const backToTopButton = document.getElementById('back-top');
    if (backToTopButton) {
        window.onscroll = function() {
            if (window.pageYOffset > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener('click', function() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Attach toggle functionality to clickable sections
    const toggleSections = document.querySelectorAll('[data-toggle="toggle"]');
    toggleSections.forEach(section => {
        section.addEventListener('click', () => {
            const detailSection = document.querySelector(`#${section.dataset.section} .detailed-summary`);
            if (detailSection) {
                detailSection.style.display = detailSection.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    });
});
