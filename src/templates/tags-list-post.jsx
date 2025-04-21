import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';
import PostLists from "../components/ListPosts";
import SEO from '../components/seo';

const TagsListPost = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title={`Posts tagged with ${pageContext.tag}`} keywords={[`Sanjay Panda`, `Fullstack developer`, `react`, `node`]} />
      <div className="flex flex-col lg:flex-row">
        <PortfolioSideBar />
        <div className="w-full lg:w-2/3 mx-auto p-4">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">Posts tagged with "{pageContext.tag}"</h1>
          <PostLists postLists={postList} />
        </div>
        <SkillsSideBar />
      </div>
    </Layout>
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
            readingTime {
              text
            }
          }
          excerpt
          id
        }
      }
    }
  }
`;
