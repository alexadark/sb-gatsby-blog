import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";
import { render } from "storyblok-rich-text-react-renderer";

export const SinglePost = ({ blok }) => {
  const { title, body, _uid, image } = blok;
  return (
    <article key={_uid} {...storyblokEditable(blok)}>
      <h1>{title}</h1>
      <img src={image.filename} alt="" />
      <div>{render(body)}</div>
    </article>
  );
};
