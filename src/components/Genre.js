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
    Genres: [
        {"idG":1,"nom":"Roman"},
        {"idG":2,"nom":"Fable"},
        {"idG":3,"nom":"Fantasy"},
        {"idG":4,"nom":"Bande dessiné"},
        {"idG":5,"nom":"Recueil"},
    ],
    GL: [
        {"idG":1,"idL":1},
        {"idG":1,"idL":2},
        {"idG":3,"idL":4},
        {"idG":4,"idL":4},
        {"idG":2,"idL":2},
        {"idG":5,"idL":5},
        {"idG":1,"idL":3},
        {"idG":3,"idL":3},
    ]
}

function Genre(){
    // Récupération de l'id présent dans l'URL pour l'utiliser pour l'affichage
    let { id } = useParams();
    id = parseInt(id);
    return <div>
            {/* Affichage du genre en fonction de l'id récupérer */}
            {tab.Genres.map((g) => {
                return (
                    id === g.idG ?
                    <li key={g.nom}>
                        <h1>{g.nom}</h1>
                            <div className='map'>
                                {/* Récupération de l'id des livres possedent le genre donné */}
                                {tab.GL.map((gl) => {
                                    return (
                                        g.idG === gl.idG ?
                                        <div key={gl.idG}>
                                            {/* Affichage des données des livres avec un lien vers plus d'information sur le livre */}
                                            {tab.Livres.map((d) => {
                                                return (
                                                    gl.idL === d.id ?
                                                        <div key={d.id} className='info'>
                                                            <p>Titre : {d.titre}</p>
                                                            <Link to={`/Livre/${d.id}`}>Informations sur le livre</Link>
                                                        </div>   : null
                                                )
                                            })}
                                        </div> : null
                                    )
                                })}
                            </div>
                    </li> : null
                )}
            )}
          </div>;
  }
export default Genre