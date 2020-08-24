import React from 'react'
import './Gif.css'

const Gif = props => (
  <div className="gif">
    <img
      className="image"
      src={props.gif.images.downsized.url}
      alt={props.gif.title}
    />
  </div>
)

export default Gif