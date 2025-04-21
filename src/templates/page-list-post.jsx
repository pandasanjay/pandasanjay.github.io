import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';
import PostLists from "../components/ListPosts"

const PageListPost = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges;
  const pageTitle = pageContext?.pageName || 'POSTS';

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <PortfolioSideBar />
        <div className="w-full lg:w-2/3 mx-auto p-4">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">MY {pageTitle.toUpperCase()}</h1>
          <PostLists postLists={postList} />
        </div>
        <SkillsSideBar />
      </div>
    </Layout>
  );
};

export default PageListPost;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            tags
            readtime
            auther
          }
          fields {
            slug
          }
          headings {
            value
          }
          id
        }
      }
    }
  }
`
