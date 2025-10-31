// Contact page redirect logic
document.addEventListener('DOMContentLoaded', function() {
    // Check if terms have been accepted
    const termsAccepted = localStorage.getItem('termsAccepted');
    const termsAcceptedDate = localStorage.getItem('termsAcceptedDate');
    
    // Check if terms were accepted recently (within 24 hours)
    const isRecentlyAccepted = termsAcceptedDate && 
        (new Date() - new Date(termsAcceptedDate)) < (24 * 60 * 60 * 1000);
    
    // If terms haven't been accepted or were accepted more than 24 hours ago
    if (!termsAccepted || !isRecentlyAccepted) {
        // Redirect to terms and conditions
        window.location.href = 'terms-and-conditions.html?redirect=contact';
    }
    
    // If we reach here, terms have been accepted and user can access contact page
    console.log('Terms accepted, contact page accessible');
});
