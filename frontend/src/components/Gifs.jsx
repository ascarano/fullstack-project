import React from 'react'
import Gif from './Gif'
import Masonry from 'react-masonry-component';
import './Gifs.css'

const Gifs = props => {
  return (
    <div className="gifs">
      <Masonry
        className={'my-gallery-class'} // default ''
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {props.gifs.map(function(gif, i){
          return(
            <Gif key={gif.id} gif={gif} />
          )
        })}
      </Masonry>
    </div>
  )
}

export default Gifs