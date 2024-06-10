import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../img/logo-footer.png'; // Import your logo image
import '../css/Headerrr.css'; // Import CSS file

function Headerrr() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const logOut = () => {
        localStorage.removeItem("jwtToken");
        navigate("/");
    }

    const toggleDropdown = () => {
        console.log("Toggling dropdown"); // Check if this message appears in the console
        setDropdownOpen(!dropdownOpen);
        console.log("Dropdown open:", dropdownOpen); // Check the current value of dropdownOpen
    }
    

    return (
        <div className="nnav-buttons">
            <NavLink to="/accc" className="nav-button" activeClassName="active">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </NavLink>
            <div className="header-container">
                




                <NavLink to="/Pointage" className="option-link" activeClassName="active">Pointage</NavLink>
                <NavLink to="/Authorization" className="option-link" activeClassName="active">Autorisation</NavLink>
                <NavLink to="/Pret" className="option-link" activeClassName="active">Pret</NavLink>
                <NavLink to="/Congé" className="option-link" activeClassName="active">Congé</NavLink>
                <NavLink to="/Salaire" className="option-link" activeClassName="active">Salaire</NavLink>
                <NavLink to="/Absence" className="option-link" activeClassName="active">Absence</NavLink>
            </div>
            {/* Individual option links */}
            <div className="options-menu">
            <NavLink to="/prof" className="nav-button" activeClassName="active">Profile</NavLink>
            <button onClick={logOut} className="nav-button">Logout</button>
            </div>
        </div>
    );
}

export default Headerrr;
