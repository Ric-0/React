import React from 'react';
import { Link } from "react-router-dom";

// Tableau avec toute les tables nécessaire à l'affichage
const tab = {
    Genres: [
        {"idG":1,"nom":"Roman"},
        {"idG":2,"nom":"Fable"},
        {"idG":3,"nom":"Fantasy"},
        {"idG":4,"nom":"Bande dessiné"},
        {"idG":5,"nom":"Recueil"},
    ]
}


class Genres extends React.Component{
    render(){
        return(
            <div>
                <h1>Listes des Genres</h1>
                <ol>
                    {/* Affichage des différents genre existant avec un lien vers celui-ci */}
                    {tab.Genres.map((g) => 
                        <li className='info' key={g.idG}>
                            <p>{g.nom}</p>
                            <Link to={`/Genre/${g.idG}`}>Information sur le genre</Link>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}
export default Genres