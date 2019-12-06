import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import Card from '../components/Card/Card'
import Intro from '../components/Intro/Intro'
import Cover from '../components/Cover/Cover'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      PageTitle
      Explainer
      ImageURL
      ImageCreds
      Categories {
        CategoryName
        Cards {
          Title
          ImageURL
          Contributor
          Blurb
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    {console.log(data)}
    <Head {...data.site.siteMetadata} />
    <Cover />
    <Intro />
    <Card />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer
      developers="Henry Trinh, Karl Huang, Jay Park, Matthew Ko, Max Wu"
      copyrightYear={2018}
    />
  </>
)

export default IndexPage
