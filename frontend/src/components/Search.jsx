import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Gifs from './Gifs'
import SearchBar from './SearchBar'
import axios from 'axios'
import './Search.css'

const Search = () => {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState('')
  const [validSearch, setValidSearch] = useState(false)

  // Handle search submissions
  const handleSubmit = e => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `/api/gifs/search?search=${search}`
    })
    .then(response => {
      let searchGifs = response.data.data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized.url,
          width:  gif.images.downsized.width,
          height:  gif.images.downsized.height,
          favorite: false
        }
      })
      setGifs(searchGifs)
    })
    .catch(error => {
      console.log(error)
    })
  }

  // Handle search input
  const handleInput = e => {
    e.preventDefault()
    const newSearch = e.target.value
    setSearch(newSearch)
    validateSearch(newSearch)
  }

  // Require at least one character to search
  const validateSearch = (newSearch) => {
    if (newSearch.length > 0) {
      setValidSearch(true)
    } else {
      setValidSearch(false)
    }
  }

  // Update gif search results to show favorited gif
  const favoriteGif = (gif) => {
    const updatedGif = {
      ...gif,
      favorite: true
    }
    const favoritedGif = gifs.indexOf(gif)

    let updatedGifs = [...gifs]
    updatedGifs.splice(favoritedGif, 1, updatedGif)

    setGifs(updatedGifs)
  }

  // Handle favorite button clicks
  const handleClick = (gif) => {
    axios({
      method: 'POST',
      url: 'api/favorites',
      data: { favorite: {
          title: gif.title,
          url: gif.url,
          height: gif.height,
          width: gif.width,
          giphy_id: gif.id,
        }
      },
    })
    .then(response => {
      favoriteGif(gif)
    })
    .catch(error => {
      console.log(error)
      favoriteGif(gif)
    })
  }

  return (
    <div className="search">
      <Link to="/favorites" className="link">Favorites</Link>
      <SearchBar 
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      validSearch={validSearch}
      />
      <Gifs gifs={gifs}  handleClick={handleClick} />
    </div>
  );
}

export default Search;
