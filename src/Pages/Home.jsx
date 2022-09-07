import { useState } from 'react';
import MovieList from '../MovieList';
import AddMovie from '../AddMovie';
import Navbar from '../Navbar';
import '../App.css';
// import {Routes,Route,Link} from 'react-router-dom';


function Home ({movies,setMovies}) {
        
    const addMovie = (movie) =>
      {
        let newState = [...movies];
        newState.push(movie);
        setMovies(newState);
      }
      const [searchFilter, setSearchFilter] = useState("");
      const [display, setDisplay] = useState(false);
    
    return (
        <div>
        <Navbar setSearchFilter={setSearchFilter} setDisplay={setDisplay} display={display} />
        <AddMovie addNewMovie={addMovie}display={display} setDisplay={setDisplay}/>
        <MovieList movies={movies} searchFilter={searchFilter}/>
      </div>
    )
  }

  export default Home;