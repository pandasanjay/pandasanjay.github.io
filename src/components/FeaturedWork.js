import React from 'react';

const FeaturedWork = ({ data }) => {
  return (
    <section id="work" className="py-16 md:py-20 lg:py-24 bg-slate-950 fade-in-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 md:mb-16">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <div key={index} className="relative bg-slate-900 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-accent/20">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x338/1e293b/64748b?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">{project.category}</span>
                <h3 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-accent transition-colors duration-200">{project.title}</h3>
                <a href={project.link} className="text-accent-300 hover:text-white font-medium text-sm inline-flex items-center mt-2">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;