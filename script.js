// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(43, 188, 138, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(43, 188, 138, 0.1)';
    }
});

// Interactive particles effect
function createParticles() {
    const stars = document.querySelector('.stars');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, ' + Math.random() * 0.5 + ')';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${Math.random() * 20 + 10}s infinite`;
        
        stars.appendChild(particle);
    }
    
    // Add float animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(20px); }
            50% { transform: translateY(-40px) translateX(-20px); }
            75% { transform: translateY(-20px) translateX(20px); }
        }
    `;
    document.head.appendChild(style);
}

// Call on page load
window.addEventListener('load', createParticles);

// Button ripple effect
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

window.addEventListener('load', addRippleEffect);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const speed = parseInt(counter.getAttribute('data-speed')) || 200;
        let current = 0;
        
        const updateCounter = () => {
            const increment = target / speed;
            current += increment;
            
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Trigger animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

window.addEventListener('load', animateCounters);

// Parallax effect
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
        }
    });
}

window.addEventListener('load', parallaxEffect);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press '/' to focus search, 'h' for home, 'a' for about
    if (e.key === 'h') window.location.hash = '#home';
    if (e.key === 'a') window.location.hash = '#about';
    if (e.key === 's') window.location.hash = '#skills';
    if (e.key === 'g') window.location.hash = '#stats';
});

// Add scroll animation class
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

window.addEventListener('load', addScrollAnimations);

// Theme toggle (optional dark/light mode)
function setupThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.style.colorScheme = 'dark';
    }
}

window.addEventListener('load', setupThemeToggle);

// Smooth loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.animation = 'fadeIn 0.8s ease-out forwards';
});

// Mobile detection and responsive features
const isMobile = window.innerWidth < 768;

if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
}

// Add touch feedback for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.skill-item, .float-card, .stat-card').forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        el.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// Page visibility API - pause animations when tab is hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});

// Console welcome message
console.log('%c¡Bienvenido! 🎉', 'font-size: 20px; font-weight: bold; color: #2bbc8a;');
console.log('%cSoy Jonathan Vargas Roa - Especialista en Ciberseguridad Ofensiva', 'font-size: 14px; color: #2bbc8a;');
console.log('%cVisita mi GitHub: https://github.com/JonathanVargasRoa', 'font-size: 12px; color: #00d4ff;');
