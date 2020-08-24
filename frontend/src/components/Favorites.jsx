import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Gifs from './Gifs'
import axios from 'axios'
import './Favorites.css'

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: 'GET',
        url: 'http://localhost:3010/api/favorites'
      })
      .then(response => {
        setFavorites(response.data)
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
