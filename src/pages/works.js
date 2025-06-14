import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/seo';
import siteConfig from '../config/siteConfig';

// Import styles
import '../styles/global.scss';
import '../styles/tailwind.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // Add dark-bg-pattern class to body to match main site design
    document.body.classList.add('dark-bg-pattern', 'text-slate-300', 'antialiased');
    
    return () => {
      document.body.classList.remove('dark-bg-pattern', 'text-slate-300', 'antialiased');
    };
  }, []);
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            title
            description
            category
            tech
            image
            github
            demo
          }
        }
      }
    }
  `);

  const projects = data.site.siteMetadata.projects;
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <SEO 
        title="My Work" 
        description="Portfolio of projects and case studies in full-stack development, data engineering, and cloud architecture"
        keywords={['portfolio', 'projects', 'case studies', 'data pipeline', 'full stack']}
      />
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
          {/* Decorative elements matching the main site */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                My Work
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Explore my projects and case studies in full-stack development, data engineering, and cloud architecture.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === 'all' 
                    ? 'bg-accent text-white shadow-lg transform hover:-translate-y-1' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => setFilter('all')}
              >
                All Projects ({projects.length})
              </button>
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === 'data engineering' 
                    ? 'bg-accent text-white shadow-lg transform hover:-translate-y-1' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => setFilter('data engineering')}
              >
                Data Engineering ({projects.filter(p => p.category.toLowerCase() === 'data engineering').length})
              </button>
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === 'full stack' 
                    ? 'bg-accent text-white shadow-lg transform hover:-translate-y-1' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => setFilter('full stack')}
              >
                Full Stack ({projects.filter(p => p.category.toLowerCase() === 'full stack').length})
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  project={project} 
                  slug={createSlug(project.title)}
                />
              ))}
            </div>

            {/* No projects message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  No projects found in the "{filter}" category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer data={siteConfig.footer} />
    </>
  );
};

export default ProjectsPage;