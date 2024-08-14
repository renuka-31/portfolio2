function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('section-active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('section-active');
}

// Show the first section (About) by default when the page loads
window.onload = function() {
    showSection('about');
};
