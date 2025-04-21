import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';
import SEO from '../components/seo';

const ProjectDetail = ({ data }) => {
  const project = data.site.siteMetadata.projects.find(p => p.title === data.pageContext.title);
  const image = getImage(project.imageFile);

  return (
    <Layout>
      <SEO 
        title={project.title} 
        description={project.description}
        keywords={project.tech}
        type="article"
        image={project.image}
      />
      <div className="flex flex-col lg:flex-row">
        <PortfolioSideBar />
        <div className="w-full lg:w-2/3 mx-auto p-4">
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-accent rounded-full mb-4">
                {project.category}
              </span>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6">{project.title}</h1>
              
              <div className="mb-6 rounded-lg overflow-hidden">
                <GatsbyImage
                  image={image}
                  alt={project.title}
                  className="w-full"
                />
              </div>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">{project.description}</p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Challenges</h3>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 mb-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="mb-2">{challenge}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Solutions</h3>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 mb-6">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="mb-2">{solution}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">Outcomes</h3>
              <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 mb-6">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="mb-2">{outcome}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-8">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <SkillsSideBar />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          description
          category
          tech
          challenges
          solutions
          outcomes
          image
          github
          demo
        }
      }
    }
  }
`;

export default ProjectDetail;