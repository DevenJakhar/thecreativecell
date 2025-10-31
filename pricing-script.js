// Enhanced pricing page with smooth interactions and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
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
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
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
    
    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Update scroll progress
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    }
    
    // Animate pricing cards on load
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        setTimeout(() => {
            card.classList.add('in-view');
        }, 100 + (index * 200));
    });
    
    // Enhanced hover effects for pricing cards
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Add glow effect to best seller
            if (this.classList.contains('best-seller')) {
                this.style.boxShadow = '0 30px 80px rgba(255, 107, 53, 0.3)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Reset glow effect
            if (this.classList.contains('best-seller')) {
                this.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.1)';
            }
        });
    });
    
    // Button interactions with ripple effect
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            createRipple(this, e);
            
            // Handle different button types
            const buttonText = this.querySelector('span').textContent;
            
            if (buttonText.includes('Choose')) {
                e.preventDefault();
                handlePackageSelection(this, buttonText);
            }
        });
    });
    
    // Ripple effect function
    function createRipple(button, event) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 0;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Handle package selection
    function handlePackageSelection(button, packageName) {
        const loadingIndicator = document.querySelector('.loading-indicator');
        loadingIndicator.classList.add('active');
        
        // Simulate package selection process
        setTimeout(() => {
            loadingIndicator.classList.remove('active');
            
            // Show selection confirmation
            showSelectionModal(packageName);
        }, 1500);
    }
    
    // Show selection modal
    function showSelectionModal(packageName) {
        const modal = document.createElement('div');
        modal.className = 'selection-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Package Selected!</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>You've selected the <strong>${packageName.replace('Choose ', '')}</strong> package.</p>
                    <p>contact us to discuss your project requirements.</p>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn confirm">Continue</button>
                    <button class="modal-btn cancel">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Modal interactions
        const closeBtn = modal.querySelector('.modal-close');
        const confirmBtn = modal.querySelector('.confirm');
        const cancelBtn = modal.querySelector('.cancel');
        
        function closeModal() {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
        
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        confirmBtn.addEventListener('click', function() {
            closeModal();
            // Redirect to terms and conditions first, then contact
            window.location.href = 'terms-and-conditions.html?redirect=contact';
        });
        
        // Close on backdrop click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Show modal with animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
    
    // Add modal styles
    const modalStyles = `
        .selection-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10002;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .modal-content {
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .modal-header h3 {
            color: #ff6b35;
            font-size: 1.5rem;
            font-weight: 600;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: #cccccc;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #ffffff;
        }
        
        .modal-body {
            margin-bottom: 2rem;
        }
        
        .modal-body p {
            color: #cccccc;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .modal-footer {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        
        .modal-btn {
            padding: 0.75rem 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 6px;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }
        
        .modal-btn.confirm {
            background: #ff6b35;
            border-color: #ff6b35;
        }
        
        .modal-btn:hover {
            border-color: #ff6b35;
            background: rgba(255, 107, 53, 0.1);
        }
        
        .modal-btn.confirm:hover {
            background: #f7931e;
            border-color: #f7931e;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    // Smooth scrolling for comparison table
    const comparisonSection = document.querySelector('.comparison-section');
    if (comparisonSection) {
        const comparisonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const table = entry.target.querySelector('.comparison-table');
                    if (table) {
                        table.style.opacity = '0';
                        table.style.transform = 'translateY(30px)';
                        table.style.transition = 'all 0.8s ease';
                        
                        setTimeout(() => {
                            table.style.opacity = '1';
                            table.style.transform = 'translateY(0)';
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.3 });
        
        comparisonObserver.observe(comparisonSection);
    }
    
    // Highlight table rows on hover
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 107, 53, 0.1)';
            this.style.transform = 'scale(1.02)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect for pricing cards - DISABLED
    function handleParallax() {
        // Parallax effect disabled to keep pricing cards fixed
        return;
    }
    
    // Throttled scroll handler
    let scrollTimer = null;
    function handleScroll() {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            updateScrollProgress();
            updateNavbar();
        }, 10);
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Resize handler
    window.addEventListener('resize', function() {
        // Reset transforms on resize to ensure cards stay fixed
        pricingCards.forEach(card => {
            card.style.transform = '';
        });
    });
    
    // Initialize page
    updateScrollProgress();
    updateNavbar();
    
    // Add loading animation to page elements
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    if (pageTitle) {
        pageTitle.style.animationDelay = '0.3s';
    }
    
    if (pageSubtitle) {
        pageSubtitle.style.animationDelay = '0.6s';
    }
    
    // Performance optimization for mobile
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile
        pricingCards.forEach(card => {
            card.style.willChange = 'transform';
        });
    }
    
    // Add subtle animation to best seller badge
    const bestSellerBadge = document.querySelector('.best-seller-badge');
    if (bestSellerBadge) {
        bestSellerBadge.style.animation = 'pulse 2s ease-in-out infinite';
        
        const pulseAnimation = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        
        const pulseStyleSheet = document.createElement('style');
        pulseStyleSheet.textContent = pulseAnimation;
        document.head.appendChild(pulseStyleSheet);
    }
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Pricing page error:', e.error);
    });
    
    console.log('Pricing page initialized with enhanced interactions and animations');

    // Currency Switcher Logic
    const currencySwitch = document.getElementById('currencySwitch');
    const priceElements = document.querySelectorAll('[data-inr]');
    const usdLabel = document.querySelector('.currency-label.usd');
    const inrLabel = document.querySelector('.currency-label.inr');

    const CONVERSION_RATE_USD_TO_INR = 88.71;
    let isUsd = true; // Default is USD

    function formatCurrency(amount, currency) {
        if (currency === 'usd') {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
        } else {
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
        }
    }

    function animateValue(element, start, end, duration, currency) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = progress * (end - start) + start;
            element.textContent = formatCurrency(currentValue, currency);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function updatePrices() {
        priceElements.forEach(el => {
            const inrValue = parseFloat(el.dataset.inr);
            const usdValue = inrValue / CONVERSION_RATE_USD_TO_INR;
            
            const currentText = el.textContent;
            const currentNumericValue = parseFloat(currentText.replace(/[^\d.-]/g, ''));

            if (isUsd) {
                animateValue(el, currentNumericValue, usdValue, 500, 'usd');
            } else {
                animateValue(el, currentNumericValue, inrValue, 500, 'inr');
            }
        });
    }

    currencySwitch.addEventListener('click', () => {
        isUsd = !isUsd;
        currencySwitch.setAttribute('aria-checked', isUsd);
        
        if (isUsd) {
            usdLabel.classList.add('active');
            inrLabel.classList.remove('active');
        } else {
            usdLabel.classList.remove('active');
            inrLabel.classList.add('active');
        }

        updatePrices();
    });

    // Initialize default currency view (USD)
    function initializeCurrency() {
        // Set initial state to USD
        currencySwitch.setAttribute('aria-checked', 'true');
        usdLabel.classList.add('active');
        inrLabel.classList.remove('active');
        updatePrices();
    }
    
    // Initialize on page load
    initializeCurrency();
});
