document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-switch');
    const body = document.body;
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    // Theme Toggle Functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const isDarkTheme = body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDarkTheme 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    updateThemeIcon();

    // Mobile Navigation Toggle
    hamburgerMenu.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close mobile navigation when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });

    // Particles.js Configuration (if you're using the library)
    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#3498db' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#3498db', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: 'none', random: