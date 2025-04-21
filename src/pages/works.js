import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/seo';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
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
    <Layout>
      <SEO 
        title="My Work" 
        description="Portfolio of projects and case studies in full-stack development, data engineering, and cloud architecture"
        keywords={['portfolio', 'projects', 'case studies', 'data pipeline', 'full stack']}
      />
      <div className="flex flex-col lg:flex-row">
        <PortfolioSideBar />
        <div className="w-full lg:w-2/3 mx-auto p-4">
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Work</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Explore my projects and case studies in full-stack development, data engineering, and cloud architecture.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'all' 
                      ? 'bg-accent text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  All Projects
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'data engineering' 
                      ? 'bg-accent text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                  onClick={() => setFilter('data engineering')}
                >
                  Data Engineering
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === 'full stack' 
                      ? 'bg-accent text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                  onClick={() => setFilter('full stack')}
                >
                  Full Stack
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard 
                  project={project} 
                  slug={createSlug(project.title)}
                />
              </div>
            ))}
          </div>
        </div>
        <SkillsSideBar />
      </div>
    </Layout>
  );
};

export default ProjectsPage;