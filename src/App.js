
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


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

  
  return (
    <div>
    <header>
     <div className="navbar">
         <div className="navbar--left">
             <h1>React Movie Studio</h1>
         </div>
         <div className="navbar--right">
             <div className='categories'>
               <ul>
                 <li>Accueil</li>
                 <li>Séries</li>
                 <li>Films</li>
                 <li>Nouveautés</li>
                 <li>Ma liste</li>
                 <li>Téléchargement</li>
                 <li>Sign Up</li>
               </ul>
             </div>
             <input type="text" placeholder="Rechercher un film" />
         </div>
     </div>
   </header>
      <AddMovie addNewMovie={addMovie}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
