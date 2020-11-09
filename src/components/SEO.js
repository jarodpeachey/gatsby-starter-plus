import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import "../styles/_layout.scss";

function SEO({ description, title, bodyClass, image = "/" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const defaultDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const defaultImage = site.siteMetadata.image;

  return (
    <Helmet bodyAttributes={{ class: bodyClass }} title={title || defaultTitle}>
      <meta name="description" content={description || defaultDescription} />
      <meta name="og:title" content={title || defaultTitle} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={`${site.siteMetadata.siteUrl}/${image || defaultImage}`} />
      <meta name="twitter:image" content={`${site.siteMetadata.siteUrl}/${image || defaultImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

      <script src={withPrefix("js/main.js")} type="text/javascript" defer="true" />
    </Helmet>
  );
}

export default SEO;
