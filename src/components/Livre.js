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
    ],
    Genres: [
        {"idG":1,"nom":"Roman"},
        {"idG":2,"nom":"Fable"},
        {"idG":3,"nom":"Fantasy"},
        {"idG":4,"nom":"Bande dessiné"},
        {"idG":5,"nom":"Recueil"},
    ],
    UL: [
        {"idU":1,"idL":5},
        {"idU":2,"idL":1},
        {"idU":3,"idL":2},
        {"idU":4,"idL":3},
        {"idU":4,"idL":4},
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

function Livre(){
    // On recupère l'id du livre à afficher
    let { id } = useParams();
    id = parseInt(id);
    return <div>
            {/* Recherche du livre à afficher via l'id que l'on a récupéré pour faire apparaitr ses informations */}
            {tab.Livres.map((d) => {
                return (
                    id === d.id ?
                    <li key={d.id} className='livre'>
                        <h1>{d.titre}</h1>
                        <div className='info'>
                            {/* Affichage des informations de l'auteur avec un lien vers son profil */}
                            {tab.Auteurs.map((a) => {
                                return (
                                    a.idA === d.idA ?
                                    <div key={a.idA} className='lien'>
                                        <Link to={`/Auteur/${a.idA}`}>{a.prenomAuteur} {a.nomAuteur}</Link>
                                        <Link to={`/Bibliotheque/Auteur/${a.idA}`}>Bibliotheque de l'auteur</Link>
                                    </div> : null
                                )
                            })}
                            {/* Récupération de l'id du genre du livre */}
                            <div className='ligne'>
                                {tab.GL.map((gl) => {
                                    return (
                                        id === gl.idL ?
                                        <div>
                                            {/* Affichage des genres du livre avec un lien vers le genre */}
                                            {tab.Genres.map((g) => {
                                                return (
                                                    g.idG === gl.idG ?
                                                    <div key={g.idG} className='lien'>
                                                        <Link to={`/Genre/${g.idG}`}>{g.nom}</Link>
                                                    </div> : null
                                                )
                                            })}
                                        </div> : null
                                    )
                                })}
                            </div>
                            {/* Récupération de l'id du propriétaire du livre pour afficher un lien vers sa bibliotheque */}
                            {tab.UL.map((ul) => {
                                return (
                                    id === ul.idL ?
                                    <div key={ul.idU} className='lien'>
                                        <Link to={`/Bibliotheque/Utilisateur/${ul.idU}`}>Bibliotheque du propriétaire</Link>
                                    </div> : null
                                )
                            })}
                        </div>
                    </li> : null
                )}
            )}
        </div>;
}
export default Livre