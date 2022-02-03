import React from "react";
import './App.css';
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Utilisateurs from "./components/Utilisateurs";
import Livres from './components/Livres';
import Livre from "./components/Livre";
import Auteurs from "./components/Auteurs";
import Auteur from "./components/Auteur";
import Genres from "./components/Genres";
import Genre from "./components/Genre";
import Bibliotheque from "./components/Bibliotheque";

function App() {
  return (
    // Mise en relation des URLs et des components pour la gestion de l'affichage
    <Router>
      <Navbar />
       <Routes>
        <Route exact path="/" element={<Utilisateurs />} />
        <Route path="/Livres" element={<Livres />} />
        <Route path="/Auteurs" element={<Auteurs />} />
        <Route path="/Genres" element={<Genres />} />
        {/* Ajout du type de bibliotheque ainsi que de l'id à l'URL */}
        <Route path="/Bibliotheque/:type/:id" element={<Bibliotheque />} />
        {/* Ajout de l'id à l'URL */}
        <Route path="/Livre/:id" element={<Livre />} />
        <Route path="/Genre/:id" element={<Genre />} />
        <Route path="/Auteur/:id" element={<Auteur />} />
      </Routes>
    </Router>
  );
}

export default App;