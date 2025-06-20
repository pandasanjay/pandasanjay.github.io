const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Explicitly define the MarkdownRemark frontmatter schema
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String!
      date: Date @dateformat
      tags: [String]
      description: String
      subtitle: String
      author: String
      readtime: String
      published: Boolean
    }
    type Fields {
      slug: String!
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
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
                projects {
                  title
                }
              }
            }
            posts: allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { frontmatter: { published: { ne: false } } }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    tags
                    published
                  }
                }
              }
            }
            allPosts: allMarkdownRemark {
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
          console.error("GraphQL Errors:", result.errors);
          reject(result.errors)
          return;
        }

        if (!result.data || !result.data.site) {
          const errorMsg = "Site data not found in GraphQL result.";
          console.error(errorMsg, result.data);
          reject(new Error(errorMsg));
          return;
        }

        if (result.data.site.siteMetadata && result.data.site.siteMetadata.jobDetails) {
          Object.keys(result.data.site.siteMetadata.jobDetails).forEach(index => {
            const pagePath = index
            createPage({
              path: pagePath,
              component: path.resolve(`src/templates/ComingSoon.js`),
              context: {
                slug: pagePath,
                header: result.data.site.siteMetadata.jobDetails[index].header,
              },
            })
          })
        } else {
          console.warn("jobDetails not found in siteMetadata.");
        }

        const projects = result.data.site.siteMetadata?.projects || [];
        projects.forEach(project => {
          const slug = project.title.toLowerCase().replace(/\s+/g, '-')
          createPage({
            path: `projects/${slug}`,
            component: path.resolve(`src/templates/project-detail.jsx`),
            context: {
              title: project.title,
            },
          })
        })

        const posts = result.data.posts?.edges || [];
        posts.forEach(({ node }, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
              slug: node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Collect all unique tags from posts
        const tagPosts = result.data.allPosts?.edges || [];
        const allTags = new Set();
        
        tagPosts.forEach(({ node }) => {
          // Ensure tags is treated as an array, even if it's a single string or null/undefined
          const tags = Array.isArray(node.frontmatter.tags) 
            ? node.frontmatter.tags 
            : (node.frontmatter.tags || "").split(",").map(t => t.trim()).filter(Boolean);

          tags.forEach((tag) => {
            if (tag) {
              allTags.add(tag);
            }
          });
        });

        // Create pages for unique tags only
        allTags.forEach((tag) => {
          const tagPath = tag.toLowerCase().replace(/\s+/g, '-'); // Create a URL-friendly path
          createPage({
            path: `tags/${tagPath}`,
            component: path.resolve(`./src/templates/tags-list-post.jsx`),
            context: {
              tag: tag, // Pass the actual tag string
            },
          });
        });
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