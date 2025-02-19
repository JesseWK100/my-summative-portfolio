// Toggle the mobile navigation menu on click
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  });
  
  // Simple contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Display a thank you message (customize as needed)
  alert('Thank you for your message!');
  // Reset the form after submission
  this.reset();
});

// Hover effect interactivity
document.addEventListener('DOMContentLoaded', () => {
  const skillCategories = document.querySelectorAll('.skill-category');

  skillCategories.forEach((category) => {
      category.addEventListener('mouseenter', () => {
          category.style.backgroundColor = '#e8f5e9';
      });

      category.addEventListener('mouseleave', () => {
          category.style.backgroundColor = '#f8f9fa';
      });
  });
});
