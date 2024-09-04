document.addEventListener("DOMContentLoaded", function() {
    // Implement smooth scrolling
    const links = document.querySelectorAll("nav a");
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-top');
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener('click', function() {
        scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle detailed view in About Me section
    function toggleDetail() {
        var detailedSection = document.querySelector('.detailed-summary');
        if (detailedSection.style.display === 'none' || detailedSection.style.display === '') {
            detailedSection.style.display = 'flex';
        } else {
            detailedSection.style.display = 'none';
        }
    }

    // Add event listener for the About Me section to toggle detail view
    const aboutMeSummary = document.querySelector('.brief-summary');
    aboutMeSummary.addEventListener('click', toggleDetail);
});
