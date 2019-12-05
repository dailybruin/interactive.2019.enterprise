import * as React from 'react'

interface HeadingProps {
  text: String
}

class Heading extends React.Component<HeadingProps, {}> {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default Heading
