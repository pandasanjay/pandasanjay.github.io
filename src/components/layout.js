import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container } from 'reactstrap';
import Header from './Header'

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
        render={data => (
            <div>
                <Header headerText="About Gatsby" />
                <Container fluid={true} className="p-0">
                    {children}
                </Container>
            </div>
        )}
    />
)

export default Layout;