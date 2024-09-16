document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.brief-summary').forEach(summary => {
        summary.addEventListener('click', function() {
            const detail = this.nextElementSibling;
            const isOpen = detail.classList.contains('open');
            if (isOpen) {
                detail.style.maxHeight = '0';  // Collapse section
                detail.style.opacity = '0';    // Fade out section
            } else {
                detail.style.display = 'flex'; // Make flex to enable inner content alignment
                detail.style.opacity = '1';    // Fade in section
                detail.style.maxHeight = '1000px'; // Max height for animation
            }
            detail.classList.toggle('open', !isOpen);
        });
    });
});
