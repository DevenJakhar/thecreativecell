// Hindi Language Switcher for The Creative Cell
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferred-language') || 'en';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners to language buttons
        this.addEventListeners();
        
        // Update active button state
        this.updateActiveButton();
    }

    addEventListeners() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
                this.updateActiveButton();
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        
        // Update body class for CSS styling
        document.body.className = document.body.className.replace(/lang-\w+/g, '');
        document.body.classList.add(`lang-${lang}`);
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Update text content
        this.updateTextContent(lang);
        
        // Save preference
        localStorage.setItem('preferred-language', lang);
    }

    updateTextContent(lang) {
        const elements = document.querySelectorAll('[data-en][data-hi]');
        
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = text;
                } else if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = text;
                } else if (element.tagName === 'META' && element.name === 'description') {
                    element.content = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update page title if available
        const titleElement = document.querySelector('title[data-en][data-hi]');
        if (titleElement) {
            const titleText = titleElement.getAttribute(`data-${lang}`);
            if (titleText) {
                document.title = titleText;
            }
        }
    }

    updateActiveButton() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            const buttonLang = button.getAttribute('data-lang');
            if (buttonLang === this.currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Public method to get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Public method to switch language programmatically
    switchTo(lang) {
        if (lang === 'en' || lang === 'hi') {
            this.setLanguage(lang);
            this.updateActiveButton();
        }
    }
}

// Enhanced font loading for Hindi
function loadHindiFonts() {
    if ('fonts' in document) {
        // Preload Hindi fonts for better performance
        const hindiSansFont = new FontFace(
            'Noto Sans Devanagari',
            'url(https://fonts.gstatic.com/s/notosansdevanagari/v25/TuGoUUFzXI5FBtUq5a8bjKYTZjtRU6Sgv3NaV_SNmI0b8QQCQmHn6B2OHjbL_08AlXQly_AzOy8.woff2)',
            { weight: '400', style: 'normal' }
        );
        
        const hindiSerifFont = new FontFace(
            'Noto Serif Devanagari',
            'url(https://fonts.gstatic.com/s/notoserifdevanagari/v21/hv-WlzGrcEzXPorhSINaKwNBjfp7WLO_lsrwNGGJUUUaMBWNbI_7YTG_YmXeNc2QpHtxUKk.woff2)',
            { weight: '600', style: 'normal' }
        );

        Promise.all([
            hindiSansFont.load(),
            hindiSerifFont.load()
        ]).then(fonts => {
            fonts.forEach(font => document.fonts.add(font));
        }).catch(err => {
            console.warn('Hindi fonts failed to load:', err);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load Hindi fonts
    loadHindiFonts();
    
    // Initialize language switcher
    window.languageSwitcher = new LanguageSwitcher();
    
    // Add smooth transitions for language switching
    document.body.style.transition = 'font-family 0.3s ease';
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}
