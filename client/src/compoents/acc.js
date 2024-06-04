import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundPhoto from '../img/etap-696x400.png'; // Import your background photo
import '../css/Header.css'; // Import CSS file
import Header from './Header';
import Footer from './Footer';

function ACC() {
    const logOut = () => {
        localStorage.removeItem("jwtToken");
    }

    return (
        
        <div>

            <div   className="header" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
                

                
            </div>
       

        </div>
    );
    
}

export default ACC;
