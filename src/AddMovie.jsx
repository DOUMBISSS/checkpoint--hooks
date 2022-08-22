import React from 'react'
import { useState } from 'react'

function AddMovie({addNewMovie}) {

    const [name, setName] = useState(" ");
        const addMovie = () => {
            const movie = {
            img : "day.jpg",
            nameMovie :name
        }
            addNewMovie(movie);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }


  return (
    <div className="search--bar">
        <input type="text" placeholder='movieName' onChange={handleName}/>
        <input type="url"placeholder='movieUrl' onChange={handleName}/>
        <input type="file" />
        <button className="add--btn--movie" onClick={addMovie}>Ajouter un film</button>
        </div>  
  )
}

export default AddMovie