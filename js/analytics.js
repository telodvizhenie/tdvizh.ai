// Google Analytics Initialization
// Externalized from index.html to comply with CSP requirements

// Initialize dataLayer if not already present
window.dataLayer = window.dataLayer || [];

// Define gtag function
function gtag() {
  window.dataLayer.push(arguments);
}

// Set default values and send pageview
gtag('js', new Date());
gtag('config', 'G-JR1PCBRWXG');
