import React from 'react'
import star from '../star.svg'
import './Gif.css'

const Gif = props => {
  const pathname = window.location.pathname

  // Render favorite button or star for item that was
  // favorited
  const favoriteButton = () => {
    if (pathname === '/') {
      if (props.gif.favorite) {
        return (
          <div className="favorite-action">
            <img src={star} alt="star" className="star" />
          </div>
        )
      } else {
        return (
          <div className="favorite-action">
            <button type="submit" onClick={handleClick} >Favorite</button>
          </div>
        )
      }
    }
  }

  const handleClick = () => {
    props.handleClick(props.gif)
  }

  return (
    <div className="gif">
      <img
        className="image"
        src={props.gif.url}
        alt={props.gif.title}
      />
      {favoriteButton(props.gif)}
    </div>
  )
}


export default Gif