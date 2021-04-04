import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import { MDXProvider } from "@mdx-js/react"
import Header from "./Header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <Header headerText={data.site.siteMetadata.title} />
          <Container fluid={true} className="p-0">
            <MDXProvider>{children}</MDXProvider>
          </Container>
        </div>
      )
    }}
  />
)

export default Layout
