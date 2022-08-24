import React from 'react'
import { useState } from 'react'

function AddMovie({addNewMovie}) {

    const [name, setName] = useState("");
        const addMovie = () => {
            const movie = {
            img : "day.jpg",
            nameMovie :name,
            posterUrl : posterUrl,
            Duration :duration
        }
            addNewMovie(movie);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [posterUrl, setPosterUrl] = useState("");
            
    const handlePosterUrl = (event) => {
        setPosterUrl(event.target.value);
    }
    const [duration, setDuration] = useState("");
            
    const handleDuration = (event) => {
        setDuration(event.target.value);
    }


  return (
    <div className="search--bar">
        <input type="text" placeholder='movieName' onChange={handleName}/>
        <input type="url"placeholder='movieUrl' onChange={handlePosterUrl}/>
        <input type="url"placeholder='Duration' onChange={handleDuration}/>
        <input type="file" />
        <button className="add--btn--movie" onClick={addMovie}>Ajouter un film</button>
        </div>  
  )
}

export default AddMovie