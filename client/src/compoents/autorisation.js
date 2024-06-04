import React, { useState } from 'react';
import '../css/Pointage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaSave } from "react-icons/fa";



function Pointage() {
    const navigate=useNavigate()

    const [anchor, setAnchor] = useState(null);
    const [signUp, setSignUp] = useState({
        Name: "",
        email: "",
        password: ""
    });
    const [image, setImage] = useState(null);
  

    const handleClick = (event) => {
        navigate("/signin");

    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.id]: e.target.value
        });
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };



    return (
        <div>
            <Header/>
            <div className='Pointage'>
               
                <form   style={{width:700}}>
                    <h2>Pointage</h2>
                    <label htmlFor="name">ID Employé</label>
                    <input  placeholder='Id...' type="text" onChange={handleInput} value={signUp.Name} id="ID Employé" name="ID Employé" required />
                    <br></br>
                    <label htmlFor="email">Mot de passe</label>
                    <input placeholder='email...' type="email" onChange={handleInput} value={signUp.email} id="Mot de passe" name="Mot de passe" required />
                    <br></br>
                    <label htmlFor="password">Heure d'entrée</label>
                    <input   placeholder='Entrée...' type="password" onChange={handleInput} value={signUp.password} id="Heure d'entrée" name="Heure d'entrée" required />
                    <br></br>
                    <label htmlFor="password">Heure de sortie</label>
                    <input placeholder='sortie...' type="password" onChange={handleInput} value={signUp.password} id="sortie" name="Heure de sortie" required />
                   
                    <br></br><br></br>
                    <button style={{color:"black"}} type="submit">
                    <FaSave />
                    </button>
                </form>
                <br></br>
                <p>Already have an account? <button onClick={handleClick}>Sign in</button></p>
            </div>
        </div>
    );
}

export default Pointage;