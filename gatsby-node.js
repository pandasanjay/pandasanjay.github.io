const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
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
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
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
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}