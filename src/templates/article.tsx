import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import styled from 'react-emotion'
import { Article, Footer, Image, PullQuote, Video } from '@dailybruin/lux'
import Heading from '../components/Heading'
import PieChart from '../components/Graphs/PieChart'
import BarChart from '../components/Graphs/BarChart'

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

const Wrapper = styled('div')`
  width: 100%;
  background: #6d786a;
  margin: 0px;
`

const ArticlePage = ({ data }) => (
  <>
    {/* <Head {...data.site.siteMetadata} /> */}
    {console.log(data)}
    <Wrapper>
      <Article
        dropcap={true}
        content={data.kerckhoffArticle.content}
        style={css`
          color: #fffcf5;
          max-width: 60%;
          font-family: 'Arial';
          line-height: 38px;
          font-size: 1.25rem;
          min-width: 300px;
          background: #6d786a;
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
          piechart: PieChart,
          barchart: BarChart,
        }}
      />

      <Footer
        style={css`
          padding-bottom: 1rem;
          margin-bottom: 0px;
        `}
        developers={'DEVS'}
        copyrightYear={2019}
      />
    </Wrapper>
  </>
)

export default ArticlePage
