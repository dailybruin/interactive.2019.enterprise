import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import { Article, Footer, Image, PullQuote, Video } from '@dailybruin/lux'
import Heading from '../components/Heading'

export const query = graphql`
  query($name: String) {
    kerckhoffArticle(title: { eq: $name }) {
      Headline
      ImageURL
      content {
        type
        value
      }
    }
  }
`

const ArticlePage = ({ data }) => (
  <>
    {/* <Head {...data.site.siteMetadata} /> */}
    {console.log(data)}
    <Article
      dropcap={true}
      content={data.kerckhoffArticle.content}
      style={css`
        max-width: 60%;
        font-family: 'Arial';
        line-height: 38px;
        font-size: 1.25rem;
        min-width: 300px;
        figcaption {
          font-style: italic;
          font-size: 1.15rem;
        }
        @media only screen and (max-width: 800px) {
          max-width: 80%;
        }
      `}
      customTypeComponentMapping={{
        heading: Heading,
        image: Image,
        pullquote: PullQuote,
        video: Video,
      }}
    />

    <Footer developers={'DEVS'} copyrightYear={2019} />
  </>
)

export default ArticlePage
