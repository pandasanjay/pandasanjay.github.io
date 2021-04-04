const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const comingSoonTemplate = path.resolve(`src/templates/ComingSoon.jsx`)
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
                  frontmatter {
                    tags
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
        //Comming soon page for otheres
        createPage({
          path: "works",
          component: comingSoonTemplate,
          context: {
            slug: "works",
            header: "MY WORKS",
          },
        })
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
              slug: node.fields.slug,
            },
          })
          const pageName = node.fields.slug.split("/")[1]
          createPage({
            path: pageName,
            component: path.resolve(`./src/templates/page-list-post.jsx`),
            context: {
              pageName,
              regex: `/${pageName}\//gi`,
            },
          })

        })
        //Tages pages
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          (node.frontmatter.tags || "").split(",").forEach((tag) => {
            const tagFinal = tag.trim().replace(/ /ig, "")
            createPage({
              path: `tags/${tagFinal}`,
              component: path.resolve(`./src/templates/tags-list-post.jsx`),
              context: {
                tag,
                regex: `/${tag}/gi`,
              },
            })
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