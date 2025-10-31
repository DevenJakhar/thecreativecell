// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Language switching functionality
    const translations = {
        en: {
            // Navigation
            'Work': 'Work',
            'Services': 'Services',
            'About': 'About',
            'Team': 'Team',
            'Contact': 'Contact',
            // Hero section
            'Crafting extraordinary visual experiences that push the boundaries of creativity and innovation': 'Crafting extraordinary visual experiences that push the boundaries of creativity and innovation',
            'Explore Our Work': 'Explore Our Work',
            'Scroll': 'Scroll',
            // Work section
            'Featured Work': 'Featured Work',
            'View More Work': 'View More Work',
            // Services section
            'Services': 'Services',
            'Visual Effects': 'Visual Effects',
            'Cutting-edge VFX solutions for film, television, and digital media': 'Cutting-edge VFX solutions for film, television, and digital media',
            'Creative Direction': 'Creative Direction',
            'Strategic creative leadership for brands and entertainment properties': 'Strategic creative leadership for brands and entertainment properties',
            'Post-Production': 'Post-Production',
            'Complete post-production services from editing to final delivery': 'Complete post-production services from editing to final delivery',
            'Digital Innovation': 'Digital Innovation',
            'Emerging technology integration and interactive experiences': 'Emerging technology integration and interactive experiences',
            // About section
            'About The Creative Cell': 'About The Creative Cell',
            'We are a collective of visionary artists, technologists, and storytellers dedicated to pushing the boundaries of creative expression. Our work spans across film, television, advertising, and digital media, delivering exceptional visual experiences that captivate and inspire.': 'We are a collective of visionary artists, technologists, and storytellers dedicated to pushing the boundaries of creative expression. Our work spans across film, television, advertising, and digital media, delivering exceptional visual experiences that captivate and inspire.',
            'With a passion for innovation and a commitment to excellence, we transform ideas into extraordinary realities.': 'With a passion for innovation and a commitment to excellence, we transform ideas into extraordinary realities.',
            'Projects Completed': 'Projects Completed',
            'Awards Won': 'Awards Won',
            'Years Experience': 'Years Experience',
            // Team section
            'Our Team': 'Our Team',
            'Nalin Jakhar': 'Nalin Jakhar',
            'Creative Director': 'Creative Director',
            'Visionary leader with 12+ years crafting award-winning visual experiences that push creative boundaries.': 'Visionary leader with 12+ years crafting award-winning visual experiences that push creative boundaries.',
            'Marcus Rodriguez': 'Marcus Rodriguez',
            'Lead VFX Artist': 'Lead VFX Artist',
            'Technical wizard transforming impossible ideas into stunning realities through cutting-edge visual effects.': 'Technical wizard transforming impossible ideas into stunning realities through cutting-edge visual effects.',
            'Elena Kowalski': 'Elena Kowalski',
            'Senior Producer': 'Senior Producer',
            'Strategic mastermind ensuring every project delivers excellence while fostering creative collaboration.': 'Strategic mastermind ensuring every project delivers excellence while fostering creative collaboration.',
            // Contact section
            "Let's Create Together": "Let's Create Together",
            "Ready to bring your vision to life? Get in touch and let's discuss your next project.": "Ready to bring your vision to life? Get in touch and let's discuss your next project.",
            'Email': 'Email',
            'Phone': 'Phone',
            'Start a Project': 'Start a Project'
        },
        hi: {
            // Navigation
            'Work': 'काम',
            'Services': 'सेवाएं',
            'About': 'हमारे बारे में',
            'Team': 'टीम',
            'Contact': 'संपर्क',
            // Hero section
            'Crafting extraordinary visual experiences that push the boundaries of creativity and innovation': 'रचनात्मकता और नवाचार की सीमाओं को आगे बढ़ाने वाले असाधारण दृश्य अनुभव तैयार करना',
            'Explore Our Work': 'हमारा काम देखें',
            'Scroll': 'स्क्रॉल करें',
            // Work section
            'Featured Work': 'विशेष कार्य',
            'View More Work': 'और काम देखें',
            // Services section
            'Services': 'सेवाएं',
            'Visual Effects': 'विज़ुअल इफेक्ट्स',
            'Cutting-edge VFX solutions for film, television, and digital media': 'फिल्म, टेलीविजन और डिजिटल मीडिया के लिए अत्याधुनिक VFX समाधान',
            'Creative Direction': 'रचनात्मक निर्देशन',
            'Strategic creative leadership for brands and entertainment properties': 'ब्रांड्स और मनोरंजन संपत्तियों के लिए रणनीतिक रचनात्मक नेतृत्व',
            'Post-Production': 'पोस्ट-प्रोडक्शन',
            'Complete post-production services from editing to final delivery': 'संपादन से लेकर अंतिम वितरण तक संपूर्ण पोस्ट-प्रोडक्शन सेवाएं',
            'Digital Innovation': 'डिजिटल नवाचार',
            'Emerging technology integration and interactive experiences': 'उभरती प्रौद्योगिकी एकीकरण और इंटरैक्टिव अनुभव',
            // About section
            'About The Creative Cell': 'द क्रिएटिव सेल के बारे में',
            'We are a collective of visionary artists, technologists, and storytellers dedicated to pushing the boundaries of creative expression. Our work spans across film, television, advertising, and digital media, delivering exceptional visual experiences that captivate and inspire.': 'हम दूरदर्शी कलाकारों, तकनीशियनों और कहानीकारों का एक समूह हैं जो रचनात्मक अभिव्यक्ति की सीमाओं को आगे बढ़ाने के लिए समर्पित है। हमारा काम फिल्म, टेलीविजन, विज्ञापन और डिजिटल मीडिया में फैला है, जो मनमोहक और प्रेरणादायक असाधारण दृश्य अनुभव प्रदान करता है।',
            'With a passion for innovation and a commitment to excellence, we transform ideas into extraordinary realities.': 'नवाचार के जुनून और उत्कृष्टता की प्रतिबद्धता के साथ, हम विचारों को असाधारण वास्तविकताओं में बदल देते हैं।',
            'Projects Completed': 'पूर्ण परियोजनाएं',
            'Awards Won': 'पुरस्कार जीते',
            'Years Experience': 'वर्षों का अनुभव',
            // Team section
            'Our Team': 'हमारी टीम',
            'Nalin Jakhar': 'नलिन जाखड़',
            'Creative Director': 'रचनात्मक निदेशक',
            'Visionary leader with 12+ years crafting award-winning visual experiences that push creative boundaries.': '12+ वर्षों के साथ दूरदर्शी नेता जो रचनात्मक सीमाओं को आगे बढ़ाने वाले पुरस्कार विजेता दृश्य अनुभव तैयार करते हैं।',
            'Marcus Rodriguez': 'मार्कस रॉड्रिगेज',
            'Lead VFX Artist': 'मुख्य VFX कलाकार',
            'Technical wizard transforming impossible ideas into stunning realities through cutting-edge visual effects.': 'तकनीकी जादूगर जो अत्याधुनिक विज़ुअल इफेक्ट्स के माध्यम से असंभव विचारों को आश्चर्यजनक वास्तविकताओं में बदल देते हैं।',
            'Elena Kowalski': 'एलेना कोवाल्स्की',
            'Senior Producer': 'वरिष्ठ निर्माता',
            'Strategic mastermind ensuring every project delivers excellence while fostering creative collaboration.': 'रणनीतिक मास्टरमाइंड जो रचनात्मक सहयोग को बढ़ावा देते हुए हर परियोजना में उत्कृष्टता सुनिश्चित करते हैं।',
            // Contact section
            "Let's Create Together": 'आइए मिलकर बनाते हैं',
            "Ready to bring your vision to life? Get in touch and let's discuss your next project.": 'अपने विज़न को जीवंत करने के लिए तैयार हैं? संपर्क करें और आइए अपनी अगली परियोजना पर चर्चा करते हैं।',
            'Email': 'ईमेल',
            'Phone': 'फोन',
            'Start a Project': 'एक परियोजना शुरू करें'
        }
    };

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
    
    // Enhanced smooth scrolling for navigation links
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
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.work-item, .service-item, .stat-item, .section-title');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Team section scroll animations
    const teamObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe team members for staggered animations
    document.querySelectorAll('.team-member').forEach((member, index) => {
        // Add staggered delay based on index
        member.style.transitionDelay = `${index * 0.2}s`;
        teamObserver.observe(member);
    });

    
    // Video initialization and animation
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        // Ensure video plays on load
        heroVideo.addEventListener('loadeddata', function() {
            this.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
            });
        });
        
        // Fallback for browsers that block autoplay
        heroVideo.addEventListener('canplay', function() {
            if (this.paused) {
                this.play().catch(function(error) {
                    console.log('Video play failed:', error);
                });
            }
        });
        
        // Reset animation on video restart
        heroVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    }
    
    // Enhanced parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVideo = document.querySelector('.hero-video');
        const heroContent = document.querySelector('.hero-content');
        const heroOverlay = document.querySelector('.hero-overlay');
        
        if (heroVideo && scrolled < window.innerHeight) {
            // Enhanced parallax with smooth scaling and movement
            const scale = 1 + (scrolled * 0.0002);
            const translateY = scrolled * 0.4;
            heroVideo.style.transform = `scale(${scale}) translateY(${translateY}px)`;
            
            // Adjust opacity based on scroll for fade effect
            const opacity = Math.max(0.3, 0.7 - (scrolled / window.innerHeight) * 0.4);
            heroVideo.style.opacity = opacity;
        }
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
            // Fade out content as user scrolls
            const contentOpacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.2);
            heroContent.style.opacity = contentOpacity;
        }
        
        if (heroOverlay) {
            // Darken overlay as user scrolls for better transition
            const overlayOpacity = Math.min(0.9, 0.7 + (scrolled / window.innerHeight) * 0.2);
            heroOverlay.style.background = `linear-gradient(135deg, rgba(10, 10, 10, ${overlayOpacity}) 0%, rgba(20, 20, 20, ${overlayOpacity * 0.8}) 50%, rgba(10, 10, 10, ${overlayOpacity}) 100%)`;
        }
    });
    
    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }
    
    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const text = statNumber.textContent;
                const number = parseInt(text.replace('+', ''));
                
                if (!entry.target.classList.contains('animated')) {
                    animateCounter(statNumber, number);
                    entry.target.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    
    // Typing effect for hero subtitle
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        setTimeout(type, 1500); // Delay to start after title animation
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 30);
    }
    
    // Work item hover effects
    document.querySelectorAll('.work-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Button ripple effect
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
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
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const rippleStyles = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    const rippleStyleSheet = document.createElement('style');
    rippleStyleSheet.textContent = rippleStyles;
    document.head.appendChild(rippleStyleSheet);
    
    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6b35, #f7931e);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
    
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">The Creative Cell</div>
            <div class="preloader-bar">
                <div class="preloader-progress"></div>
            </div>
        </div>
    `;
    
    const preloaderStyles = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0a0a0a;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            transition: opacity 0.5s ease;
        }
        
        .preloader-content {
            text-align: center;
        }
        
        .preloader-logo {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 2rem;
            opacity: 0;
            animation: fadeInUp 0.8s ease 0.2s forwards;
        }
        
        .preloader-bar {
            width: 200px;
            height: 2px;
            background: rgba(255, 107, 53, 0.2);
            margin: 0 auto;
            overflow: hidden;
        }
        
        .preloader-progress {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #ff6b35, #f7931e);
            animation: loadProgress 2s ease forwards;
        }
        
        @keyframes loadProgress {
            to { width: 100%; }
        }
    `;
    
    const preloaderStyleSheet = document.createElement('style');
    preloaderStyleSheet.textContent = preloaderStyles;
    document.head.appendChild(preloaderStyleSheet);
    document.body.appendChild(preloader);
    
    // Remove preloader after loading
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 2500);
    });
    
    // Featured work card click functionality
    const videoContainers = document.querySelectorAll('.video-container');
    const youtubeUrls = [
        'https://youtu.be/woZY33GvqPo',  // Card 1
        'https://youtu.be/C1dGMRRRiMU',  // Card 2
        'https://youtu.be/60m00k8DiGQ',  // Card 3
        'https://youtu.be/I5mCAhCr2B0'   // Card 4 - Brand Ad: Bold Beauty
    ];
    
    videoContainers.forEach((container, index) => {
        container.style.cursor = 'pointer';
        container.addEventListener('click', function() {
            window.open(youtubeUrls[index], '_blank');
        });
        
        // Add hover effect to indicate clickability
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Client logo click functionality
    const clientItems = document.querySelectorAll('.client-item');
    const instagramUrls = [
        'https://www.instagram.com/urbanfits.co.in/',           // Urban Fits
        'https://www.instagram.com/the.houseofprodigy/reels/',  // The House of Prodigy
        'https://www.instagram.com/filmi.tau/'                  // Filmi Tau
    ];
    
    clientItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            window.open(instagramUrls[index], '_blank');
        });
        
        // Add hover effect to indicate clickability
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // EmailJS Integration
    // Initialize EmailJS - You need to replace these with your actual EmailJS credentials
    // Get your credentials from: https://www.emailjs.com/
    const EMAILJS_PUBLIC_KEY = "2YTXy4CgEs12uR87s"; // Replace with your actual public key
    const EMAILJS_SERVICE_ID = "service_iny1jkq"; // Replace with your actual service ID  
    const EMAILJS_TEMPLATE_ID = "template_2b3265y"; // Replace with your actual template ID
    const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_v6eynwg"; // Replace with your auto-reply template ID
    
    // Only initialize if credentials are provided
    if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Initialize reCAPTCHA form validator
    let recaptchaValidator = null;
    
    if (contactForm) {
        // Initialize the reCAPTCHA validator
        recaptchaValidator = new RecaptchaFormValidator('contact-form', 'custom-recaptcha', {
            text: "I'm not a bot",
            errorMessage: currentLanguage === 'hi' ? 
                'कृपया पुष्टि करें कि आप बॉट नहीं हैं।' : 
                "Please confirm you're not a bot.",
            preventSubmit: false, // We'll handle validation manually
            showErrorOnSubmit: false
        });
        
        // Custom validation function
        function validateForm() {
            const name = contactForm.user_name.value.trim();
            const email = contactForm.user_email.value.trim();
            const message = contactForm.message.value.trim();
            
            // Clear previous status
            formStatus.textContent = '';
            formStatus.className = 'form-status';
            
            // Name validation
            if (name.length < 3) {
                formStatus.textContent = currentLanguage === 'hi' ? 
                    'नाम कम से कम 3 अक्षर का होना चाहिए।' : 
                    'Name must be at least 3 characters long.';
                formStatus.classList.add('error');
                return false;
            }
            
            // Email validation
            if (!email.endsWith('@gmail.com')) {
                formStatus.textContent = currentLanguage === 'hi' ? 
                    'ईमेल @gmail.com के साथ समाप्त होना चाहिए।' : 
                    'Email must end with @gmail.com';
                formStatus.classList.add('error');
                return false;
            }
            
            // Message validation
            if (message.length < 40) {
                formStatus.textContent = currentLanguage === 'hi' ? 
                    'परियोजना विवरण कम से कम 40 अक्षर का होना चाहिए।' : 
                    'Project details must be at least 40 characters long.';
                formStatus.classList.add('error');
                return false;
            }
            
            // reCAPTCHA validation
            if (!recaptchaValidator.isValid()) {
                const recaptcha = recaptchaValidator.getRecaptcha();
                recaptcha.showError(currentLanguage === 'hi' ? 
                    'कृपया पुष्टि करें कि आप बॉट नहीं हैं।' : 
                    "Please confirm you're not a bot.");
                return false;
            }
            
            return true;
        }
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form before submission
            if (!validateForm()) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            submitBtn.querySelector('span').textContent = currentLanguage === 'hi' ? 'भेजा जा रहा है...' : 'Sending...';
            submitBtn.disabled = true;
            
            // Clear previous status
            formStatus.textContent = '';
            formStatus.className = 'form-status';
            
            // Prepare template parameters
            const templateParams = {
                from_name: contactForm.user_name.value,
                from_email: contactForm.user_email.value,
                user_name: contactForm.user_name.value,
                user_email: contactForm.user_email.value,
                project_type: contactForm.project_type.value,
                message: contactForm.message.value,
                to_name: 'The Creative Cell',
                to_email: 'thecreativecell1@gmail.com',
                reply_to: contactForm.user_email.value
            };
            
            // EmailJS is configured, proceed with sending emails
            
            // Debug: Log what we're sending
            console.log('Sending main email with params:', templateParams);
            console.log('Using service:', "service_iny1jkq");
            console.log('Using template:', "template_2b3265y");
            
            // Send main email to company
            emailjs.send("service_iny1jkq", "template_2b3265y", templateParams)
                .then(function(response) {
                    console.log('Main email sent successfully:', response);
                    
                    // Now send auto-reply to customer
                    const autoReplyParams = {
                        from_name: "The Creative Cell",
                        from_email: "thecreativecell1@gmail.com",
                        to_name: templateParams.user_name,
                        to_email: templateParams.user_email,
                        user_name: templateParams.user_name,
                        project_type: templateParams.project_type,
                        company_name: "The Creative Cell",
                        company_email: "thecreativecell1@gmail.com",
                        language: currentLanguage,
                        reply_to: "thecreativecell1@gmail.com",
                        // Auto-reply message based on language
                        reply_message: currentLanguage === 'hi' ? 
                            `नमस्ते ${templateParams.user_name},\n\nआपके संदेश के लिए धन्यवाद! हमें आपकी ${templateParams.project_type} परियोजना में रुचि के बारे में जानकर खुशी हुई।\n\nहमारी टीम आपके अनुरोध की समीक्षा कर रही है और हम 24-72 घंटों के भीतर आपसे संपर्क करेंगे। इस बीच, आप हमारे काम को देख सकते हैं:\n\n• हमारी वेबसाइट: www.thecreativecell.com\n• Instagram: @thecreativecell\n• YouTube: The Creative Cell\n\nयदि आपके कोई तत्काल प्रश्न हैं, तो कृपया बेझिझक हमसे thecreativecell1@gmail.com पर संपर्क करें।\n\nसादर,\nThe Creative Cell टीम` :
                            `Hello ${templateParams.user_name},\n\nThank you for reaching out to us! We're excited to learn about your interest in our ${templateParams.project_type} services.\n\nOur team is reviewing your request and we'll get back to you within 24-72 hours. In the meantime, feel free to check out our work:\n\n• Website: www.thecreativecell.com\n• Instagram: @thecreativecell\n• YouTube: The Creative Cell\n\nIf you have any immediate questions, please don't hesitate to contact us at thecreativecell1@gmail.com.\n\nBest regards,\nThe Creative Cell Team`
                    };
                    
                    // Try to send auto-reply email (optional)
                    console.log('Sending auto-reply with params:', autoReplyParams);
                    return emailjs.send("service_iny1jkq", "template_v6eynwg", autoReplyParams)
                        .catch(function(autoReplyError) {
                            console.error('Auto-reply failed with error:', autoReplyError);
                            console.error('Auto-reply error details:', {
                                status: autoReplyError.status,
                                text: autoReplyError.text,
                                message: autoReplyError.message
                            });
                            console.log('Auto-reply template ID used:', "template_v6eynwg");
                            // Don't throw error - main email was successful
                            return { status: 'auto-reply-failed', error: autoReplyError };
                        });
                })
                .then(function(autoReplyResponse) {
                    if (autoReplyResponse.status === 'auto-reply-failed') {
                        console.log('Main email sent, auto-reply failed');
                        // Show success message without mentioning auto-reply
                        formStatus.textContent = currentLanguage === 'hi' ? 
                            'संदेश सफलतापूर्वक भेजा गया! हम 24-72 घंटों के भीतर आपसे संपर्क करेंगे।' : 
                            'Message sent successfully! We\'ll get back to you within 24-72 hours.';
                    } else {
                        console.log('Auto-reply sent successfully:', autoReplyResponse);
                        // Show success message with auto-reply confirmation
                        formStatus.textContent = currentLanguage === 'hi' ? 
                            'संदेश सफलतापूर्वक भेजा गया! आपको एक पुष्टिकरण ईमेल प्राप्त होगा। हम 24-72 घंटों के भीतर आपसे संपर्क करेंगे।' : 
                            'Message sent successfully! You\'ll receive a confirmation email. We\'ll get back to you within 24-72 hours.';
                    }
                    
                    formStatus.classList.add('success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset reCAPTCHA
                    if (recaptchaValidator) {
                        recaptchaValidator.getRecaptcha().reset();
                    }
                    
                    // Reset button
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.disabled = false;
                    
                })
                .catch(function(error) {
                    console.error('Email send failed:', error);
                    console.error('Error details:', {
                        status: error.status,
                        text: error.text,
                        message: error.message
                    });
                    
                    // Show detailed error message for debugging
                    let errorMessage = 'Failed to send message. ';
                    if (error.status === 400) {
                        errorMessage += 'Template or service configuration error. ';
                    } else if (error.status === 401) {
                        errorMessage += 'Authentication failed. Check your EmailJS keys. ';
                    } else if (error.status === 404) {
                        errorMessage += 'Template not found. Check template ID. ';
                    } else if (error.status === 429) {
                        errorMessage += 'Rate limit exceeded. Try again later. ';
                    }
                    
                    formStatus.innerHTML = currentLanguage === 'hi' ? 
                        'संदेश भेजने में त्रुटि हुई। <a href="mailto:thecreativecell1@gmail.com" style="color: #ff6b35; text-decoration: underline;">सीधे ईमेल करें</a> या पुनः प्रयास करें।<br><small>Error: ' + error.text + '</small>' : 
                        errorMessage + '<a href="mailto:thecreativecell1@gmail.com" style="color: #ff6b35; text-decoration: underline;">Email us directly</a> or try again.<br><small>Error: ' + error.text + '</small>';
                    formStatus.classList.add('error');
                    
                    // Reset button
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
        
        // Real-time validation feedback
        contactForm.user_name.addEventListener('input', function() {
            if (this.value.trim().length >= 3) {
                this.style.borderColor = '#16a34a';
            } else {
                this.style.borderColor = '#dc2626';
            }
        });
        
        contactForm.user_email.addEventListener('input', function() {
            if (this.value.trim().endsWith('@gmail.com')) {
                this.style.borderColor = '#16a34a';
            } else {
                this.style.borderColor = '#dc2626';
            }
        });
        
        contactForm.message.addEventListener('input', function() {
            if (this.value.trim().length >= 40) {
                this.style.borderColor = '#16a34a';
            } else {
                this.style.borderColor = '#dc2626';
            }
        });
        
        // Service selection feedback for reCAPTCHA
        const projectTypeSelect = contactForm.project_type;
        if (projectTypeSelect && recaptchaValidator) {
            projectTypeSelect.addEventListener('change', function() {
                if (this.value && this.value !== '') {
                    // Service selected - trigger green backlight
                    recaptchaValidator.getRecaptcha().setServiceSelected(true);
                    this.style.borderColor = '#16a34a';
                } else {
                    // No service selected
                    this.style.borderColor = '#dc2626';
                }
            });
        }
    }
    
    // Update form placeholders when language changes
    function updateFormPlaceholders() {
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            const enPlaceholder = messageTextarea.getAttribute('data-en-placeholder');
            const hiPlaceholder = messageTextarea.getAttribute('data-hi-placeholder');
            
            if (currentLanguage === 'hi' && hiPlaceholder) {
                messageTextarea.placeholder = hiPlaceholder;
            } else if (currentLanguage === 'en' && enPlaceholder) {
                messageTextarea.placeholder = enPlaceholder;
            }
        }
        
        // Update select options
        const projectTypeSelect = document.getElementById('project_type');
        if (projectTypeSelect) {
            const options = projectTypeSelect.querySelectorAll('option');
            options.forEach(option => {
                const enText = option.getAttribute('data-en');
                const hiText = option.getAttribute('data-hi');
                
                if (currentLanguage === 'hi' && hiText) {
                    option.textContent = hiText;
                } else if (currentLanguage === 'en' && enText) {
                    option.textContent = enText;
                }
            });
        }
    }
    
    // Call updateFormPlaceholders when language changes
    const originalSwitchLanguage = switchLanguage;
    switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        updateFormPlaceholders();
    };
    
    // Initialize form placeholders
    updateFormPlaceholders();
    
    // View More Button functionality
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    console.log('View More Button found:', viewMoreBtn); // Debug log
    
    if (viewMoreBtn) {
        // Add pulse effect on page load
        setTimeout(() => {
            viewMoreBtn.classList.add('pulse');
        }, 3000);
        
        // Remove pulse effect after 6 seconds
        setTimeout(() => {
            viewMoreBtn.classList.remove('pulse');
        }, 9000);
        
        // Enhanced click functionality
        viewMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            console.log('View More button clicked!'); // Debug log
            
            // Create ripple effect
            const ripple = this.querySelector('.btn-ripple');
            if (ripple) {
                ripple.style.width = '300px';
                ripple.style.height = '300px';
                
                // Reset ripple after animation
                setTimeout(() => {
                    ripple.style.width = '0';
                    ripple.style.height = '0';
                }, 600);
            }
            
            // Add a brief scale animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Navigate to the work showcase page
            console.log('Navigating to work-showcase.html...'); // Debug log
            
            // Try multiple navigation methods for better compatibility
            try {
                setTimeout(() => {
                    window.location.href = 'work-showcase.html';
                }, 300);
            } catch (error) {
                console.error('Navigation error:', error);
                // Fallback navigation
                window.open('work-showcase.html', '_self');
            }
        });
        
        // Enhanced hover effects
        viewMoreBtn.addEventListener('mouseenter', function() {
            // Add subtle rotation to the icon
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.transform = 'translateY(3px) rotate(5deg)';
            }
        });
        
        viewMoreBtn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
        
        // Intersection Observer for entrance animation
        const viewMoreObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Set initial state for animation
        viewMoreBtn.style.opacity = '0';
        viewMoreBtn.style.transform = 'translateY(30px)';
        viewMoreBtn.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Observe the button
        viewMoreObserver.observe(viewMoreBtn);
    }
    
});

