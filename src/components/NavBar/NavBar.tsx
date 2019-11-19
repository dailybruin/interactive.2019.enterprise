import React from 'react'
import styled from 'react-emotion'

const Bar = styled('div')`
  position: fixed;
  color: white;
  width: 100%;
`
const Line = styled('div')`
  height: 1px;
  border: 0;
  color: #333;
  background-color: white;
  width: 80%;
`

export default class NavBar extends React.Component {
  render() {
    return (
      <Bar>
        <p>xD</p>
        <Line />
      </Bar>
    )
  }
}
