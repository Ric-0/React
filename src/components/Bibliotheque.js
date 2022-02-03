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
    Utilisateurs: [
        {"idU":1,"nomUtilisateur":"Jäger","prenomUtilisateur":"Eren"},
        {"idU":2,"nomUtilisateur":"Ackerman","prenomUtilisateur":"Mikasa"},
        {"idU":3,"nomUtilisateur":"Arlert","prenomUtilisateur":"Armin"},
        {"idU":4,"nomUtilisateur":"Zoe","prenomUtilisateur":"Hansi"},
    ],
    UL: [
        {"idU":1,"idL":5},
        {"idU":2,"idL":1},
        {"idU":3,"idL":2},
        {"idU":4,"idL":3},
        {"idU":4,"idL":4},
    ]
}

function Bibliotheque(){
    // On récupere le type de bibliotheque à afficher avec l'id correspondant
    let { type, id } = useParams();
    id = parseInt(id);
    return <div>
            {/* Si le type reçu est "Auteur", on affiche la bibliotheque de l'auteur */}
            {type === "Auteur" ?
                <div>
                    {/* Recherche et affichage du nom et prenom de l'auteur */}
                    {tab.Auteurs.map((a) => {
                        return(
                            id === a.idA ?
                                <div key={id}>
                                    <h1>Bibliotheque de l'{type} : {a.prenomAuteur} {a.nomAuteur}</h1>
                                </div> : null
                        )
                    })}
                    {/* On parcours le tableau "Livres" pour afficher ceux ecrit par l'auteur */}
                    <div className='map'>
                        {tab.Livres.map((d) => {
                            return (
                                id === d.idA ?
                                <div key={d.id} className='info'>
                                    <p>{d.titre}</p>
                                    <Link to={`/Livre/${d.id}`}>Informations sur le livre</Link>
                                </div> : null
                            )
                        })}
                    </div>
                </div> : null
            }
            {/* Si le type reçu est "Utilisateur", on affiche la bibliotheque de l'utilisateur */}
            {type === "Utilisateur" ?
                <div>
                    {/* Recherche et affichage du nom et prenom de l'utilisateur */}
                    {tab.Utilisateurs.map((u) => {
                        return (
                            id === u.idU ?
                                <div key={id}>
                                    <h1>Bibliotheque de l'{type} : {u.prenomUtilisateur} {u.nomUtilisateur}</h1>
                                </div> : null
                        )
                    })}
                    {/* On parcours le tableau qui fait le lien entre un utilisateur et un livre pour afficher uniquement ceux posséder par l'utilisateur */}
                    <div>
                        {tab.UL.map((ul) => {
                            return (
                                id === ul.idU ?
                                <div key={id} className='map'>
                                    {/* Affichage des informations d'un livre avec un lien vers le livre pour plus d'informations */}
                                    {tab.Livres.map((d) => {
                                        return (
                                            ul.idL === d.id ?
                                            <div key={d.id} className='info'>
                                                <p>{d.titre}</p>
                                                <Link to={`/Livre/${d.id}`}>Informations sur le livre</Link>
                                            </div> : null
                                        )
                                    })}
                                </div> : null
                            )
                        })}
                    </div>
                </div> : null
            }
          </div>;
  }
export default Bibliotheque