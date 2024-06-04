import React from "react";
import style from "../css/footer.css";
import logoImage from '../img/image.png'; // Import your logo image



function Footer() {
 return (
         <div className='zaza'>
          <div className="container">
          <div className="row">
{/* Column1 */}
         <div className="col " >
      <div className="logo"><p>ETAP</p></div>        
      <p>54, Avenue Mohamed V - 1002 Tunis, Tunisie </p>
      <p>(+216) 71 28 53 00 (+216) 71 28 52 80 </p>
      <img src={logoImage} alt="Logo" className="log" />

   
           </div>
  {/* Column2 */}
          <div className="col">
            <p>About </p>
            <p>About ETAP</p>
            <p>Capital Humain</p>
            <p>Mission, Vision & Valeurs</p>
            <p>Orientations Stratégiques</p>
            <p>Filiales</p>
            <p>Chiffres Clés</p>
          </div>
 {/* Column3 */}
          <div className="col">
          <p>Accueil </p>
            <p>Appels D'offres </p>
            <p>Affiliate program</p>
            <p>Publications</p>
            <p>Liens Utiles</p>
            <p>Médiathèque</p>
            <p>Plan Du Site</p>
            <p>Contact</p>
          </div>
  


              </div>
              </div>
              




                </div>
  );
}


export default Footer;
