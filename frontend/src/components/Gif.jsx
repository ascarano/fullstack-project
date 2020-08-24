import React from 'react'
import './Gif.css'

const Gif = props => (
  <div className="gif">
    <img
      className="image"
      src={props.gif.images.downsized.url}
      height={props.gif.images.downsized.height}
      width={props.gif.images.downsized.width}
      alt={props.gif.title}
    />
  </div>
)

export default Gif