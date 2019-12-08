import React from 'react'
import styled from 'react-emotion'
import Recycle from '../../images/recycle.svg'

const OutDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fffcf5;
  background-image: url(${Recycle});
  background-size: cover;
`

const Title = styled('div')`
  font-family: IBM Plex Sans;
  text-transform: uppercase;
  font-size: 75px;
  line-height: 97px;
  font-weight: bold;
  color: #4c4037;
  margin-top: 3vh;
  @media only screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 52px;
  }
`

const Cred = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  font-family: IBM Plex Sans;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  margin: 15px;
  color: #4c4037;
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 17px;
  }
`

const Name = styled('div')`
  border-bottom: 2px solid #6d786a;
  padding-bottom: 1px;
`

const NameSpace = styled('div')`
  padding-left: 5px;
`

const Content = styled('div')`
  font-family: Heebo;
  font-size: 18px;
  line-height: 26px;
  width: 60%;
  padding: 5px;
  padding-bottom: 20px;
  color: #4c4037;
  margin-bottom: 3vh;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 23px;
    width: 80%;
  }
`
export default class Intro extends React.Component {
  render() {
    return (
      <OutDiv>
        <Title>Let's not kill the earth</Title>
        <Cred>
          By{' '}
          <NameSpace>
            <Name>Daily Bruin Contributor</Name>
          </NameSpace>
        </Cred>
        <Content>
          body text lives here! i hope you are having a great day. body text
          lives here! i hope you are having a great day. body text lives here! i
          hope you are having a great day. body text lives here! i hope you are
          having a great day. body text lives here! i hope you are having a
          great day. body text lives here! i hope you are having a great day.
          body text lives here! i hope you are having a great day. body text
          lives here! i hope you are having a great day. body text lives here! i
          hope you are having a great day. body text lives here! i hope you are
          having a great day. body text lives here! i hope you are having a
          great day. body text lives here! i hope you are having a great day.
          body text lives here! i hope you are having a great day. body text
          lives here! i hope you are having a great day. body text lives here! i
          hope you are having a great day. body text lives here! i hope you are
          having a great day. body text lives here! i hope you are having a
        </Content>
      </OutDiv>
    )
  }
}
