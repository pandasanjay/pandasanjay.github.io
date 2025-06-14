// This file contains direct DOM manipulation for theme switching
// It's loaded via script tag in HTML to ensure it works even before React hydration

// Function to set the theme
function setTheme(theme) {
  if (typeof document === 'undefined') return;
  
  const htmlElement = document.documentElement;
  
  if (theme === 'dark') {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
  
  // Store preference
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
  
  console.log('Theme set to:', theme);
}

// Function to toggle the theme
function toggleTheme() {
  if (typeof document === 'undefined') return;
  
  const htmlElement = document.documentElement;
  const isDark = htmlElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  
  setTheme(newTheme);
  return newTheme;
}

// Function to initialize theme based on stored preference or system preference
function initializeTheme() {
  if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
  
  // Check for stored preference
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme) {
    // Use stored preference
    setTheme(storedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

// Initialize theme immediately
initializeTheme();

// Add event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up theme toggle buttons');
  
  // Setup mutation observer to watch for theme toggle buttons being added to the DOM
  const observer = new MutationObserver(function(mutations) {
    const themeButtons = document.querySelectorAll('[data-theme-toggle]');
    
    if (themeButtons.length > 0) {
      console.log('Found theme buttons:', themeButtons.length);
      
      // Add click listeners to all theme toggle buttons
      themeButtons.forEach(function(button) {
        // Only add listener if it doesn't already have one
        if (!button.hasAttribute('data-listener-added')) {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Theme toggle button clicked');
            toggleTheme();
          });
          
          // Mark button as having a listener to avoid duplicates
          button.setAttribute('data-listener-added', 'true');
        }
      });
      
      // Once we've found and set up the buttons, disconnect the observer
      observer.disconnect();
    }
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
});

// Expose theme functions globally for debugging
window.themeUtils = {
  setTheme,
  toggleTheme,
  initializeTheme
};