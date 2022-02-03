import React from 'react';
import { Link } from "react-router-dom";

// Tableau avec toute les tables nécessaire à l'affichage
const tab = {
    Utilisateurs: [
        {"idU":1,"nomUtilisateur":"Jäger","prenomUtilisateur":"Eren"},
        {"idU":2,"nomUtilisateur":"Ackerman","prenomUtilisateur":"Mikasa"},
        {"idU":3,"nomUtilisateur":"Arlert","prenomUtilisateur":"Armin"},
        {"idU":4,"nomUtilisateur":"Zoe","prenomUtilisateur":"Hansi"},
    ]
}

class Utilisateurs extends React.Component{
    render(){
        return(
            <div>
                <h1>Liste des utilisateurs</h1>
                <ol>
                    {/* Affichage des différents utilisateurs existant avec un lien vers celui-ci */}
                    {tab.Utilisateurs.map((u) => 
                        <li className='info' key={u.idU}>
                            <p>{u.prenomUtilisateur} {u.nomUtilisateur}</p>
                            <Link to={`/Bibliotheque/Utilisateur/${u.idU}`}>Bibliotheque du propriétaire</Link>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}
export default Utilisateurs