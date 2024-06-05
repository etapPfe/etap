import React, { useState } from 'react';
import '../css/aaaab.css'; // Make sure the path is correct
import Header from './Hdr';
import Footer from './Footer';

function LandingPage() {
  const [selectedChoice, setSelectedChoice] = useState(null);

  // Replace this with your actual choices
  const choices = [
    'Choice 1',
    'Choice 2',
    'Choice 3',
    // ... add more choices as needed
  ];

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const getContent = () => {
    switch (selectedChoice) {
      case 'Choice 1':
        return <h2>Content for Choice 1</h2>;
      case 'Choice 2':
        return <h2>Content for Choice 2</h2>;
      case 'Choice 3':
        return <h2>Content for Choice 3</h2>;
      // ... Add more cases for additional choices
      default:
        return null;
    }
  };

  return ( <div>
  <div className='hahaha'>
      <Header/>
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
                            <li>3 janv. 2024 Avis de concours: Mastère Professionnel en Petroleum Production Engineering</li>
                            <li>1 juin 2024 Concours: Liste définitive des candidats admis</li>
                            <li>2 févr. 2023 PROJET PHOTOVOLTAÏQUE 10 MWc DE TATAOUINE</li>
                            <li>9 mars 2023 Accord de partenariat : ETAP & la Société Mauritanienne des Hydrocarbures</li>
                            <li>16 mars 2023 زيارة رئيس الجمهورية قيس سعيد لمقرّ المؤسسة التونسية للأنشطة البترولية</li>
                            <li>20 avr. 2023 ETAP-ENA امضاء اتفاقية تعاون وشراكة</li>
                        </ul>
                    </div>
                </section>
    <div id="landing-page">

      {/* <div className="choice-container">
        <ul className="choices">
          {choices.map((choice) => (
            <li key={choice} className="choice-item" onClick={() => handleChoiceClick(choice)}>
              {choice}
            </li>
          ))}
        </ul>
      </div> */}

      <div id="content-container">
        {getContent()}
      </div>
    </div>
    

    </div>
    <Footer/>
    </div>
  );
}

export default LandingPage;
