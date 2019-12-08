import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #6d786a;
  font-family: IBM Plex Mono;
  color: #fffcf5;
  border-bottom: solid 1px #fffcf5;
  padding: 10vh auto;
`

const RightNav = styled('div')`
  display: flex;
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fffcf5;
  &:hover {
    color: #c2d59c;
    text-decoration: underline;
  }
  font-size: 14px;
  margin-right: 30px;
`

const PageTitle = styled(Link)`
  text-decoration: none;
  color: #fffcf5;
  text-transform: uppercase;
  font-size: 30px;
  margin: 1vh 20px;
`

export default class ArticleNav extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <PageTitle to="/">A Wasted Opportunity</PageTitle>
          <RightNav>
            <NavItem to="/#ZeroWasteatUCLA">Zero Waste at UCLA</NavItem>
            <NavItem to="/#ZeroWasteintheUCSystem">
              Zero Waste in the UC System
            </NavItem>
          </RightNav>
        </Wrapper>
      </>
    )
  }
}
