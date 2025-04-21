import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from './Header'
import { ThemeProvider } from '../context/ThemeContext'
import SkipLink from './SkipLink'

export default ({ children }) => (
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
            <ThemeProvider>
                <div className="min-h-screen bg-slate-900">
                    <SkipLink />
                    <Header headerText="About Gatsby" />
                    <div className="w-full mx-auto">
                        <main id="main-content" tabIndex="-1">
                            {children}
                        </main>
                    </div>
                </div>
            </ThemeProvider>
        )}
    />
)