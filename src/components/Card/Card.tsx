import React from 'react'
import styled from 'react-emotion'
import Picture from '../../images/graybox.png'

const OutDiv = styled('div')`
  display: flex;
  justify-content: center;
  font-family: IBM Plex Mono;
  font-size: 64px;
  line-height: 83px;
  align-items: center;
  text-align: center;
  color: #fefbf4;
  background-color: black;
  flex-direction: column;
  @media only screen and (max-width: 375px) {
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
  @media only screen and (max-width: 375px) {
    font-size: 14px;
    line-height: 21px;
    width: 80%;
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
  @media only screen and (max-width: 375px) {
    width: 80%;
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
  @media only screen and (max-width: 375px) {
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
  display: flex;
  align-items: left;
  color: #fffcf5;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  font-family: IBM Plex Mono;
  @media only screen and (max-width: 375px) {
    font-size: 18px;
    line-height: 23px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    text-align: center;
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
  @media only screen and (max-width: 375px) {
    font-size: 13px;
    line-height: 19px;
    padding-left: 0px;
    flex-direction: column;
    text-align: center;
  }
`

const BoxImage = styled('div')`
  padding: 15px;
  margin: 15px;
  flex-grow: 2;
  background: url(${Picture});
  @media only screen and (max-width: 375px) {
    flex-direction: column;
  }
`

export default class Card extends React.Component {
  render() {
    return (
      <OutDiv>
        <p>INSERT TOPIC 1 HERE</p>
        <Blurb>
          <p>
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here
          </p>
        </Blurb>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <p>INSERT TOPIC 2 HERE</p>
        <Blurb>
          <p>
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here
          </p>
        </Blurb>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <p>INSERT TOPIC 3 HERE</p>
        <Blurb>
          <p>
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here blurb here blurb here blurb here
            blurb here blurb here blurb here
          </p>
        </Blurb>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
        <Box>
          <BoxImage />
          <InnerBox>
            <BoxTitle>
              Here be a title here be a title here be a title here be a title
              here
            </BoxTitle>
            <BoxContent>
              stop leaving the faucet on while you brush your teeth that is so
              wasteful geez stop leaving the faucet on while you brush your
              teeth that is so wasteful geez
            </BoxContent>
          </InnerBox>
        </Box>
      </OutDiv>
    )
  }
}
