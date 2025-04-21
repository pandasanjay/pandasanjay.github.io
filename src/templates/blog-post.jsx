import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/blogPost.scss' // Import blog post specific styles
import 'prismjs/themes/prism-okaidia.css'; // Import a PrismJS theme for code blocks

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext; // Get previous/next post data

  // Basic Scroll to Top functionality (can be enhanced)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt} // Use excerpt for description
        // Use the tags array directly if it exists, otherwise use an empty array
        keywords={Array.isArray(post.frontmatter.tags) ? post.frontmatter.tags : []} 
        type="article" // Set OG type to article
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 blogpost-section"> {/* Centered content, increased max-width, added padding */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg overflow-hidden p-6 md:p-8 lg:p-10"> {/* Adjusted padding */}
          <article className="blog-post">
            <header className="mb-8 md:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">{post.frontmatter.title}</h1> {/* Adjusted heading size and color */}
              <p className="text-sm text-slate-400">
                Published on {new Date(post.frontmatter.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} • {post.fields.readingTime.text}
              </p> {/* Formatted date */}
            </header>
            <div
              className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-a:text-accent prose-strong:text-white prose-blockquote:border-accent prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700" /* Enhanced prose styles */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <hr className="my-8 md:my-12 border-slate-700" /> {/* Adjusted margin and color */}

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row justify-between text-sm gap-4">
            <div>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="text-accent hover:text-accent-300 group inline-flex items-center">
                  <span className="mr-1 transition-transform duration-200 group-hover:-translate-x-1">←</span> 
                  {previous.frontmatter.title}
                </Link>
              )}
            </div>
            <div className="sm:text-right">
              {next && (
                <Link to={next.fields.slug} rel="next" className="text-accent hover:text-accent-300 group inline-flex items-center">
                  {next.frontmatter.title} 
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              )}
            </div>
          </nav>

        </div>
        {/* Scroll to Top Button - Moved outside the main content card */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-accent hover:bg-accent-300 text-slate-900 font-bold p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
          style={{ width: '48px', height: '48px' }} // Explicit size
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
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
        slug # Ensure slug is queried
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date # Keep date for formatting
        tags
      }
    }
  }
`
