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

import { Navbar } from './navbar'

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
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    <Navbar
      title={'MAIN TITLE'}
      entries={[
        { id: 'MAINTITLE', title: 'MAIN TITLE' },
        { id: 'tech', title: 'Tech' },
        { id: '3', title: 'Part 3' },
        // { id: 'international', title: 'International' },
        { id: '4', title: 'Part 4' },
        { id: '5', title: 'Part 5' },
      ]}
      selectedId={'housing'}
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
