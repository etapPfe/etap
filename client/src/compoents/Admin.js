import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Headerrr from './Hdr';
import Headerad from './hedaradmin';
import backgroundPhoto from '../img/etap-696x400.png'; // Import your background photo

function Admin() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div>

            <br/> 
            <Headerad />
            <div   className="header" style={{ backgroundImage: `url(${backgroundPhoto})` }}> </div>

            <Footer />
        </div>
    );
}

export default Admin;
