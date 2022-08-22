import React from 'react'
import MovieCard from './MovieCard';

function MovieList({movies}) {
  return (
     <div>
     <div className="container--content">
         <div className="row">
         {movies.map(movie => <MovieCard movie={movie}/>)}
           </div>
      </div>
      </div>
  )
}

export default MovieList