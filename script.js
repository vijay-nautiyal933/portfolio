
        // Wait for the page to load
        window.addEventListener('load', function() {
            // Hide loader
            document.querySelector('.loader-wrapper').style.opacity = '0';
            setTimeout(function() {
                document.querySelector('.loader-wrapper').style.display = 'none';
            }, 500);


            // Back to top button
            const backToTopButton = document.getElementById('backToTop');
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });

            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 800) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Current year for copyright
            document.getElementById('currentYear').textContent = new Date().getFullYear();

          

            // Intersection Observer for all animate sections
            const sections = document.querySelectorAll('section');
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__fadeIn');
                        sectionObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            // Typewriter effect for banner greeting
            const greeting = document.getElementById('banner-greeting');
            const title = document.getElementById('banner-title');
            const description = document.getElementById('banner-description');
            const buttons = document.querySelector('.banner-buttons');

            if (greeting) {
                greeting.style.opacity = '1';
            }
            if (title) {
                setTimeout(() => {
                    title.style.opacity = '1';
                }, 500);
            }
            if (description) {
                setTimeout(() => {
                    description.style.opacity = '1';
                }, 1000);
            }
            if (buttons) {
                setTimeout(() => {
                    buttons.style.opacity = '1';
                }, 1500);
            }
        });

        // Service worker registration for PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(registration => {
                    console.log('ServiceWorker registration successful');
                }).catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
 
    //    progressBars script ...
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress');
            let animated = false;
            
            function animateProgressBars() {
                if (animated) return;
                
                const skillSection = document.getElementById('skill');
                const sectionPosition = skillSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (sectionPosition < screenPosition) {
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    });
                    animated = true;
                    window.removeEventListener('scroll', animateProgressBars);
                }
            }
            
            // Initial check in case the section is already visible
            animateProgressBars();
            
            // Add scroll event listener
            window.addEventListener('scroll', animateProgressBars);
        });
    
