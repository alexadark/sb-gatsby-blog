const path = require(`path`);
pageTemplate = path.resolve(`./src/templates/Page.js`);

const GET_PAGES = `
  query {
    allStoryblokEntry(filter: { field_component: { eq: "page" } }) {
      nodes {
        id
        name
        slug
        field_component
        full_slug
        content
      }
    }
  }
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  //create each page
  const pagesQuery = await graphql(GET_PAGES);
  const pages = pagesQuery.data.allStoryblokEntry.nodes;

  pages.map((page) => {
    createPage({
      path: page.full_slug,
      component: pageTemplate,
      context: {
        story: page,
      },
    });
  });
};
