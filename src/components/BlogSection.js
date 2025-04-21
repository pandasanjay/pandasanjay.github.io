import React from 'react';
import { Link } from 'gatsby'; // Import Link for internal navigation

// Update props to receive posts, title, ctaText, ctaLink
const BlogSection = ({ posts, title, ctaText, ctaLink }) => {
  return (
    <section id="blog" className="py-16 md:py-20 lg:py-24 bg-slate-900 fade-in-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 md:mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over the fetched posts */}
          {posts.map(({ node }) => (
            <div key={node.id} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-accent/50 transition-colors duration-300 group flex flex-col">
              <span className="text-xs text-slate-400 uppercase">{node.frontmatter.date} • {node.fields.readingTime.text}</span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-accent transition-colors duration-200 flex-grow">
                {/* Link the title to the blog post page */}
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p className="text-slate-400 text-sm mb-4">{node.excerpt}</p>
              {/* Link the "Read More" to the blog post page */}
              <Link to={node.fields.slug} className="text-accent hover:text-accent-300 font-medium text-sm inline-flex items-center self-start">
                Read More 
                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          {/* Use ctaLink and ctaText props */}
          <Link to={ctaLink} className="inline-block bg-accent text-slate-900 font-medium py-2.5 px-6 rounded-md hover:bg-accent-300 transition duration-150 ease-in-out hover:scale-105 transform">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;