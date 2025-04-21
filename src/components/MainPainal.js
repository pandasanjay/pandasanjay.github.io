import React, { lazy } from 'react'
import { graphql, StaticQuery } from "gatsby"
import JobDesc from "../components/JobDesc";
import LazyComponent from "./LazyComponent";

const Testimonials = lazy(() => import("../components/Testimonials"));

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site{
              siteMetadata {
                jobDetails {
                  full_stack_dev {
                    header
                    text
                  }
                  ui_application_development {
                    header
                    text
                  }
                  node_js_development {
                    header
                    text
                  }
                  spa_development {
                    header
                    text
                  }
                }
              }
            }
        }
      `}
      render={data => {
        const jobDetails = data.site.siteMetadata.jobDetails;
        return (
          <div className="w-full max-w-4xl mx-auto p-4">
            <JobDesc className="mb-6" {...jobDetails['full_stack_dev']} path="full_stack_dev" key={1} headerCss="bg-accent text-white text-2xl md:text-3xl lg:text-4xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <JobDesc {...jobDetails['ui_application_development']} path="ui_application_development" key={2} headerCss="bg-blue-500 text-white" />
              <JobDesc {...jobDetails['node_js_development']} path="node_js_development" key={3} headerCss="bg-green-500 text-white" />
              <JobDesc {...jobDetails['spa_development']} path="spa_development" key={4} headerCss="bg-red-500 text-white" />
            </div>
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg mb-10">
              <div className="p-6">
                <LazyComponent>
                  <Testimonials />
                </LazyComponent>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}
