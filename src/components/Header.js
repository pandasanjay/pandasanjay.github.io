import React, { useState } from 'react';
import { Link } from 'gatsby'; // Import Gatsby Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/#hero" className="text-xl font-bold text-white hover:text-accent transition duration-150 ease-in-out">Sanjay K. Panda</Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/#mission" className="text-slate-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">My Mission</Link>
            <Link to="/#pillars" className="text-slate-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Focus Areas</Link>
            <Link to="/#work" className="text-slate-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Featured Work</Link>
            <Link to="/#blog" className="text-slate-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Blog/Insights</Link>
            <Link to="/#connect" className="text-slate-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Connect</Link>
          </div>
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-slate-800 border-t border-slate-700`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/#mission" className="text-slate-300 hover:bg-slate-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out" onClick={toggleMenu}>My Mission</Link>
          <Link to="/#pillars" className="text-slate-300 hover:bg-slate-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out" onClick={toggleMenu}>Focus Areas</Link>
          <Link to="/#work" className="text-slate-300 hover:bg-slate-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out" onClick={toggleMenu}>Featured Work</Link>
          <Link to="/#blog" className="text-slate-300 hover:bg-slate-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out" onClick={toggleMenu}>Blog/Insights</Link>
          <Link to="/#connect" className="text-slate-300 hover:bg-slate-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out" onClick={toggleMenu}>Connect</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;