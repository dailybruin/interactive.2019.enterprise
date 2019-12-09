import React from 'react'
import { css } from 'emotion'
export const Video = props => (
  <div
    className={css`
      height: 100%;
      width: 100%;
    `}
  >
    <iframe
      className={css``}
      width="100%"
      height="100%"
      src={'https://www.youtube.com/embed/' + props.videoId}
    />
  </div>
)
