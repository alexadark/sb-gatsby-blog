import React from "react";
import Layout from "~/components/Layout";
import {
  useStoryblokState,
  StoryblokComponent,
  storyblokEditable,
} from "gatsby-source-storyblok";

const Post = ({ pageContext }) => {
  const story = useStoryblokState(pageContext.story);

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        <StoryblokComponent blok={story.content} key={story._uid} />
      </div>
    </Layout>
  );
};

export default Post;
