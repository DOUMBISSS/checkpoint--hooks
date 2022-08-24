import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import {Routes,Route,Link} from 'react-router-dom'
// import {Routes,Route} from 'react-router-dom';


function App() {

  const [movies, setMovies] = useState([
  {nameMovie : "Transformers",img:'Transformers.jpeg',Duration : "1H45 min"},
  {nameMovie : "Colombiana",img:'colombiana.jpg',Duration : "1H34min"},
  {nameMovie : "Blacklist",img:'Blackilist.png',Duration : "1H04min"},
  {nameMovie : "Faste and Furious",img:'fast .jpg',Duration : "1H50min"},
  {nameMovie : "Good Doctors",img:'good doctor.webp',Duration : "2H34min"}
  
  ])


  const addMovie = (movie) =>
  {
    let newState = [...movies];
    newState.push(movie);
    setMovies(newState);
  }
  const [searchFilter, setSearchFilter] = useState("");
  
  return (
    <div>
      <Navbar setSearchFilter={setSearchFilter}/>
      <AddMovie addNewMovie={addMovie}/>
      <MovieList movies={movies} searchFilter={searchFilter}/>
    </div>
    // <Routes>
    //   <Route path="/" component={Home}/>
    // </Routes>
  );
}

export default App;
