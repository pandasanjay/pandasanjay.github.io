import React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'reactstrap';
import Layout from '../components/layout';
import PortfolioSideBar from '../components/PortfolioSideBar';
import SkillsSideBar from '../components/SkillsSideBar';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Row className="flex-xl-nowrap no-gutters">
        <PortfolioSideBar />
        <Col
          sm="9"
          md="9"
          xl="8"
          className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"
        >
          <div>
            <h1>{post.frontmatter.title}</h1>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`;
