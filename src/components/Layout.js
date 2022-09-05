import React from "react";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Header from "./Header";
import Footer from "./Footer";
import { SinglePost } from "~/components/post";

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    "single-post": SinglePost,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
