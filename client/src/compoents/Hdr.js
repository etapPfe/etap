import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backgroundPhoto from '../img/bgg.jpg'; // Import your background photo
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
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="nnav-buttons" >
            <NavLink to="/accc" className="nav-button" activeClassName="active">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </NavLink>
            <div className="nnav-menu">
                <NavLink to="/prof" className="nnav-button" activeClassName="active">Profile</NavLink>
                <div className="dropdown">
                    <button className="nn av-button dropdown-toggle" onClick={toggleDropdown}>
                        Options
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <NavLink to="/Pointage" className="dropdown-item" activeClassName="active">Pointage</NavLink>
                            <NavLink to="/Autorisation" className="dropdown-item" activeClassName="active">Autorisation</NavLink>
                            <NavLink to="/Pret" className="dropdown-item" activeClassName="active">Pret</NavLink>
                            <NavLink to="/Congé" className="dropdown-item" activeClassName="active">Congé</NavLink>
                            <NavLink to="/Salaire" className="dropdown-item" activeClassName="active">Salaire</NavLink>
                            <NavLink to="/Absence" className="dropdown-item" activeClassName="active">Absence</NavLink>

                        </div>
                    )}
                </div>
                <button onClick={logOut} className="nav-button">Logout</button>
            </div>
        </div>
    );
}

export default Headerrr;
