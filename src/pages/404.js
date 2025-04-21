import React from 'react';
import SEO from '../components/seo'
import Layout from '../components/layout'
import PortfolioSideBar from '../components/PortfolioSideBar'
import SkillsSideBar from '../components/SkillsSideBar'
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not Found" keywords={[`Sanjay Panda`, `Fullstack developer`, `react`, `node`, `404`]} />
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-var(--header-height))] "> {/* Ensure full height */}
                <PortfolioSideBar />
                <div className="w-full lg:w-2/3 mx-auto p-4 flex items-center justify-center"> {/* Center content */}
                    <div className="bg-slate-800/50 border border-slate-700 shadow-lg rounded-lg overflow-hidden text-center p-8 md:p-12"> {/* Centered text, more padding */}
                        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
                        <h2 className="text-2xl font-semibold text-white mb-6">Oops! Page Not Found</h2>
                        <p className="text-slate-400 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
                        <Link 
                            to="/"
                            className="inline-block bg-accent text-slate-900 font-medium py-2.5 px-6 rounded-md hover:bg-accent-300 transition duration-150 ease-in-out hover:scale-105 transform"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
                <SkillsSideBar />
            </div>
        </Layout>
    )
}

export default NotFoundPage;