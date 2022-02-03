import React from 'react';
import { Link } from "react-router-dom";
// Tableau des livres présent dans la bibliotheque
const tab = {
    Livres: [
        {"id":1,"titre":"Les Misérables","idA":1},
        {"id":2,"titre":"Le Petit Prince","idA":2},
        {"id":3,"titre":"Le Seigneur des Anneaux","idA":3},
        {"id":4,"titre":"Lanfeust de Troy","idA":4},
        {"id":5,"titre":"La Légende des siècles","idA":1},
    ]
}
// Affichage de la bibliotheque
class Livres extends React.Component{
    render(){
        return(
            <div>
                <h1>Bibliotheque</h1>
                <ol>
                    {tab.Livres.map((d) => 
                        <li className='info' key={d.id}>
                            {/* Affichage des informations d'un livre avec un lien vers le livre pour plus d'informations */}
                            <p>{d.titre}</p>
                            <Link to={`/Livre/${d.id}`}>Informations sur le livre</Link>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}
export default Livres