const path = require(`path`);
pageTemplate = path.resolve(`./src/templates/Page.js`);

const GET_PAGES = `
  query {
    allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
    edges {
      node {
        content
        id
        name
        full_slug
        field_component
        slug
      }
    }
    }
  }
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  //create each page
  const pagesQuery = await graphql(GET_PAGES);
  const pages = pagesQuery.data.allStoryblokEntry.edges;

  pages.map((page) => {
    createPage({
      path: page.node.full_slug,
      component: pageTemplate,
      context: {
        story: page.node,
      },
    });
  });
};
