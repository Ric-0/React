import React from 'react';
import { Link } from "react-router-dom";

// Tableau avec toute les tables nécessaire à l'affichage
const tab = {
    Auteurs: [
        {"idA":1,"nomAuteur":"Hugo","prenomAuteur":"Victor"},
        {"idA":2,"nomAuteur":"de Saint-Exupéry","prenomAuteur":"Antoine"},
        {"idA":3,"nomAuteur":"Tolkien","prenomAuteur":"John Ronald Reuel"},
        {"idA":4,"nomAuteur":"Tarquin","prenomAuteur":"Didier"},
    ]
}

class Auteurs extends React.Component{
    render(){
        return(
            <div>
                <h1>Liste des Auteurs</h1>
                <ol>
                    {/* Affichage des différents auteurs existant avec un lien vers celui-ci */}
                    {tab.Auteurs.map((a) => 
                        <li className='auteurs' key={a.idA}>
                            <Link to={`/Auteur/${a.idA}`}>{a.prenomAuteur} {a.nomAuteur}</Link>
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}
export default Auteurs