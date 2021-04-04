import React from "react"
import { Col, CardDeck, Card, CardBody } from "reactstrap"
import { graphql, StaticQuery } from "gatsby"
import JobDesc from "../components/JobDesc"

const MainPainal = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              jobDetails {
                full_stack_dev {
                  header
                  text
                }
                ui_application_development {
                  header
                  text
                }
                node_js_development {
                  header
                  text
                }
                spa_development {
                  header
                  text
                }
              }
            }
          }
        }
      `}
      render={data => {
        const jobDetails = data.site.siteMetadata.jobDetails
        return (
          <Col
            sm="9"
            md="9"
            xl="8"
            className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"
          >
            {/* <Card className="text-dark mb-3 shadow border-dark rounded-0">
                <CardBody>
                    <h2> Now open for ...</h2>
                    <h5><b>Open source community contribution!</b></h5>
                    <p>I am new to open source contribution community. I want to be part of <b>OpenSource projects</b> from <b>scratch</b>. If you have an <b>problem to solving</b> and looking for a <b>contributor</b>, Please let me know. </p>
                    <a className="btn btn-outline-warning" href="mailto:contact@sanjaypanda.com">Contact me</a>
                </CardBody>
            </Card> */}
            <JobDesc
              className="mb-3"
              {...jobDetails["full_stack_dev"]}
              path="full_stack_dev"
              key={1}
              headerCss="bg-card-yellow text-light display-4"
            />
            <CardDeck>
              <JobDesc
                {...jobDetails["ui_application_development"]}
                path="ui_application_development"
                key={2}
                headerCss="bg-card-blue text-light"
              />
              <JobDesc
                {...jobDetails["node_js_development"]}
                path="node_js_development"
                key={3}
                headerCss="bg-card-green text-light"
              />
              <JobDesc
                {...jobDetails["spa_development"]}
                path="spa_development"
                key={4}
                headerCss="bg-card-red text-light"
              />
            </CardDeck>
          </Col>
        )
      }}
    />
  )
}
export default MainPainal
