import React from 'react'
import { withPrefix, graphql, StaticQuery } from "gatsby"
import SidePanel from "../components/SidePanel";

const SkillsSideBar = () => {
    
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
            return <SidePanel right grid={{ md: 3, xl: 2 }} className="d-none d-xl-block order-md-12 order-xl-12 border-left border-secondary">
                <h5 className="border-bottom border-dark p-2 font-weight-bold bg-dark text-light shadow">SKILLS</h5>
                <div className="text-center">
                    {Object.values(logos).map((data, index) => {
                        return <img src={withPrefix(data)} key={index} alt={Object.keys(logos)[index]} title={Object.keys(logos)[index]} style={{ width: '75px' }} className="rounded p-2"></img>
                    })}
                </div>
                <h5 className="border-bottom border-dark mt-3 p-2 font-weight-bold bg-dark text-light shadow">WORKED AT</h5>
                <div className="text-center">
                    {Object.values(companyLogs).map((data, index) => {
                        return <img src={withPrefix(data)} key={index} alt={Object.keys(companyLogs)[index]} title={Object.keys(companyLogs)[index]} style={{ width: '75px' }} className="rounded p-2"></img>
                    })}
                </div>
            </SidePanel>
        }}
    />
        
    )
}
export default SkillsSideBar;