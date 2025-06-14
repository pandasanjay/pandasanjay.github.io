import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { calculateReadingTime } from '../utils/readingTime';

const BlogsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12 md:py-16 lg:py-20 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Insights on software development, engineering practices, and lessons learned building scalable applications.
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map(({ node }) => (
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
                              className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm rounded-full font-medium"
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
                No blog posts found. Check back soon for new content!
              </p>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center text-accent-600 hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200 font-medium transition-colors duration-200 group"
            >
              <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;

// Head export for SEO
export const Head = () => (
  <>
    <title>Blog | Portfolio</title>
    <meta name="description" content="Insights on software development, engineering practices, and lessons learned building scalable applications." />
    <meta name="keywords" content="blog, software development, engineering, web development, programming" />
    <meta property="og:title" content="Blog" />
    <meta property="og:description" content="Insights on software development, engineering practices, and lessons learned building scalable applications." />
    <meta property="og:type" content="website" />
  </>
);

// GraphQL query to fetch all blog posts
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/pages/blogs/" }
        frontmatter: { published: { ne: false } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date
            title
            tags
          }
        }
      }
    }
  }
`;
