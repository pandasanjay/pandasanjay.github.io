import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

// Check if window is defined (for SSR)
const isBrowser = typeof window !== 'undefined';

// Helper to get the initial theme
const getInitialTheme = () => {
  if (!isBrowser) return 'dark'; // Default for SSR
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  // Check initial class set by gatsby-browser.js or theme-toggle.js
  if (document.documentElement.classList.contains('dark')) return 'dark';
  return 'light'; // Default to light if no preference found
};

// Get the global toggle function if it exists
const globalToggleTheme = isBrowser ? window.toggleTheme : undefined;

export const ThemeContext = createContext({
  theme: 'dark', // Default value
  toggleTheme: () => { console.warn('ThemeProvider not found'); },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasMounted, setHasMounted] = useState(false);

  // Effect to ensure we only run client-side logic after mount
  useEffect(() => {
    setHasMounted(true);
    // Set the initial class on mount based on state, just in case
    // This might be redundant if gatsby-browser runs first, but ensures consistency
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // The function to toggle the theme
  const toggleTheme = useCallback(() => {
    if (!hasMounted) return; // Don't run on server or before mount

    // Determine the new theme
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update React state
    setTheme(newTheme);

    // Call the global function to update <html> class and localStorage
    if (globalToggleTheme) {
      globalToggleTheme(); // Call the function from gatsby-browser.js
    } else {
      // Fallback if global function isn't found (shouldn't happen ideally)
      console.warn('Global toggleTheme not found, attempting manual update.');
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, hasMounted]);

  // Optional: Add an effect to listen for storage changes from other tabs/windows
  useEffect(() => {
    if (!isBrowser || !hasMounted) return;

    const handleStorageChange = (event) => {
      if (event.key === 'theme' && event.newValue && event.newValue !== theme) {
        setTheme(event.newValue);
        // Update class just in case the global script didn't catch it
        if (event.newValue === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, [theme, hasMounted]);

  // Provide the current theme state and the toggle function
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};