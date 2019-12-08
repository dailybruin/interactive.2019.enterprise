import React from 'react'
import styled from 'react-emotion'
import { css } from 'react-emotion'
import Picture from '../../images/graybox.png'
import Recycle from '../../images/recycle.svg'

const OutDiv = styled('div')`
  display: flex;
  justify-content: center;
  font-family: IBM Plex Mono;
  font-size: 64px;
  line-height: 83px;
  align-items: center;
  text-align: center;
  color: #fefbf4;
  background-color: #6d786a;
  background-image: url(${Recycle});
  flex-direction: column;
  padding-top: 3vh;
  padding-bottom: 3vh;
  @media only screen and (max-width: 800px) {
    font-size: 37px;
    line-height: 48px;
    padding: 15px;
  }
`

const Blurb = styled('p')`
  font-family: Heebo;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  width: 60%;
  color: #fefbf4;
  @media only screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 21px;
    width: 70%;
  }
`
const Box = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  background-color: #6d786a;
  width: 60%;
  box-shadow: 0 0 5px 2px #282a2d;
  margin-right: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 800px) {
    width: 75%;
    margin-right: 0px;
    flex-direction: column;
  }
`

const InnerBox = styled('div')`
  background-color: #6d786a;
  width: 60%;
  padding: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 0px;
  }
`

const BoxTitle = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  align-items: left;
  color: #fffcf5;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 23px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    flex-direction: column;
  }
`

const BoxContent = styled('div')`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  font-family: Heebo;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #fffcf5;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 15px;
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 19px;
    padding-left: 10px;
    flex-direction: column;
  }
`

const BoxImg = props => css`
  background: ${props.pic};
`

const BoxImage = styled('div')`
  padding: 15px;
  margin: 15px;
  flex-grow: 2;
  background: url(${Picture});
  ${BoxImg}
  padding: 15px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 20%;
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }
  @media only screen and (max-width: 414px) {
    flex-direction: column;
    padding: 35%;
    width: 80%;
    margin: auto;
    margin-top: 20px;
  }
`

interface CardProps {
  topic: string
  topicdesc: string
  pictures: any
  titles: string[]
  descs: string[]
}

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <OutDiv>
        <p>{this.props.topic}</p>
        <Blurb>
          <p>{this.props.topicdesc}</p>
        </Blurb>
        {function() {
          var returnarr = []
          for (var i = 0; i < this.props.titles.length; i++) {
            returnarr.push(
              <Box>
                <BoxImage pic={this.props.pictures[i]} />
                <InnerBox>
                  <BoxTitle>{this.props.titles[i]}</BoxTitle>
                  <BoxContent>{this.props.descs[i]}</BoxContent>
                </InnerBox>
              </Box>
            )
          }
          return returnarr
        }}
      </OutDiv>
    )
  }
}