// Backup navigation function for onclick handler
function navigateToShowcase() {
    console.log('Backup navigation function called');
    try {
        window.location.href = 'work-showcase.html';
    } catch (error) {
        console.error('Backup navigation error:', error);
        window.open('work-showcase.html', '_self');
    }
}

function navigateToTeam() {
    console.log('Navigating to team.html...');
    try {
        window.location.href = 'team.html';
    } catch (error) {
        console.error('Navigation error:', error);
        window.open('team.html', '_self');
    }
}

// Mobile Flip Card Functionality
document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    
    if (flipCard) {
        let isFlipped = false;
        
        // Check if mobile device
        function isMobile() {
            return window.innerWidth <= 768;
        }
        
        // Mobile touch/click handling
        function handleMobileFlip(e) {
            if (isMobile()) {
                e.preventDefault();
                
                if (!isFlipped) {
                    flipCard.classList.add('flipped');
                    isFlipped = true;
                } else {
                    flipCard.classList.remove('flipped');
                    isFlipped = false;
                }
            }
        }
        
        // Add event listeners for mobile
        flipCard.addEventListener('touchstart', handleMobileFlip);
        flipCard.addEventListener('click', handleMobileFlip);
        
        // Handle window resize
        window.addEventListener('resize', function() {
            // Reset card state on resize
            flipCard.classList.remove('flipped');
            isFlipped = false;
        });
        
        // Add visual feedback for mobile
        if (isMobile()) {
            flipCard.style.cursor = 'pointer';
        }
    }
});
