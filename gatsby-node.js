const path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const quizTemplate = path.resolve("src/templates/quiz.js");
    resolve(
      graphql(
        `
          {
            allDataJson {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allDataJson.edges.forEach(({ node }) => {
          const path = "quiz/" + node.slug;
          createPage({
            path,
            component: quizTemplate,
            context: {
              slug: node.slug
            }
          })
        })
      })
    )
  })
}
