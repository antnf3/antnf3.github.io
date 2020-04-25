import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : (
          <meta
            name="w3l-domain-verification"
            content={site.siteMetadata.w3l_dom_key}
          />
        )}

        <meta name="keywords" content="쇼핑,쿠팡,상품,제품" />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content="https://antnf3.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="지니 쇼핑" />
        <meta
          property="og:description"
          content={site.siteMetadata.description}
        />
      </Helmet>
      <HeroHeader />
      <p align="center">
        <iframe
          src="https://coupa.ng/bnfAsR"
          width="100%"
          height="75"
          frameborder="0"
          scrolling="no"
          title="coupangSearch"
        ></iframe>
      </p>
      <h2>상품 리스트 &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
