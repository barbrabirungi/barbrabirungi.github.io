document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.brief-summary').forEach(summary => {
        summary.addEventListener('click', function() {
            const detail = this.nextElementSibling;
            detail.style.display = detail.style.display === 'flex' ? 'none' : 'flex';
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href') + ' .detailed-summary');
            section.style.display = section.style.display === 'flex' ? 'none' : 'flex';
        });
    });

    const backToTopButton = document.getElementById('back-top');
    window.onscroll = function() {
        backToTopButton.style.display = window.pageYOffset > 20 ? 'block' : 'none';
    };

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
