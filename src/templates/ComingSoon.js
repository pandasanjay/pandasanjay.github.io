import React from 'react';
import SEO from '../components/seo'
import Layout from '../components/layout'
import PortfolioSideBar from '../components/PortfolioSideBar'
import SkillsSideBar from '../components/SkillsSideBar'
import { Link } from 'gatsby';

const ComingSoon = ({ pageContext }) => {
    return (
        <Layout>
            <SEO title="Not Found" keywords={[`Sanjay`, `Fullstack developer`, `react`, `node`]} />
            <div className="flex flex-col lg:flex-row">
                <PortfolioSideBar />
                <div className="w-full lg:w-2/3 mx-auto p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{pageContext.header}</h1>
                            <h3 className="text-xl text-slate-700 dark:text-slate-300 mb-6">Coming soon!</h3>
                            <Link to="/" className="text-accent hover:text-accent-600 font-medium inline-flex items-center">
                                Go to Home
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <SkillsSideBar />
            </div>
        </Layout>
    )
}

export default ComingSoon;