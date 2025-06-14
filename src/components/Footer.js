import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const Footer = ({ data }) => {
  const { theme } = useTheme(); // Get theme context

  return (
    // Footer background and border - improved light mode styling
    <footer className="bg-white dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Text color - improved for light mode */}
        <div className="text-slate-700 dark:text-slate-400 text-sm mb-4 md:mb-0">
          {data.copyright}
        </div>
        {/* Text color - improved for light mode */}
        <div className="text-slate-700 dark:text-slate-400 text-sm">
          {data.tagline}
        </div>
      </div>
    </footer>
  );
};

export default Footer;