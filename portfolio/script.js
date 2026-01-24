// Select the hamburger button and the links list
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu when the button is clicked
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked (optional but recommended for better UX)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});