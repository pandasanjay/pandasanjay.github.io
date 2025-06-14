import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from './Header'
import { ThemeProvider } from '../context/ThemeContext' // Correct path
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
                {/* The div below will have its background controlled by global styles based on dark class on html */}
                <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 transition-colors duration-200">
                    <SkipLink />
                    {/* Pass site title if needed, or remove if Header doesn't use it */}
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className="w-full mx-auto">
                        <main id="main-content" tabIndex="-1">
                            {children}
                        </main>
                    </div>
                    {/* Consider adding a Footer component here */}
                </div>
            </ThemeProvider>
        )}
    />
)