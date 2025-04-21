import React from 'react';
import siteConfig from '../config/siteConfig';

const ConnectSection = ({ data }) => {
  // Helper function to render social icons
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.668 1.566-.668 2.457 0 1.488.76 2.8 1.918 3.569-.706-.022-1.368-.216-1.947-.538v.057c0 2.078 1.479 3.814 3.445 4.21-.36.098-.74.15-1.128.15-.277 0-.545-.027-.808-.077.546 1.698 2.129 2.94 4.01 3.004-1.47 1.146-3.32 1.828-5.33 1.828-.347 0-.688-.02-1.023-.06C3.44 20.29 5.688 21 8.125 21c9.748 0 15.08-8.06 15.08-15.08 0-.23 0-.455-.015-.68.995-.718 1.87-1.62 2.565-2.678z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="connect" className="py-16 md:py-20 lg:py-24 bg-slate-950 fade-in-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{data.title}</h2>
        <p className="text-lg text-slate-300 mb-8">
          {data.description}
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8 text-slate-400">
          {siteConfig.heroSection.socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition duration-150 ease-in-out"
              title={link.name}
            >
              {renderSocialIcon(link.icon)}
            </a>
          ))}
        </div>
        <a href={`mailto:${data.email}`} className="text-accent hover:text-accent-300 font-medium transition-colors duration-200">
          {data.email}
        </a>
      </div>
    </section>
  );
};

export default ConnectSection;