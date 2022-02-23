import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  async function fetchmovieHandler() {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    const transformedmovies = data.results.map(movieData =>{
        return {
          id:movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          release: movieData.release_date
        }
      })
    console.log(transformedmovies)
    setMovies(transformedmovies)
    
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
