import React from "react";
import Layout from "~/components/Layout";
import { useStoryblokState } from "gatsby-source-storyblok";

const Post = ({ pageContext }) => {
  const { content } = useStoryblokState(pageContext.story);
  console.log(content);
  return <Layout>Post</Layout>;
};

export default Post;
