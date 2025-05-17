document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    const fadeInSection = (section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionPosition < windowHeight * 0.8) {  // Trigger when section is 80% in view
        section.classList.add('fade-in');
      }
    };
  
    // Check each section's visibility on scroll
    window.addEventListener('scroll', function() {
      sections.forEach(section => fadeInSection(section));
    });
  
    // Trigger immediately on page load
    sections.forEach(section => fadeInSection(section));
  });