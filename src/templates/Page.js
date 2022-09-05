import React from "react";
import Layout from "~/components/Layout";
import { useStoryblokState } from "gatsby-source-storyblok";

const Page = ({ pageContext }) => {
  const { content } = useStoryblokState(pageContext.story);
  console.log(content);
  return <Layout>Page</Layout>;
};

export default Page;
