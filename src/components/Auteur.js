import React from 'react';
import { useParams, Link } from "react-router-dom";

// Tableau avec toute les tables nécessaire à l'affichage
const tab = {
    Livres: [
        {"id":1,"titre":"Les Misérables","idA":1},
        {"id":2,"titre":"Le Petit Prince","idA":2},
        {"id":3,"titre":"Le Seigneur des Anneaux","idA":3},
        {"id":4,"titre":"Lanfeust de Troy","idA":4},
        {"id":5,"titre":"La Légende des siècles","idA":1},
    ],
    Auteurs: [
        {"idA":1,"nomAuteur":"Hugo","prenomAuteur":"Victor"},
        {"idA":2,"nomAuteur":"de Saint-Exupéry","prenomAuteur":"Antoine"},
        {"idA":3,"nomAuteur":"Tolkien","prenomAuteur":"John Ronald Reuel"},
        {"idA":4,"nomAuteur":"Tarquin","prenomAuteur":"Didier"},
    ]
}

function Auteur(){
    // Récupération de l'id présent dans l'URL pour l'utiliser pour l'affichage
    let { id } = useParams();
    id = parseInt(id);
    return <div>
                {/* Affichage de l'auteur en fonction de l'id récupérer */}    
                {tab.Auteurs.map((a) => {
                    return (
                        id === a.idA ?
                        <li key={a.idA}>
                            <h1>{a.prenomAuteur} {a.nomAuteur}</h1>
                            <div className='map'>
                            {/* Affichage des données des livres avec un lien vers plus d'information sur le livre */}
                            {tab.Livres.map((d) => {
                                return (
                                    a.idA === d.idA ?
                                        <div key={d.id} className='info'>
                                            <p>{d.titre}</p>
                                            <Link to={`/Livre/${d.id}`}>Informations sur le livre</Link>
                                        </div>   : null
                                )
                            })}
                            </div>
                        </li> : null
                    )}
                )}
          </div>;
  }
export default Auteur