 document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.querySelector('.theme-toggle');
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');

            // Theme Toggle
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                
                // Optional: Save theme preference in localStorage
                const currentTheme = document.body.classList.contains('dark-theme') 
                    ? 'dark' 
                    : 'light';
                localStorage.setItem('theme', currentTheme);
            });

            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
            }

            // Mobile Menu Toggle
            hamburgerMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburgerMenu.classList.toggle('active');
            });

            // Close mobile menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                });
            });
        });