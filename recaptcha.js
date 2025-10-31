/**
 * Custom reCAPTCHA Component
 * A lightweight, modern alternative to Google reCAPTCHA
 */

class CustomRecaptcha {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            text: options.text || "I'm not a bot",
            errorMessage: options.errorMessage || "Please confirm you're not a bot.",
            loadingTime: options.loadingTime || 800,
            onVerify: options.onVerify || null,
            onError: options.onError || null,
            customizable: options.customizable || false,
            ...options
        };
        
        this.isVerified = false;
        this.isLoading = false;
        this.errorMessageElement = null;
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.error('CustomRecaptcha: Container element not found');
            return;
        }
        
        this.render();
        this.attachEventListeners();
    }
    
    render() {
        const recaptchaHTML = `
            <div class="custom-recaptcha">
                <div class="recaptcha-container" tabindex="0" role="checkbox" aria-checked="false" aria-label="${this.options.text}">
                    <div class="recaptcha-checkbox">
                        <div class="recaptcha-checkmark">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path class="checkmark-path" d="M3.5 8.5l2.5 2.5 6.5-6.5"/>
                            </svg>
                        </div>
                    </div>
                    <span class="recaptcha-text">${this.options.text}</span>
                    <div class="recaptcha-loading">
                        <div class="recaptcha-spinner"></div>
                    </div>
                </div>
                <div class="recaptcha-error-message">${this.options.errorMessage}</div>
            </div>
        `;
        
        this.container.innerHTML = recaptchaHTML;
        
        // Get references to elements
        this.recaptchaContainer = this.container.querySelector('.recaptcha-container');
        this.errorMessageElement = this.container.querySelector('.recaptcha-error-message');
    }
    
    attachEventListeners() {
        // Click event
        this.recaptchaContainer.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleClick();
        });
        
        // Keyboard events for accessibility
        this.recaptchaContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleClick();
            }
        });
        
        // Prevent text selection
        this.recaptchaContainer.addEventListener('selectstart', (e) => {
            e.preventDefault();
        });
    }
    
    handleClick() {
        if (this.isLoading) return;
        
        if (this.isVerified) {
            this.uncheck();
        } else {
            this.verify();
        }
    }
    
    verify() {
        if (this.isVerified || this.isLoading) return;
        
        this.hideError();
        this.setLoading(true);
        
        // Simulate verification process
        setTimeout(() => {
            this.setLoading(false);
            this.setVerified(true);
            
            // Trigger success animation
            this.recaptchaContainer.classList.add('success');
            setTimeout(() => {
                this.recaptchaContainer.classList.remove('success');
            }, 600);
            
            // Call onVerify callback
            if (this.options.onVerify && typeof this.options.onVerify === 'function') {
                this.options.onVerify();
            }
            
            // Dispatch custom event
            this.container.dispatchEvent(new CustomEvent('recaptcha-verified', {
                detail: { verified: true }
            }));
            
        }, this.options.loadingTime);
    }
    
    uncheck() {
        if (!this.isVerified) return;
        
        this.setVerified(false);
        this.hideError();
        
        // Dispatch custom event
        this.container.dispatchEvent(new CustomEvent('recaptcha-unchecked', {
            detail: { verified: false }
        }));
    }
    
    setVerified(verified) {
        this.isVerified = verified;
        
        if (verified) {
            this.recaptchaContainer.classList.add('checked');
            this.recaptchaContainer.setAttribute('aria-checked', 'true');
        } else {
            this.recaptchaContainer.classList.remove('checked');
            this.recaptchaContainer.setAttribute('aria-checked', 'false');
        }
    }
    
    setLoading(loading) {
        this.isLoading = loading;
        
        if (loading) {
            this.recaptchaContainer.classList.add('loading');
        } else {
            this.recaptchaContainer.classList.remove('loading');
        }
    }
    
    showError(message = null) {
        const errorText = message || this.options.errorMessage;
        this.errorMessageElement.textContent = errorText;
        this.errorMessageElement.classList.add('show');
        this.recaptchaContainer.classList.add('error');
        
        // Remove error state after animation
        setTimeout(() => {
            this.recaptchaContainer.classList.remove('error');
        }, 500);
        
        // Call onError callback
        if (this.options.onError && typeof this.options.onError === 'function') {
            this.options.onError(errorText);
        }
    }
    
    hideError() {
        this.errorMessageElement.classList.remove('show');
        this.recaptchaContainer.classList.remove('error');
    }
    
    // Public methods
    isChecked() {
        return this.isVerified;
    }
    
    reset() {
        this.setVerified(false);
        this.setLoading(false);
        this.hideError();
    }
    
    disable() {
        this.recaptchaContainer.style.pointerEvents = 'none';
        this.recaptchaContainer.style.opacity = '0.6';
    }
    
    enable() {
        this.recaptchaContainer.style.pointerEvents = 'auto';
        this.recaptchaContainer.style.opacity = '1';
    }
    
    updateText(newText) {
        const textElement = this.container.querySelector('.recaptcha-text');
        if (textElement) {
            textElement.textContent = newText;
            this.options.text = newText;
            this.recaptchaContainer.setAttribute('aria-label', newText);
        }
    }
    
    setServiceSelected(selected = true) {
        if (selected) {
            this.recaptchaContainer.classList.add('service-selected');
            // Remove the class after animation completes
            setTimeout(() => {
                this.recaptchaContainer.classList.remove('service-selected');
            }, 600);
        } else {
            this.recaptchaContainer.classList.remove('service-selected');
        }
    }
    
    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
        }
    }
}

// Form Integration Helper
class RecaptchaFormValidator {
    constructor(formId, recaptchaId, options = {}) {
        this.form = document.getElementById(formId);
        this.recaptchaId = recaptchaId;
        this.options = {
            preventSubmit: options.preventSubmit !== false,
            showErrorOnSubmit: options.showErrorOnSubmit !== false,
            ...options
        };
        
        this.recaptcha = null;
        this.init();
    }
    
    init() {
        if (!this.form) {
            console.error('RecaptchaFormValidator: Form element not found');
            return;
        }
        
        // Initialize reCAPTCHA
        this.recaptcha = new CustomRecaptcha(this.recaptchaId, this.options);
        
        // Add form validation
        if (this.options.preventSubmit) {
            this.form.addEventListener('submit', (e) => {
                if (!this.recaptcha.isChecked()) {
                    e.preventDefault();
                    if (this.options.showErrorOnSubmit) {
                        this.recaptcha.showError();
                    }
                    return false;
                }
            });
        }
    }
    
    isValid() {
        return this.recaptcha && this.recaptcha.isChecked();
    }
    
    getRecaptcha() {
        return this.recaptcha;
    }
}

// Auto-initialize if data attributes are present
document.addEventListener('DOMContentLoaded', () => {
    const recaptchaElements = document.querySelectorAll('[data-recaptcha]');
    
    recaptchaElements.forEach(element => {
        const options = {
            text: element.dataset.recaptchaText || "I'm not a bot",
            errorMessage: element.dataset.recaptchaError || "Please confirm you're not a bot.",
            loadingTime: parseInt(element.dataset.recaptchaLoading) || 800
        };
        
        new CustomRecaptcha(element.id, options);
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CustomRecaptcha, RecaptchaFormValidator };
}

// Global access
window.CustomRecaptcha = CustomRecaptcha;
window.RecaptchaFormValidator = RecaptchaFormValidator;
