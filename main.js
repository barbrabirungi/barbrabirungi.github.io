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

    // Toggle detailed view in About Me section
    const aboutMeSummary = document.querySelector('.brief-summary');
    if (aboutMeSummary) {
        aboutMeSummary.addEventListener('click', function() {
            const detailedSection = document.querySelector('.detailed-summary');
            if (detailedSection) {
                detailedSection.style.display = detailedSection.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});
