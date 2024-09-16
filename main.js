document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.brief-summary').forEach(summary => {
        summary.addEventListener('click', function() {
            const detail = this.nextElementSibling;
            const isOpen = detail.classList.contains('open');
            detail.classList.toggle('open', !isOpen);
        });
    });
});
