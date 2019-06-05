const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const comingSoonTemplate = path.resolve(`src/templates/ComingSoon.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            site {
              siteMetadata {
                jobDetails {
                  full_stack_dev {
                    header
                  }
                  ui_application_development {
                    header
                  }
                  node_js_development {
                    header
                  }
                  spa_development {
                    header
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        Object.keys(result.data.site.siteMetadata.jobDetails).forEach(index => {
          const path = index
          createPage({
            path,
            component: comingSoonTemplate,
            context: {
              slug: path,
              header: result.data.site.siteMetadata.jobDetails[index].header,
            },
          })
        })
      })
    )
  })
}
