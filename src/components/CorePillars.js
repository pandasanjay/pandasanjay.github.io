import React from 'react';

const PillarCard = ({ title, icon, skills, focus }) => (
  <div className="h-full bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
    <div className="p-6 flex flex-col h-full">
      <div className="text-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-3"><span className="font-medium">Focus:</span> {focus}</p>
      <p className="text-slate-600 dark:text-slate-300 mb-0"><span className="font-medium">Skills:</span> {skills}</p>
    </div>
  </div>
);

const CorePillars = () => {
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
    <section id="pillars" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index}>
              <PillarCard {...pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;