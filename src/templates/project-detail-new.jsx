import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import siteConfig from '../config/siteConfig';

// Import styles
import '../styles/global.scss';
import '../styles/tailwind.css';

const ProjectDetail = ({ data, pageContext }) => {
  const project = data.site.siteMetadata.projects.find(p => p.title === pageContext.title);
  
  useEffect(() => {
    // Add dark-bg-pattern class to body to match main site design
    document.body.classList.add('dark-bg-pattern', 'text-slate-300', 'antialiased');
    
    return () => {
      document.body.classList.remove('dark-bg-pattern', 'text-slate-300', 'antialiased');
    };
  }, []);

  // Handle case where project is not found
  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" />
        <Header />
        <main>
          <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Project Not Found
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                The project you're looking for doesn't exist.
              </p>
              <Link 
                to="/works"
                className="px-8 py-4 bg-accent hover:bg-accent-600 text-white font-medium rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center inline-block"
              >
                ← Back to Projects
              </Link>
            </div>
          </section>
        </main>
        <Footer data={siteConfig.footer} />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={project.title} 
        description={project.description}
        keywords={project.tech}
        type="article"
      />
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
          {/* Decorative elements matching the main site */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Back to Projects */}
            <div className="mb-8">
              <Link 
                to="/works"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200 font-medium transition-colors duration-200 group"
              >
                <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">←</span>
                Back to Projects
              </Link>
            </div>

            {/* Project Content */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 md:p-12">
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-accent rounded-full mb-6">
                {project.category}
              </span>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {project.title}
              </h1>
              
              {/* Description */}
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-4 py-2 text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Outcomes</h3>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700 dark:text-slate-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-full hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-full transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer data={siteConfig.footer} />
    </>
  );
};

export default ProjectDetail;

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
