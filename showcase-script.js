// Showcase page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Language functionality (reuse from main site)
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    // Function to switch language
    function switchLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update all elements with data attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            const englishText = element.getAttribute('data-en');
            const hindiText = element.getAttribute('data-hi');
            
            if (lang === 'hi' && hindiText) {
                element.textContent = hindiText;
            } else if (lang === 'en' && englishText) {
                element.textContent = englishText;
            }
        });
        
        // Update language button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update body class for font adjustments
        document.body.className = document.body.className.replace(/lang-\w+/g, '');
        document.body.classList.add(`lang-${lang}`);
    }
    
    // Initialize language on page load
    switchLanguage(currentLanguage);
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" without a target
            if (targetId === '#' || !targetId) return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Get navbar height for offset
                const navbarHeight = document.querySelector('.showcase-navbar')?.offsetHeight || 80;
                const offsetTop = target.offsetTop - navbarHeight;
                
                // Smooth scroll with custom easing
                smoothScrollTo(offsetTop, 800);
            }
        });
    });
    
    // Custom smooth scroll function with easing
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        // Easing function for smooth animation
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.showcase-navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(30px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // Enhanced card interactions
    const workCards = document.querySelectorAll('.work-card');
    
    // YouTube URLs for each card
    const youtubeUrls = [
        'https://youtu.be/woZY33GvqPo',  // Card 1
        'https://youtu.be/I5mCAhCr2B0',  // Card 2
        'https://youtu.be/oTEAu-8HOlY',  // Card 3
        'https://youtu.be/0AU0M2iExws',  // Card 4
        'https://youtu.be/3RS9WhT2TaI',  // Card 5
        'https://youtu.be/LqGNgmHD1oc',  // Card 6
        'https://youtu.be/60m00k8DiGQ',  // Card 7 - Energy Unleashed
        'https://youtu.be/C1dGMRRRiMU'   // Card 8 - Vibes in Motion
    ];
    
    workCards.forEach((card, index) => {
        // Skip hidden cards (cards 8 and 9)
        if (card.style.display === 'none') {
            return;
        }
        
        // Add click functionality
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            console.log(`Clicked on project: ${projectTitle}`);
            
            // Add ripple effect on click
            const ripple = document.createElement('span');
            ripple.className = 'click-ripple';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Redirect to YouTube URL after ripple animation
            if (index < youtubeUrls.length) {
                setTimeout(() => {
                    window.open(youtubeUrls[index], '_blank');
                }, 300);
            }
        });
        
        // Enhanced hover effect with tilt
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe work cards
    workCards.forEach(card => {
        observer.observe(card);
    });
    
    // Smooth page load animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove loading overlay if exists
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (loadingOverlay) {
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 500);
            }, 500);
        }
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.showcase-hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // Add loading state for images
    const images = document.querySelectorAll('.thumbnail-img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already cached
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or return to previous page
            if (document.referrer && document.referrer.includes('index.html')) {
                window.history.back();
            }
        }
    });
    
    // Performance optimization - lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add page transition effect
    const pageLinks = document.querySelectorAll('a[href^="index.html"], a[href^="contact.html"], a[href^="terms-and-conditions.html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
});

// Add CSS for click ripple effect
const rippleStyles = `
    .click-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 107, 53, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .thumbnail-img {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .thumbnail-img.loaded {
        opacity: 1;
    }
    
    body.loaded {
        animation: bodyFadeIn 0.5s ease;
    }
    
    @keyframes bodyFadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

// Inject ripple styles
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);
