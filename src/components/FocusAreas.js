import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

// Helper function to render SVG icons
const renderIcon = (iconName) => {
  // Icon mapping logic here
  switch (iconName) {
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'api':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    default:
      return null;
  }
};

const FocusAreas = ({ data }) => {
  const { theme } = useTheme(); // Get theme context

  return (
    // Section background - improved for light mode with white background
    <section id="pillars" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 fade-in-section transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title color */}
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 md:mb-16">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {data.pillars.map((pillar, index) => (
            // Card background and border - improved shadows for light mode
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-accent/10 hover:scale-[1.03]">
              {/* Icon background/ring - improved icon contrast for light mode */}
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/5 dark:bg-accent/20 text-accent mb-4 mx-auto ring-2 ring-accent/10 dark:ring-accent/30">
                {renderIcon(pillar.icon)}
              </div>
              {/* Title color */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">{pillar.title}</h3>
              {/* Description color - improved text contrast for light mode */}
              <p className="text-slate-700 dark:text-slate-400 text-center text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;