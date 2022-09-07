import React from 'react';
import { useState } from 'react';
import { uid } from 'uid';

function AddMovie({addNewMovie,display, setDisplay}) {

    const [name, setName] = useState("");
        const addMovie = () => {
            const movie = {
            id :uid(),
            img : "day.jpg",
            nameMovie :name,
            videoLink : videoLink,
            Duration :duration,
        }
            addNewMovie(movie);
            setName("")
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [videoLink, setvideoLink] = useState("");
            
    const handlevideoLink = (event) => {
        setvideoLink(event.target.value);
    }
    const [duration, setDuration] = useState("");
            
    const handleDuration = (event) => {
        setDuration(event.target.value);
    }
      const affi = () => {
        setDisplay(false)
      }


  return (
    <div>
        <div className={display ? "search--bar active--search--bar " :'search--bar'}>
        <div className='btn--close--search' onClick={affi}>X</div>
        <input type="text" placeholder='movieName' onChange={handleName} value={name} />
        <input type="url"placeholder='Link'onChange={handlevideoLink}/>
        <input type="url"placeholder='Duration'onChange={handleDuration}/>
        <input type="file" />
        <button className="add--btn--movie"onClick={addMovie}>Ajouter</button>

        </div>
        </div>
  )
}

export default AddMovie