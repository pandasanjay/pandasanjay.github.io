import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const MissionSection = ({ data }) => {
  return (
    <section id="mission" className="py-16 md:py-20 lg:py-24 bg-slate-950 fade-in-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8 md:mb-12">{data.title}</h2>
        <div className="prose prose-lg prose-invert max-w-none">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-300 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-center mt-10 text-sm text-slate-500 italic">
            {data.location}
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ data }) => {
  const { theme } = useTheme(); // Get theme context

  return (
    // Apply theme-based background
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 fade-in-section transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apply theme-based title color */}
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8 md:mb-12">{data.title}</h2>
        {/* Apply dark:prose-invert for prose content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {data.paragraphs.map((paragraph, index) => (
            // Apply theme-based paragraph color
            <p key={index} className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {/* Apply theme-based location text color if it exists in data */}
          {data.location && (
            <p className="text-center mt-10 text-sm text-slate-500 dark:text-slate-400 italic">
              {data.location}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;