document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const nav = document.querySelector('nav');
    nav.addEventListener('click', function(e) {
        const target = e.target.closest('a'); // Ensures that the click on the <li> is recognized if it occurs on the <a>
        if (target && target.tagName === 'A') {
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

    // Toggle detailed view for sections
    document.querySelectorAll('section').forEach(section => {
        section.querySelector('.brief-summary').addEventListener('click', function() {
            const detailed = section.querySelector('.detailed-summary');
            if (detailed) {
                detailed.style.display = detailed.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    });
});
