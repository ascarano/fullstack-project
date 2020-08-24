import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Gifs from './Gifs'
import axios from 'axios'
import './Favorites.css'

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([])

  // Update favorites on render
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'GET',
        url: '/api/favorites'
      })
      .then(response => {
        setFavorites(response.data)
      })
      .catch(error => {
        console.log(error)
      });
    }
    fetchData()
  }, []);

  return (
    <div className="favorites">
      <Link to="/" className="link">Search</Link>
      <h1 className="title">Favorites</h1>
      <Gifs gifs={favorites} />
    </div>
  );
}

export default Favorites;
