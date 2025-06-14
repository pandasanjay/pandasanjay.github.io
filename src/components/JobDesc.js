import React from "react";
import { Link } from "gatsby";

export default ({ className, headerCss, header, text, path }) => {
    return (
        <div className={`rounded-lg shadow-lg overflow-hidden ${className || ''}`}>
            <h3 className={`p-4 md:p-5 text-center ${headerCss || ''}`}>{header}</h3>
            <div className="p-4 md:p-6 bg-white dark:bg-slate-800">
                <div className="text-slate-700 dark:text-slate-300 mb-4" dangerouslySetInnerHTML={{__html: text}} />
                <Link to={path} className="text-accent hover:text-accent-600 font-medium inline-flex items-center">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}