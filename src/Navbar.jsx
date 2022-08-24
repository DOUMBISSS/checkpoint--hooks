import React from 'react';

function Navbar ({setSearchFilter}) {
            
    const handlesetSearchFilter = (event) => {
      let value = event.target.value;
      setSearchFilter(value);
    }

    return (
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
             <input type="text" placeholder="Rechercher un film" onChange={handlesetSearchFilter} />
         </div>
     </div>
            
   </header>
    );
}

export default Navbar;
