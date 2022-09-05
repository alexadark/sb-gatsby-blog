const path = require("path");
const createPages = require("./create/createPages");
const createPosts = require("./create/createPosts");
//
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
  await createPosts({ actions, graphql });
};
