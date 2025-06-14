import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // After component mounts, check the actual HTML class
  useEffect(() => {
    setMounted(true);
    
    // Use the actual HTML class to determine theme
    if (typeof document !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }
  }, []);

  // Add observer for HTML class changes
  useEffect(() => {
    if (!mounted) return;
    
    // Function to check HTML class
    const updateDarkModeState = () => {
      if (typeof document !== 'undefined') {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
      }
    };
    
    // Watch for class changes on the HTML element
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            updateDarkModeState();
          }
        });
      });
      
      observer.observe(document.documentElement, { attributes: true });
      return () => observer.disconnect();
    }
  }, [mounted]);

  // Add scroll listener for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use the global toggleTheme function
  const handleThemeToggle = () => {
    if (typeof window !== 'undefined' && typeof window.toggleTheme === 'function') {
      window.toggleTheme();
    }
  };

  return (
    // Header with conditional classes based on scroll position
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#faf9f6]/90 dark:bg-slate-900/90 shadow-sm dark:shadow-slate-800/20 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700/50' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition duration-150 ease-in-out">
              Sanjay K. Panda
            </Link>
          </div>
          
          {/* Desktop navigation - friendlier style */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {/* Rounded nav items with friendly hover effect */}
            <Link to="/#mission" className="text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800/70">My Mission</Link>
            <Link to="/blogs" className="text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800/70">Blog</Link>
            <Link to="/#youtube" className="text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800/70">YouTube</Link>
            <Link to="/#connect" className="text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-800/70">Connect</Link>
            
            {/* Desktop theme toggle button - friendlier style */}
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="ml-2 p-2 rounded-full text-slate-700 dark:text-slate-400 hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition duration-150 ease-in-out"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                data-theme-toggle="true"
                id="theme-toggle-desktop"
              >
                {!isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            )}
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center">
            {/* Mobile theme toggle button - friendlier style */}
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="p-2 mr-2 rounded-full text-slate-700 dark:text-slate-400 hover:text-accent dark:hover:text-accent focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800/70 transition duration-150 ease-in-out"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                data-theme-toggle="true"
                id="theme-toggle-mobile"
              >
                {!isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            )}
            
            {/* Mobile menu button - friendly style */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-slate-400 hover:text-accent dark:hover:text-accent p-2 rounded-full focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800/70 transition duration-150 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#faf9f6] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 rounded-b-xl shadow-lg">
          {/* Mobile links - friendly style */}
          <Link to="/#mission" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent dark:hover:text-accent block px-4 py-2 rounded-xl text-base font-medium transition duration-150 ease-in-out">My Mission</Link>
          <Link to="/blogs" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent dark:hover:text-accent block px-4 py-2 rounded-xl text-base font-medium transition duration-150 ease-in-out">Blog</Link>
          <Link to="/#youtube" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent dark:hover:text-accent block px-4 py-2 rounded-xl text-base font-medium transition duration-150 ease-in-out">YouTube</Link>
          <Link to="/#connect" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent dark:hover:text-accent block px-4 py-2 rounded-xl text-base font-medium transition duration-150 ease-in-out">Connect</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
