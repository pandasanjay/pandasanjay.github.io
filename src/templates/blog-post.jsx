import React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'reactstrap';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';
import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} keywords={post.frontmatter.keywords && post.frontmatter.keywords.split(", ") || []} />
      <Row className="flex-xl-nowrap no-gutters">
        <PortfolioSideBar />
        <Col
          sm="9"
          md="9"
          xl="8"
          className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-4"
        >
          <div>
            <h1>{post.frontmatter.title}</h1>
            {/* eslint-disable-next-line react/no-danger */}
            <div className="blogpost-section" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div>
              {(post.frontmatter.tags || "").split(",").map((data, index) => {
                return <a key={index} href={`/tags/${data.replace(/ /ig, "")}`} ><span className="badge badge-secondary mr-2">{data}</span></a>
              })}
            </div>
          </div>
        </Col>
        <SkillsSideBar />
      </Row>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        tags
      }
    }
  }
`;
