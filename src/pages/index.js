import React, { useEffect } from 'react';
import { graphql } from 'gatsby'; // Import graphql
import siteConfig from '../config/siteConfig';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
// Focus Areas and Featured Work imports removed but components kept
import BlogSection from '../components/BlogSection';
import YouTubeSection from '../components/youtube/YouTubeSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';
import { initFadeInSections } from '../utils/animations';

// Import styles
import '../styles/global.scss';
import '../styles/tailwind.css';

// Destructure data from props (including GraphQL result)
const IndexPage = ({ data }) => {
  useEffect(() => {
    // Initialize fade-in animations
    const cleanup = initFadeInSections();
    
    // Add dark-bg-pattern class to body
    document.body.classList.add('dark-bg-pattern', 'text-slate-300', 'antialiased');
    
    return () => {
      cleanup();
      document.body.classList.remove('dark-bg-pattern', 'text-slate-300', 'antialiased');
    };
  }, []);

  // Extract blog posts from GraphQL data
  const latestPosts = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO title="Sanjay | Developer Advocate" 
           keywords={[`Sanjay`, `Developer Advocate`, `AI Enthusiast`, `Content Creator`]} />
      <Header />
      <main>
        <HeroSection data={siteConfig.heroSection} />
        <MissionSection data={siteConfig.missionSection} />
        {/* Reordered to show YouTube section before Blog section */}
        <YouTubeSection />
        <BlogSection posts={latestPosts} title={siteConfig.blogSection.title} ctaText={siteConfig.blogSection.ctaText} ctaLink={siteConfig.blogSection.ctaLink} />
        <ConnectSection data={siteConfig.connectSection} />
      </main>
      <Footer data={siteConfig.footer} />
    </>
  );
};

export default IndexPage;

// Export Head function for Gatsby 5's built-in head support
export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script src="/theme-toggle.js" type="text/javascript" />
  </>
);

// Add GraphQL query to fetch latest 3 blog posts
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/pages/blogs/" }
        frontmatter: { published: { ne: false } } # Add filter to exclude published: false
      }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
