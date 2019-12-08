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
import styled from 'react-emotion'
import { css } from 'react-emotion'
import Card from '../components/Card/Card'
import Intro from '../components/Intro/Intro'
import Cover from '../components/Cover/Cover'
import Recycle from '../images/recycle.svg'

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

const Page = styled('div')`
  background-color: #6d786a;
  background-image: url(${Recycle});
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Divide = styled('hr')`
  background: #fefbf4;
  width: 80%;
  margin-top: 7vh;
`

const IndexPage = ({ data }) => (
  <>
    {console.log(data.kerckhoffArticle.Categories)}
    <Head {...data.site.siteMetadata} />
    <Cover />
    <Intro
      PageTitle={data.kerckhoffArticle.PageTitle}
      Explainer={data.kerckhoffArticle.Explainer}
    />
    <Page>
      {data.kerckhoffArticle.Categories.map(category => (
        <Card {...category} />
      ))}
      <Divide />
      <Footer
        developers="Henry Trinh, Karl Huang, Jay Park, Matthew Ko, Max Wu"
        copyrightYear={2019}
        style={css`
          margin-bottom: 0px;
          padding-bottom: 30px;
          color: #fefbf4;
        `}
      />
    </Page>
  </>
)

export default IndexPage
