/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

function SEO({ description = '', lang = 'en', meta = [], keywords = [], title, image, type = 'website' }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": site.siteMetadata.author,
    "url": site.siteMetadata.siteUrl,
    "sameAs": [
      site.siteMetadata.social.linkedin,
      site.siteMetadata.social.github,
    ],
    "jobTitle": "Full Stack Developer",
    "image": metaImage,
  }

  return (
    <>
      <title>{title} | {site.siteMetadata.title}</title>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter || site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {meta.map((metaItem, index) => (
        <meta key={index} {...metaItem} />
      ))}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${withPrefix('/')}`} />
    </>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.string,
}

export default SEO
