import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Navbar ({setSearchFilter,setDisplay,display}) {
            
    const handlesetSearchFilter = (event) => {
      let value = event.target.value;
      setSearchFilter(value);
    }

  
// const afficher = () => {
//   setDisplay(!display)
// }
const afficher = () => {
  setDisplay(true)
}
// const affi = () => {
//   setDisplay(false)
// }
          

    return (
    <header>
     <div className="navbar">
         <div className="navbar--left">
             <h1>React Movie Studio</h1>
         </div>
         <div className="navbar--right">
             <div className='categories'>
               <ul>
                 <li><Link className='link' to="/">Accueil</Link></li>
                 <li><Link className='link' to="/series">Series</Link></li>
                 <li><Link className='link' to="/films">Films</Link></li>
                 <li><Link className='link' to="/nouveautes">Nouveautés</Link></li>
                 <li>Ma liste</li>
                 <li>Téléchargement</li>
                 <li>Sign Up</li>
                 <li><button className="add--btn--movie" onClick={afficher}>Ajouter un film</button></li>
               </ul>
             </div>
             <input type="text" placeholder="Rechercher un film" onChange={handlesetSearchFilter} />
         </div>
     </div>
            
   </header>
    );
}

export default Navbar;
