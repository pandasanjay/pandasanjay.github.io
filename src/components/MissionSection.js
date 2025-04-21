import React from 'react';

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

export default MissionSection;