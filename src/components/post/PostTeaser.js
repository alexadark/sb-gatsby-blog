import React from "react";
import { useStoryblokState } from "gatsby-source-storyblok";
import { render } from "storyblok-rich-text-react-renderer";
import { Link } from "gatsby";

export const PostTeaser = ({ post }) => {
  const story = useStoryblokState(post);
  console.log(story);

  return (
    <div>
      <h2 className="my-3 text-xl font-bold">
        <Link to={`/${post.full_slug}`}>{post.name}</Link>
      </h2>

      <div>{story.content.excerpt}</div>
    </div>
  );
};
