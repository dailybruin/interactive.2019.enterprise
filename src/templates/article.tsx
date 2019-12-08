import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import styled from 'react-emotion'
import { Article, Footer, Image, PullQuote, Video } from '@dailybruin/lux'
import Heading from '../components/Heading'
import PieChart from '../components/Graphs/PieChart'
import BarChart from '../components/Graphs/BarChart'
import Recycle from '../images/recycle.svg'
import ArticleNav from '../components/ArticleNav/ArticleNav'

export const query = graphql`
  query($name: String) {
    kerckhoffArticle(title: { eq: $name }) {
      Headline
      ImageURL
      Author
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
  background-image: url(${Recycle});
  background-color: #6d786a;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Divide = styled('hr')`
  background: #fefbf4;
  width: 65%;
  margin-top: 7vh;
`

const ArticlePage = ({ data }) => (
  <>
    {/* <Head {...data.site.siteMetadata} /> */}
    {console.log(data)}
    <ArticleNav />
    <Wrapper>
      <Heading
        Headline={
          data.kerckhoffArticle.Headline != null
            ? data.kerckhoffArticle.Headline
            : 'HEADLINE'
        }
        Contributor={data.kerckhoffArticle.Author}
      />
      <Article
        dropcap={true}
        content={data.kerckhoffArticle.content}
        style={css`
          color: #fffcf5;
          max-width: 60%;
          font-family: 'Arial';
          line-height: 38px;
          font-size: 1rem;
          min-width: 300px;
          /* background: #6d786a; */
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
      <Divide />
      <Footer
        style={css`
          padding-bottom: 30px;
          margin-bottom: 0px;
          color: #fffcf5;
        `}
        developers="Henry Trinh, Karl Huang, Jay Park, Matthew Ko, Max Wu"
        copyrightYear={2019}
      />
    </Wrapper>
  </>
)

export default ArticlePage
