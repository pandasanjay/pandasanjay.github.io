import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../context/ThemeContext'; // Import useTheme
import { calculateReadingTime } from '../utils/readingTime';

const BlogSection = ({ posts, title, ctaText, ctaLink }) => {
  const { theme } = useTheme(); // Get theme context

  return (
    // Section background - use white for light mode
    <section id="blog" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 fade-in-section transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title color */}
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12 md:mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ node }) => (
            // Card background and border - improved light mode shadows
            <div key={node.id} className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-accent/50 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 group flex flex-col">
              {/* Date/Reading time color */}
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase">{node.frontmatter.date} • {calculateReadingTime(node.excerpt)}</span>
              {/* Post title color and hover */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3 group-hover:text-accent transition-colors duration-200 flex-grow">
                <Link to={node.fields.slug} className="hover:text-accent dark:hover:text-accent">
                  {node.frontmatter.title}
                </Link>
              </h3>
              {/* Excerpt color - improved light mode text color */}
              <p className="text-slate-700 dark:text-slate-400 text-sm mb-4">{node.excerpt}</p>
              {/* Read More link color - improved light mode link color */}
              <Link to={node.fields.slug} className="text-accent-600 hover:text-accent-700 dark:text-accent dark:hover:text-accent-300 font-medium text-sm inline-flex items-center self-start">
                Read More 
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          {/* CTA Button styles - improved light mode appearance */}
          <Link to={ctaLink} className="inline-block bg-accent hover:bg-accent-600 text-white dark:text-slate-900 font-medium py-2.5 px-6 rounded-md dark:hover:bg-accent-300 transition duration-150 ease-in-out hover:scale-105 transform shadow-sm hover:shadow-md">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;