import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import backgroundPhoto from '../img/bgg.jpg'; // Import your background photo
import logoImage from '../img/logo-footer.png'; // Import your logo image
import '../css/Header.css'; // Import CSS file

function Headerad() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("jwtToken");
        navigate("/");
    }

    return (
        <div className="nav-buttons">
            <NavLink to="/admin" className="nav-button" activeClassName="active">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </NavLink>
            <div>
                <NavLink to="/manage-users" className="nav-button" activeClassName="active">Users</NavLink>
                <NavLink to="/view-absences" className="nav-button" activeClassName="active">Absences</NavLink>
                <NavLink to="/view-conges" className="nav-button" activeClassName="active">Conges</NavLink>
                <NavLink to="/Mangpret" className="nav-button" activeClassName="active">prets</NavLink>
                <NavLink to="/Mangppoint" className="nav-button" activeClassName="active">Pointage</NavLink>
                <button onClick={logOut} className="nav-button">Logout</button>

            </div>
        </div>
    );
}

export default Headerad;
