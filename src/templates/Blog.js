import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "~/components/Layout";
import { PostTeaser } from "~/components/post";

const Blog = ({ pageContext, data }) => {
  const posts = data.allStoryblokEntry.nodes;
  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map((post) => {
        return <PostTeaser post={post} key={post.id} />;
      })}
    </Layout>
  );
};

export default Blog;
export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStoryblokEntry(
      filter: { field_component: { eq: "single-post" } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        full_slug
        field_component
        name
        content
      }
    }
  }
`;
