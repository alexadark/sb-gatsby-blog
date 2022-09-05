require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

module.exports = {
  siteMetadata: {
    title: `storyblok-presentation`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
