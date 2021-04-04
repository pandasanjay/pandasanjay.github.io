import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PortfolioSideBar from "../components/PortfolioSideBar"
import SkillsSideBar from "../components/SkillsSideBar"
import { Link } from "gatsby"

const ComingSoon = ({ pageContext }) => {
  return (
    <Layout>
      <SEO
        title="Not Found"
        keywords={[`Sanjay Panda`, `Fullstack developer`, `react`, `node`]}
      />
      <Row className="flex-xl-nowrap no-gutters">
        <PortfolioSideBar />
        <Col
          sm="9"
          md="9"
          xl="8"
          className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"
        >
          <Card>
            <CardBody>
              <h1> {pageContext.header} </h1>
              <h3>Coming soon!</h3>
              <Link to="/">Go to Home</Link>
            </CardBody>
          </Card>
        </Col>
        <SkillsSideBar />
      </Row>
    </Layout>
  )
}
export default ComingSoon
