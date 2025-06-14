import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTheme } from "../context/ThemeContext" // Import useTheme hook
import { calculateReadingTime } from '../utils/readingTime';
import '../styles/blogPost.scss' // Import blog post specific styles
import 'prismjs/themes/prism-okaidia.css'; // Import a PrismJS theme for code blocks

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext; // Get previous/next post data

  // Basic Scroll to Top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={Array.isArray(post.frontmatter.tags) ? post.frontmatter.tags : []} 
        type="article"
      />
      {/* Use dark: prefix for dark mode styles instead of conditional rendering */}
      <div className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16 lg:py-20 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 blogpost-section">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden p-6 md:p-8 lg:p-10 transition-colors duration-200">
            <article className="blog-post">
              <header className="mb-8 md:mb-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-slate-900 dark:text-white">
                  {post.frontmatter.title}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Published on {new Date(post.frontmatter.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} • {calculateReadingTime(post.excerpt)}
                </p>
              </header>
              
              {/* Tailwind Typography with dark variant */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-slate-800 dark:text-slate-300 prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-accent-600 dark:prose-a:text-accent-300"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>

            <hr className="my-8 md:my-12 border-slate-200 dark:border-slate-700" />

            {/* Navigation Links */}
            <nav className="flex flex-col sm:flex-row justify-between text-sm gap-4">
              <div>
                {previous && (
                  <Link 
                    to={previous.fields.slug} 
                    rel="prev" 
                    className="font-medium text-accent-600 dark:text-accent-300 hover:text-accent-700 dark:hover:text-accent-200 group inline-flex items-center transition-colors duration-150"
                  >
                    <span className="mr-1 transition-transform duration-200 group-hover:-translate-x-1">←</span> 
                    {previous.frontmatter.title}
                  </Link>
                )}
              </div>
              <div className="sm:text-right">
                {next && (
                  <Link 
                    to={next.fields.slug} 
                    rel="next" 
                    className="font-medium text-accent-600 dark:text-accent-300 hover:text-accent-700 dark:hover:text-accent-200 group inline-flex items-center transition-colors duration-150"
                  >
                    {next.frontmatter.title} 
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-accent hover:bg-accent-400 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
            style={{ width: '48px', height: '48px' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
