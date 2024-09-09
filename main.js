document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling using event delegation
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

    // Back to top button functionality
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

    // General toggle detail view function for any section
    function toggleDetail(sectionId) {
        const section = document.querySelector(`#${sectionId} .detailed-summary`);
        if (section) {
            section.style.display = section.style.display === 'flex' ? 'none' : 'flex';
        }
    }

    // Attach toggle functionality to clickable sections
    const toggleSections = document.querySelectorAll('[data-toggle="toggle"]');
    toggleSections.forEach(section => {
        section.addEventListener('click', () => toggleDetail(section.dataset.section));
    });
});
