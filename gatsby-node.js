const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const comingSoonTemplate = path.resolve(`src/templates/ComingSoon.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `{
          site{
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
        console.log(result)
        Object.keys(result.data.site.siteMetadata.jobDetails).forEach((index) => {
          const path = index
          createPage({
            path,
            component: comingSoonTemplate,
            context: {
              path,
              header: result.data.site.siteMetadata.jobDetails[index].header
            },
          })
        })
      })
    )
  })
}

// // Replacing '/' would result in empty string which is invalid
// const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions

//   const oldPage = Object.assign({}, page)
//   // Remove trailing slash unless page is /
//   page.path = replacePath(page.path)
//   if (page.path !== oldPage.path) {
//     // Replace new page with old page
//     deletePage(oldPage)
//     createPage({
//       ...page,
//       context: {
//         house: `Gryffindor`,
//       },
//     })
//   }
// }