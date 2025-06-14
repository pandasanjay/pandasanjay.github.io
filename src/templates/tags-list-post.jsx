import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import { calculateReadingTime } from '../utils/readingTime';
import siteConfig from '../config/siteConfig';

// Import styles
import '../styles/global.scss';
import '../styles/tailwind.css';

const TagsListPost = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;

  useEffect(() => {
    // Add dark-bg-pattern class to body to match main site design
    document.body.classList.add('dark-bg-pattern', 'text-slate-300', 'antialiased');
    
    return () => {
      document.body.classList.remove('dark-bg-pattern', 'text-slate-300', 'antialiased');
    };
  }, []);

  return (
    <>
      <SEO title={`Posts tagged with ${pageContext.tag}`} keywords={[`Sanjay`, `Developer Advocate`, `react`, `${pageContext.tag}`]} />
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
          {/* Decorative elements matching the main site */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Posts tagged with "{pageContext.tag}"
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {postList.length} {postList.length === 1 ? 'post' : 'posts'} found
              </p>
            </div>

            {/* Blog Posts */}
            {postList.length > 0 ? (
              <div className="space-y-8">
                {postList.map(({ node }) => (
                  <article 
                    key={node.id} 
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 p-6 md:p-8 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        {/* Date and Reading Time */}
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <time dateTime={node.frontmatter.date}>
                            {new Date(node.frontmatter.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <span className="mx-2">•</span>
                          <span>{calculateReadingTime(node.excerpt)}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors duration-200">
                          <Link to={node.fields.slug} className="hover:text-accent-600 dark:hover:text-accent-300">
                            {node.frontmatter.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                          {node.excerpt}
                        </p>

                        {/* Tags */}
                        {node.frontmatter.tags && node.frontmatter.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {node.frontmatter.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className={`px-3 py-1 text-sm rounded-full font-medium ${
                                  tag === pageContext.tag 
                                    ? 'bg-accent text-white' 
                                    : 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Read More Link */}
                        <Link 
                          to={node.fields.slug}
                          className="inline-flex items-center text-accent-600 hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200 font-medium transition-colors duration-200 group"
                        >
                          Read full article
                          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  No posts found with the tag "{pageContext.tag}".
                </p>
              </div>
            )}

            {/* Back to Blogs */}
            <div className="text-center mt-12">
              <Link 
                to="/blogs"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200 font-medium transition-colors duration-200 group"
              >
                <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">←</span>
                Back to All Posts
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer data={siteConfig.footer} />
    </>
  );
};

export default TagsListPost;

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            tags
            readtime
            subtitle
            auther
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
    }
  }
`;
