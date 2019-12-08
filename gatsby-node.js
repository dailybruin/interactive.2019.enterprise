const fetch = require('node-fetch').default
const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions

  const articleNames = [
    'shortofgoal.aml',
    'UCcomparison.aml',
    'YRLzerowaste.aml',
    'zerowastehistory.aml',
  ]

  articleNames.forEach(name => {
    return createPage({
      path: name.split('.')[0],
      component: path.resolve(`./src/templates/article.tsx`),
      context: {
        name: name,
      },
    })
  })
}
