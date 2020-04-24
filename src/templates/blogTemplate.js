import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta charset="utf-8" />
        <meta name="description" content={frontmatter.metaDescription} />
        <meta name="keywords" content={frontmatter.keywords} />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:url"
          content={`${frontmatter.httpurl}${frontmatter.path}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.metaDescription} />
        <meta property="og:image" content={frontmatter.thumbnail} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              {/* <div className="post-meta">{frontmatter.date}</div> */}
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <>
              <div
                className="post-thumbnail"
                // style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
              >
                <p align="cetner">
                  <img src={frontmatter.thumbnail} alt={frontmatter.title} />
                </p>
                {/* <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div> */}
              </div>
              <h1 className="post-title">{frontmatter.title}</h1>
            </>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        keywords
        httpurl
      }
    }
  }
`;
