const slugify = require('slugify')

const siteName = 'Enterprise Fall 2019: A Wasted Opportunity'
const description =
  'The University of California committed to reaching zero waste 12 years ago. But it will not hit zero waste by the deadline.'
const image =
  'https://assets.dailybruin.com/images/interactive.2019.enterprise/enterprise illo-7a0a9ab90ce71be70b09faaf7f86945e.jpg'
const year = '2019'

const prefixPath = `/${year}/wasted-opportunity`

const url = `https://features.dailybruin.com${prefixPath}/`

module.exports = {
  pathPrefix: prefixPath,
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  pathPrefix: '/2019/wasted-opportunity',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.2019.enterprise',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: '1TJVrlFP0zPViE63jbPGZXGI1aixPwLYS6OdenLml76g',
      },
    },
  ],
}
