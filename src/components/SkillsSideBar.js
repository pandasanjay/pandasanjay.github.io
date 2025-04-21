import React from 'react'
import { withPrefix, graphql, StaticQuery } from "gatsby"
import SidePanel from "../components/SidePanel";
import NewsletterSubscribe from "./NewsletterSubscribe";

export default () => {
    return (
        <StaticQuery
        query={graphql`
        query {
            site{
                siteMetadata {
                    logos {
                        react
                        nodejs
                        gitlab
                        jenkins
                        css3
                        git
                        html5
                        javascript
                        docker
                        gatsby
                        sql
                        },
                        companyLogs {
                        lbg
                        wipro
                        navsoft
                        maastrixsolutions
                    }
                }
            }
        }
      `}
        render={data => {
            const logos = data.site.siteMetadata.logos;
            const companyLogs = data.site.siteMetadata.companyLogs;
            return <SidePanel right grid={{ md: 3, xl: 2 }} className="hidden xl:block order-last xl:order-last border-l border-slate-700">
                <h5 className="border-b border-slate-700 p-2 font-bold bg-slate-800 text-white shadow-md">SKILLS</h5>
                <div className="flex flex-wrap justify-center p-2">
                    {Object.values(logos).map((data, index) => {
                        return <img 
                            src={withPrefix(data)} 
                            key={index} 
                            alt={Object.keys(logos)[index]} 
                            title={Object.keys(logos)[index]} 
                            className="w-[75px] h-auto rounded p-2" 
                        />
                    })}
                </div>
                <h5 className="border-b border-slate-700 mt-6 p-2 font-bold bg-slate-800 text-white shadow-md">WORKED AT</h5>
                <div className="flex flex-wrap justify-center p-2">
                    {Object.values(companyLogs).map((data, index) => {
                        return <img 
                            src={withPrefix(data)} 
                            key={index} 
                            alt={Object.keys(companyLogs)[index]} 
                            title={Object.keys(companyLogs)[index]} 
                            className="w-[75px] h-auto rounded p-2" 
                        />
                    })}
                </div>
                <NewsletterSubscribe />
            </SidePanel>
        }}
    />
    )
}
