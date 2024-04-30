document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section-button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked section
            document.getElementById(sectionId).style.display = 'block';
        });
    });
});
