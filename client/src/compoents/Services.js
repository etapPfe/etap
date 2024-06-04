import React from 'react';
import Header from './Header';
import '../css/services.css'; // Make sure the path is correct
import Footer from './Footer';

function Services() {
    return (
        <div>
        <div className="services">
            <Header/>
            <h1>Services</h1>
            <ul>
                <li>La base de données pétrolière</li>
                <li>Les laboratoires</li>
                <li>Les études géologiques et géophysiques</li>
                <li>Les réservoirs</li>
            </ul>
            <p>Des moyens analytiques et techniques nécessaires à la réalisation d'études ciblées, ont été progressivement développés et mis en place.

La Base de Données Pétrolières et les Laboratoires avec toutes les technologies de pointe qui y sont développées, constituent des entités prestataires de services aussi bien pour le compte des différentes Directions Techniques (Exploration, Production, etc.), que pour le compte des tiers (Compagnies pétrolières, bureaux d'études, universités, etc.).

Ces entités, sont regroupées au Centre de Recherche et de Développement Pétrolier, spécialement conçu à cette fin. Dans ce cadre plusieurs compagnies pétrolières (Shell, OMV, BG Tunisia, Al Thani, PVEP, etc.) ont sollicité les compétences de l'ETAP en la matière.</p>
        </div>
        <Footer/>
        </div>
    );
}

export default Services;
