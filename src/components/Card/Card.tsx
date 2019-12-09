import React from 'react'
import styled from 'react-emotion'
import { css } from 'react-emotion'
import Picture from '../../images/graybox.png'
import { Link } from 'gatsby'
import { cardInnerPadding } from '@dailybruin/lux/src/globals/mainsiteGlobalStyles'

const OutDiv = styled('div')`
  display: flex;
  justify-content: center;
  font-family: IBM Plex Mono;
  font-size: 64px;
  line-height: 83px;
  align-items: center;
  text-align: center;
  color: #fefbf4;
  flex-direction: column;
  padding: 1.5vh;
  margin-bottom: 7vh;
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
const Box = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  background-color: #6d786a;
  width: 60%;
  box-shadow: 0 0 5px 0px #282a2d;
  margin: 10px;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 5px 1.5px #282a2d;
  }
  @media only screen and (max-width: 800px) {
    width: 75%;
    flex-direction: column;
  }
`

const BoxExternal = styled('a')`
  display: flex;
  flex-direction: row-reverse;
  background-color: #6d786a;
  width: 60%;
  box-shadow: 0 0 5px 0px #282a2d;
  margin: 10px;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    box-shadow: 0 0 5px 1.5px #282a2d;
  }
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
  padding: 10px;
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
  padding: 10px 10px;
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 19px;
    padding-left: 10px;
    flex-direction: column;
  }
`

const BoxImage = styled('div')`
  padding: 15px;
  margin: 15px;
  flex-grow: 2;
  padding: 15px;
  /* @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 20%;
    width: 50%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 414px) {
    flex-direction: column;
    padding: 35%;
    width: 80%;
    margin-top: 20px;
  } */
`

interface CardProps {
  CategoryName: string
  Cards: {
    PageLink: string
    ImageURL: string
    Title: string
    Contributor: string
    Blurb: string
  }[]
}

const TITLE_TO_LINK_MAPPING = {}

const is_external = href => !(href[0] == '/')

export default class Card extends React.Component<CardProps> {
  componentDidMount() {
    console.log(this.props.Cards)
  }
  render() {
    return (
      <OutDiv id={this.props.CategoryName.replace(/\s/g, '')}>
        <p>{this.props.CategoryName}</p>
        {/* <Blurb>
          <p>{this.props.TopicDesc}</p>
        </Blurb> */}
        {this.props.Cards.map(card => {
          return card.PageLink == 'external' ? (
            <a
              href={
                card.PageLink == 'external'
                  ? 'https://dailybruin.com/2019/12/09/gallery-heres-how-ucla-mixed-recycling-gets-processed/'
                  : ''
              }
              className={css`
                text-decoration: none;
                color: #fefbf4;
                display: flex;
                flex-direction: row-reverse;
                background-color: #6d786a;
                width: 60%;
                box-shadow: 0 0 5px 0px #282a2d;
                margin: 10px;
                transition: 0.3s;
                text-decoration: none;
                &:hover {
                  box-shadow: 0 0 5px 1.5px #282a2d;
                }
                @media only screen and (max-width: 800px) {
                  width: 75%;
                  margin-right: 0px;
                  flex-direction: column;
                }
              `}
            >
              {' '}
              <BoxImage>
                <div
                  className={css`
                    height: 100%;
                    width: 100%;
                    @media only screen and (max-width: 800px) {
                      height: 200px;
                      width: 100%;
                    }
                    background: url(${card.ImageURL});
                    background-size: cover;
                    background-position: bottom;
                  `}
                />
              </BoxImage>
              {/* <img src={card.ImageURL} /> */}
              <InnerBox>
                <BoxTitle>{card.Title}</BoxTitle>
                <BoxContent>{card.Blurb}</BoxContent>
              </InnerBox>
            </a>
          ) : (
            <Box to={`${card.PageLink}`}>
              <BoxImage>
                <div
                  className={css`
                    height: 100%;
                    width: 100%;
                    @media only screen and (max-width: 800px) {
                      height: 200px;
                      width: 100%;
                    }
                    background: url(${card.ImageURL});
                    background-size: cover;
                    background-position: bottom;
                  `}
                />
              </BoxImage>
              {/* <img src={card.ImageURL} /> */}
              <InnerBox>
                <BoxTitle>{card.Title}</BoxTitle>
                <BoxContent>{card.Blurb}</BoxContent>
              </InnerBox>
            </Box>
          )
        })}
      </OutDiv>
    )
  }
}
