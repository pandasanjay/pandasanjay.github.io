import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const PillarCard = ({ title, icon, skills, focus }) => (
  // Card background and border - improved light mode contrast and shadows
  <div className="h-full bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md dark:shadow-slate-700/50 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-col h-full">
      {/* Icon */}
      <div className="text-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto filter dark:invert dark:brightness-0 dark:contrast-200" /> {/* Adjust icon for dark mode */}
      </div>
      {/* Title color */}
      <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">{title}</h3>
      {/* Text color - improved light mode text colors */}
      <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm"><span className="font-medium text-slate-800 dark:text-slate-200">Focus:</span> {focus}</p>
      <p className="text-slate-700 dark:text-slate-300 mb-0 text-sm"><span className="font-medium text-slate-800 dark:text-slate-200">Skills:</span> {skills}</p>
    </div>
  </div>
);

const CorePillars = () => {
  const { theme } = useTheme(); // Get theme context
  const pillars = [
    {
      title: 'Software Engineering',
      icon: '/code.svg',
      focus: 'Building robust, maintainable, and efficient software',
      skills: 'Full-Stack Development, Data Engineering, Backend Systems, Testing, Performance'
    },
    {
      title: 'Solution Architecture',
      icon: '/architecture.svg',
      focus: 'Designing scalable, resilient, and effective technical solutions',
      skills: 'System Design, Cloud Architecture (GCP), API Strategy, Microservices, Technical Leadership'
    },
    {
      title: 'Developer Advocacy',
      icon: '/community.svg',
      focus: 'Empowering developers and building community',
      skills: 'Technical Communication, Community Engagement, Presentations & Workshops, Documentation Strategy'
    },
    {
      title: 'Content Creation',
      icon: '/content.svg',
      focus: 'Creating clear, engaging, and valuable technical content',
      skills: 'Technical Writing, Video Production, Documentation, Course Creation, Public Speaking'
    }
  ];

  return (
    // Section background - improved light mode background
    <section id="pillars" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 fade-in-section transition-colors duration-200">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Title color */}
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 md:mb-16">My Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;