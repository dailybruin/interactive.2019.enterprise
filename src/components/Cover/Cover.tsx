import React from 'react'
import styled from 'react-emotion'

import Top from '../../images/parallaxcover/top.png'
import Middle from '../../images/parallaxcover/middle.png'
import Bottom from '../../images/parallaxcover/bottom.png'

const Wrapper = styled('div')`
  background: url(${Top}), url(${Middle}), url(${Bottom});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export default class Cover extends React.Component<
  {},
  { pos1: String; pos2: String; pos3: String }
> {
  constructor(props) {
    super(props)
    this.parallax = this.parallax.bind(this)
  }
  componentDidMount() {
    document
      .querySelector('#parallax')
      .addEventListener('mousemove', this.parallax)
    console.log('hi')
  }
  parallax(e) {
    let windowwidth = window.innerWidth / 2
    let windowheight = window.innerHeight / 2
    let mouseX = e.clientX
    let mouseY = e.clientY
    const elem = document.querySelector('#parallax')

    let pos1 = `${50 - (mouseX - windowwidth) * 0.01}% ${50 -
      (mouseY - windowheight) * 0.01}%`
    let pos2 = `${50 - (mouseX - windowwidth) * 0.02}% ${50 -
      (mouseY - windowheight) * 0.02}%`
    let pos3 = `${50 - (mouseX - windowwidth) * 0.06}% ${50 -
      (mouseY - windowheight) * 0.06}%`
    elem.style.backgroundPosition = pos3 + ', ' + pos2 + ', ' + pos1

    console.log(elem.style.backgroundSize)
  }
  render() {
    return (
      <>
        <Wrapper id="parallax" />
      </>
    )
  }
}
