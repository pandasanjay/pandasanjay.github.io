import React from 'react';
import { Link } from 'gatsby';
import siteConfig from '../config/siteConfig';

const HeroSection = () => {
  // Calculate years of experience dynamically
  const calculateExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - siteConfig.heroSection.careerStartYear;
  };

  // Replace {years} placeholder in description
  const getDescription = () => {
    return siteConfig.heroSection.descriptionBase.replace('{years}', calculateExperience());
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Fun decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side text content */}
          <div className="space-y-6">
            {/* Brand headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {siteConfig.heroSection.headline}
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-600 dark:from-accent dark:to-blue-400">
              I'm Sanjay Panda
            </h2>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="relative inline-block">
                <span className="relative z-10 font-medium text-slate-900 dark:text-white">{siteConfig.heroSection.tagline}</span>
                <span className="absolute bottom-0 left-0 right-0 h-3 bg-accent/10 dark:bg-accent/20 -z-10 transform -rotate-1"></span>
              </span>
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {getDescription()}
            </p>
            
            {/* Call to action buttons with updated focus */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/#connect"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Join the Journey
              </Link>
              <Link
                to="/#blog"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-accent hover:bg-accent/5 dark:hover:bg-slate-700 font-medium rounded-full border-2 border-accent hover:border-accent-dark transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Read My Insights
              </Link>
            </div>
            
            {/* Social links */}
            <div className="pt-6">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Connect with me:</p>
              <div className="flex gap-4">
                {siteConfig.heroSection.socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-accent transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side image with fun styling */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-blue-600 dark:from-accent dark:to-blue-500 opacity-70 blur-lg"></div>
              
              {/* Profile image */}
              <div className="relative bg-white dark:bg-slate-800 p-2 rounded-full shadow-xl">
                <img
                  src={siteConfig.heroSection.profileImage} 
                  alt="Sanjay Panda"
                  className="w-64 h-64 object-cover rounded-full border-4 border-white dark:border-slate-700"
                />
                
                {/* Fun decorative elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 dark:bg-yellow-500 p-2 rounded-full shadow-lg transform rotate-12 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-2 -left-4 bg-green-400 dark:bg-green-500 p-2 rounded-full shadow-lg animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;