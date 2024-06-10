import React from 'react';
import backgroundPhoto from '../img/bgg.jpg'; // Import your background photo
import logoImage from '../img/logo-footer.png'; // Import your logo image
import '../css/Header.css'; // Import CSS file
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("jwtToken");
    }

    return (
        <div className="nav-buttons">
            <NavLink to="/" className="nav-button" activeClassName="active">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </NavLink>
            <div>
                <NavLink to="/Aprop" className="nav-button" activeClassName="active">A props</NavLink>
                <NavLink to="/Services" className="nav-button" activeClassName="active">Service</NavLink>
                <NavLink to="/signin" className="nav-button" activeClassName="active">Sign In</NavLink>
                <NavLink to="/SignUpBtn" className="nav-button" activeClassName="active">Sign Up</NavLink>
            </div>
        </div>
    );
}

export default Header;
