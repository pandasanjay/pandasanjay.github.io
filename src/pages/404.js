import React, { useEffect } from 'react';
import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import siteConfig from '../config/siteConfig';

// Import styles
import '../styles/global.scss';
import '../styles/tailwind.css';

const NotFoundPage = () => {
    useEffect(() => {
        // Add dark-bg-pattern class to body to match main site design
        document.body.classList.add('dark-bg-pattern', 'text-slate-300', 'antialiased');
        
        return () => {
            document.body.classList.remove('dark-bg-pattern', 'text-slate-300', 'antialiased');
        };
    }, []);

    return (
        <>
            <SEO title="404: Not Found" keywords={[`Sanjay`, `Developer Advocate`, `react`, `404`]} />
            <Header />
            <main>
                <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[calc(100vh-200px)] flex items-center">
                    {/* Decorative elements matching the main site */}
                    <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                        {/* 404 Error Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-600 dark:from-accent dark:to-blue-400 mb-4">
                                    404
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                    Oops! Page Not Found
                                </h2>
                            </div>
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                The page you're looking for seems to have wandered off into the digital void. 
                                Don't worry, even the best developers encounter 404s!
                            </p>
                            
                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link
                                    to="/"
                                    className="px-8 py-4 bg-accent hover:bg-accent-600 text-white font-medium rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center inline-block"
                                >
                                    🏠 Back to Home
                                </Link>
                                <Link
                                    to="/blogs"
                                    className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center inline-block"
                                >
                                    📚 Browse Blogs
                                </Link>
                            </div>
                            
                            {/* Additional helpful info */}
                            <div className="pt-8 text-sm text-slate-500 dark:text-slate-400">
                                <p>If you think this is a mistake, feel free to <Link to="/#connect" className="text-accent hover:text-accent-400 underline">get in touch</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer data={siteConfig.footer} />
        </>
    );
}

export default NotFoundPage;