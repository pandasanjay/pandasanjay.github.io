// Add direct vanilla JS theme toggle functionality
const html = document.querySelector('html');
const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]');

// Function to toggle theme
function toggleTheme() {
  // Check current theme
  const isDark = html.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  
  // Log for debugging
  console.log('Direct toggle: switching from', isDark ? 'dark' : 'light', 'to', newTheme);
  
  // Update localStorage
  localStorage.setItem('theme', newTheme);
  
  // Toggle class
  if (newTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

// Initial theme setup
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  console.log('Theme initialized to:', savedTheme);
}

// Check for buttons after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing direct theme toggle');
  initializeTheme();
  
  // Find and attach click handlers to all theme toggle buttons
  setTimeout(() => {
    const themeButtons = document.querySelectorAll('button[aria-label*="Switch to"]');
    console.log('Found theme buttons:', themeButtons.length);
    
    themeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme button clicked directly');
        toggleTheme();
      });
    });
  }, 1000); // Slight delay to ensure React has rendered the buttons
});

// Export other utilities
export * from "./src/utils/performance"
export { onRouteUpdate, shouldUpdateScroll } from "./src/utils/performance"