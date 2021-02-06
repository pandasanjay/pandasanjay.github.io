import React from "react"
import { Col } from "reactstrap"
import SkillHighLights from "./SkillHighLights"
import { graphql } from "gatsby"
const MainPanelV2 = ({ data }) => {
  return (
    <Col
      sm="9"
      md="9"
      xl="8"
      className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"
    >
      <SkillHighLights
        skills={[
          "Articulating requirement and build solution",
          "Agile developer mindset",
          "Empower team to understand and build better product",
          "Fullstack mindset",
        ]}
      />
    </Col>
  )
}

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            date
          }
          html
        }
      }
    }
  }
`
export default MainPanelV2
