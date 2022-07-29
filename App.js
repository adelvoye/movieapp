import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

//b7e398e

const API_URL = 'http://www.omdbapi.com?apikey=b7e398e'
const movie1 = {
  "Title": "Braveheart",
  "Year": "1995",
  "imdbID": "tt0112573",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         />
         <img 
         src={SearchIcon} 
         alt="Search" 
         onClick={() => searchMovies(searchTerm)}
         />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className="container">
        
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
          
         

       </div>
        ) :
        (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )

      }
    
  </div>
  )}

export default App;
