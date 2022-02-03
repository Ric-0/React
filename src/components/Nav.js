import React from 'react';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

// Affichage du menu de navigation et lien vers les différentes listes du site
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Home
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/">
                    Utilisateurs
                </NavLink>
                <NavLink to="/Livres">
                    Livres
                </NavLink>
                <NavLink to="/Auteurs">
                    Auteurs
                </NavLink>
                <NavLink to="/Genres">
                    Genres
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar