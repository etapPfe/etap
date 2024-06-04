// QuiSommesNous.js

import React from 'react';
import '../css/quiSommesNous.css'
import Header from './Header';
import Footer from './Footer';

function Aprop() {
    return (
        <div className="page">
            <Header/>
            <div className="header">
                <h1>Qui Sommes-Nous ?</h1>
            </div>
            <div className="content">
                <section className="actualites">
                    <h2>Actualités</h2>
                    <div className="marquee">
                        <ul>
                            <li>25 oct. 2023 Forage du puits Chaal-2 (CHL-2)</li>
                            <li>3 janv. 2024 Avis de concours: Mastère Professionnel en Petroleum Production Engineering</li>
                            <li>1 juin 2024 Concours: Liste définitive des candidats admis</li>
                            <li>2 févr. 2023 PROJET PHOTOVOLTAÏQUE 10 MWc DE TATAOUINE</li>
                            <li>9 mars 2023 Accord de partenariat : ETAP & la Société Mauritanienne des Hydrocarbures</li>
                            <li>16 mars 2023 زيارة رئيس الجمهورية قيس سعيد لمقرّ المؤسسة التونسية للأنشطة البترولية</li>
                            <li>20 avr. 2023 ETAP-ENA امضاء اتفاقية تعاون وشراكة</li>
                            <li>16 juin 2023 Cérémonie de clôture des compétitions scolaires</li>
                            <li>9 sept. 2023 إعادة تشغيل حقل أوتيك</li>
                            <li>15 sept. 2023 Projet: « Pas d’élève sans cartable »</li>
                            <li>22 sept. 2023 ETAP à Bir Ali Ben Khelifa</li>
                        </ul>
                    </div>
                </section>
                <section className="quiSommesNous">
                    <h2>QUI SOMMES NOUS ?</h2>
                    <p>
                        L’Entreprise Tunisienne d’Activités Pétrolières «ETAP» a été créée en vertu de la Loi N° 72-22 du 10 Mars 1972, elle est entrée en activité effective en 1974 (déclaration d'existence du 01/07/1974 et inscription au Registre de Commerce du 16/07/1974). ETAP est classée conformément au Décret N° 97-564 du 31 mars 1997 parmi les établissements publics à caractère non administratif (EPNA), sous tutelle du Ministère de l’Industrie, des Mines et de l’Energie.
                    </p>
                    <p>Décret N° 73-173 du 16 Avril 1973.</p>
                    <p>Portant organisation et fonctionnement de l’ETAP</p>
                    <p>Décret N° 88-2050 du 19 Décembre 1988</p>
                
                    <p>Mis à jour le 15/02/2024 10:42</p>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default Aprop;
