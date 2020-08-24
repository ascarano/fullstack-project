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

  const handleSubmit = e => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `http://localhost:3010/api/gifs/search?search=${search}`
    })
    .then(response => {
      let searchGifs = response.data.data.map((gif) => {
        return {
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized.url
        }
      })
      setGifs(searchGifs)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleInput = e => {
    e.preventDefault()
    const newSearch = e.target.value
    setSearch(newSearch)
    validateSearch(newSearch)
  }

  const validateSearch = (newSearch) => {
    if (newSearch.length > 0) {
      setValidSearch(true)
    } else {
      setValidSearch(false)
    }
  }

  return (
    <div className="search">
      <Link to="/favorites" className="link">Favorites</Link>
      <SearchBar 
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      validSearch={validSearch}
      />
      <Gifs gifs={gifs} />
    </div>
  );
}

export default Search;
