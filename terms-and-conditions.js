document.addEventListener('DOMContentLoaded', function() {
    // Initialize Framer Motion
    const { motion, animate, stagger } = Motion;

    // Get DOM elements
    const readTermsCheckbox = document.getElementById('readTerms');
    const acceptTermsCheckbox = document.getElementById('acceptTerms');
    const enterWorldBtn = document.getElementById('enterWorldBtn');
    const termsSections = document.querySelectorAll('.terms-section');
    const checkboxContainers = document.querySelectorAll('.checkbox-container');

    // Particle system for background effect
    class ParticleSystem {
        constructor() {
            this.particles = [];
            this.canvas = null;
            this.ctx = null;
            this.animationId = null;
            this.isActive = false;
            
            // Only initialize on desktop
            if (window.innerWidth > 768) {
                this.init();
            }
        }

        init() {
            this.canvas = document.createElement('canvas');
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.style.pointerEvents = 'none';
            this.canvas.style.zIndex = '-1';
            this.canvas.style.opacity = '0.3';
            document.body.appendChild(this.canvas);

            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();

            window.addEventListener('resize', () => this.resize());
            
            // Pause animation when page is not visible
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.pause();
                } else {
                    this.resume();
                }
            });
        }

        resize() {
            if (!this.canvas) return;
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        createParticles() {
            const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
            this.particles = [];

            for (let i = 0; i < particleCount; i++) {
                this.particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                    color: Math.random() > 0.5 ? '#00ffff' : '#0080ff'
                });
            }
        }

        animate() {
            if (!this.ctx || !this.isActive) return;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen
                if (particle.x > this.canvas.width) particle.x = 0;
                if (particle.x < 0) particle.x = this.canvas.width;
                if (particle.y > this.canvas.height) particle.y = 0;
                if (particle.y < 0) particle.y = this.canvas.height;

                // Draw particle
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fillStyle = particle.color;
                this.ctx.globalAlpha = particle.opacity;
                this.ctx.fill();
            });

            this.animationId = requestAnimationFrame(() => this.animate());
        }

        start() {
            this.isActive = true;
            if (this.canvas) {
                this.animate();
            }
        }

        pause() {
            this.isActive = false;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }

        resume() {
            if (this.canvas && !this.isActive) {
                this.start();
            }
        }
    }

    // Initialize particle system
    const particles = new ParticleSystem();
    particles.start();

    // Animate terms sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    termsSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Checkbox validation and button state management
    function updateButtonState() {
        const bothChecked = readTermsCheckbox.checked && acceptTermsCheckbox.checked;
        enterWorldBtn.disabled = !bothChecked;
        
        if (bothChecked) {
            enterWorldBtn.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                enterWorldBtn.style.animation = '';
            }, 1000);
        }
    }

    // Add pulse animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes checkboxPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Checkbox event listeners
    readTermsCheckbox.addEventListener('change', function() {
        this.parentElement.querySelector('.checkmark').style.animation = 'checkboxPop 0.3s ease';
        setTimeout(() => {
            this.parentElement.querySelector('.checkmark').style.animation = '';
        }, 300);
        updateButtonState();
    });

    acceptTermsCheckbox.addEventListener('change', function() {
        this.parentElement.querySelector('.checkmark').style.animation = 'checkboxPop 0.3s ease';
        setTimeout(() => {
            this.parentElement.querySelector('.checkmark').style.animation = '';
        }, 300);
        updateButtonState();
    });

    // Animate checkbox containers on load
    checkboxContainers.forEach((container, index) => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.6s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });

    // Enter World button functionality
    enterWorldBtn.addEventListener('click', function() {
        if (this.disabled) return;

        // Add loading state
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        this.style.pointerEvents = 'none';

        // Simulate loading and redirect
        setTimeout(() => {
            // Store acceptance in localStorage
            localStorage.setItem('termsAccepted', 'true');
            localStorage.setItem('termsAcceptedDate', new Date().toISOString());
            
            // Check if we have package data from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const packageType = urlParams.get('package');
            const packagePrice = urlParams.get('price');
            const packageName = urlParams.get('name');
            
            // Check if user came from contact flow
            const redirectTo = urlParams.get('redirect') || 'contact';
            
            if (packageType && packagePrice && packageName) {
                // Redirect to package confirmation with package data
                window.location.href = `package-confirmation.html?package=${packageType}&price=${encodeURIComponent(packagePrice)}&name=${encodeURIComponent(packageName)}`;
            } else if (redirectTo === 'contact') {
                // Redirect to contact page after terms acceptance
                window.location.href = 'contact.html';
            } else {
                // Fallback to dashboard if no package data
                window.location.href = 'dashboard.html';
            }
        }, 1500);
    });

    // Smooth scroll behavior for content
    const contentScroll = document.querySelector('.content-scroll');
    if (contentScroll) {
        let isScrolling = false;
        
        contentScroll.addEventListener('scroll', function() {
            if (!isScrolling) {
                requestAnimationFrame(() => {
                    // Add scroll indicator effects here if needed
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !enterWorldBtn.disabled) {
            enterWorldBtn.click();
        }
        
        if (e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('checkbox-label')) {
                e.preventDefault();
                const checkbox = focusedElement.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        }
    });

    // Add focus styles for accessibility
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .checkbox-label:focus-within {
            outline: 2px solid #00ffff;
            outline-offset: 2px;
            border-radius: 4px;
        }
        
        .enter-world-btn:focus {
            outline: 2px solid #00ffff;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);

    // Make checkbox labels focusable
    document.querySelectorAll('.checkbox-label').forEach(label => {
        label.setAttribute('tabindex', '0');
    });

    // Add hover effects for policy items
    document.querySelectorAll('.policy-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 255, 255, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" without a target
            if (targetId === '#' || !targetId) return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Get navbar height for offset (if any)
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
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

    // Initialize initial button state
    updateButtonState();

    console.log('Terms & Conditions page initialized successfully');
});
