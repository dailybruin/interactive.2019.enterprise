import * as React from 'react'
import styled from 'react-emotion'

interface HeadingProps {
  Headline: string
  Contributor: string
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  color: #fefbf4;
  font-family: IBM Plex Sans;
  line-height: 62px;
  align-items: center;
  width: 65%;
`

const HeadTitle = styled('p')`
  font-size: 48px;
  margin-top: 5vh;
  text-align: center;
`

const Contrib = styled('p')`
  text-transform: uppercase;
`

const ContribName = styled('span')`
  border-bottom: solid #c2d59c 1.5px;
`

class Heading extends React.Component<HeadingProps, {}> {
  render() {
    return (
      <>
        <Wrapper>
          <HeadTitle>{this.props.Headline}</HeadTitle>
          <Contrib>
            by <ContribName>{this.props.Contributor}</ContribName>
          </Contrib>
        </Wrapper>
      </>
    )
  }
}

export default Heading
