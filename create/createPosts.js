const path = require(`path`);
const { paginate } = require(`gatsby-awesome-pagination`);
const postTemplate = path.resolve(`./src/templates/Post.js`);
const BlogTemplate = path.resolve(`./src/templates/Blog.js`);
const GET_POSTS = `
  query {
    allStoryblokEntry(filter: {field_component: {eq: "single-post"}}) {
    edges {
      node {
        content
        id
        name
        full_slug
        field_component
        slug
      }
      next {
        full_slug
      }
      previous {
        full_slug
      }
    }
    }
  }
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  //create each post
  const postsQuery = await graphql(GET_POSTS);
  const posts = postsQuery.data.allStoryblokEntry.edges;

  posts.map((post) => {
    createPage({
      path: post.node.full_slug,
      component: postTemplate,
      context: {
        story: post.node,
        next: post.next,
        previous: post.previous,
      },
    });
  });

  //create blog page
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 2,
    pathPrefix: "/blog",
    component: BlogTemplate,
  });
};
