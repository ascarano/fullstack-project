import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form onSubmit={props.handleSubmit}>
        <input 
          type="search" 
          name="search" 
          placeholder="Search Gifs" 
          value={props.search}
          onChange={props.handleInput}
        />
        <div className="submit">
          <button type="submit" disabled={!props.validSearch}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
