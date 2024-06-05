import React, { useState } from 'react';
import '../css/Pointage.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { FaSave } from "react-icons/fa";

function Autorisation() {
    const navigate = useNavigate();

    const [anchor, setAnchor] = useState(null);
    const [signUp, setSignUp] = useState({
        employeeId: "",
        authorizationType: "",
        entryTime: "",
        reason: ""
    });

    const handleClick = (event) => {
        navigate("/signin");
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <Header />
            <div className='Pointage'>
                <form style={{ width: 700 }}>
                    <h2>Demande d'autorisation</h2>
                    <label htmlFor="employeeId">ID Employé</label>
                    <input
                        placeholder='Id...'
                        type="text"
                        onChange={handleInput}
                        value={signUp.employeeId}
                        id="employeeId"
                        name="employeeId"
                        required
                    />
                    <br></br>
                    <label htmlFor="authorizationType">Type d'Autorisation</label>
                    <select
                        onChange={handleInput}
                        value={signUp.authorizationType}
                        id="authorizationType"
                        name="authorizationType"
                        style={{width:700, height:40}}
                        required
                    >
                        <option value="">Sélectionner...</option>
                        <option value="Modification des horaires">Modification des horaires</option>
                        <option value="Déplacement professionnel">Déplacement professionnel</option>
                        <option value="Heures supplémentaires">Heures supplémentaires</option>
                        <option value="Accès sécurisé">Accès sécurisé</option>
                        <option value="Télétravail">Télétravail</option>
                        <option value="Formation">Formation</option>
                        <option value="Utilisation de ressources">Utilisation de ressources</option>
                        <option value="Activités spécifiques">Activités spécifiques</option>
                        <option value="Publication ou communication">Publication ou communication</option>
                    </select>
                    <br></br> <br></br>
                    <label htmlFor="entryTime">Heure de Début</label>
                    <input
                        placeholder='Heure de Début...'
                        type="text"
                        onChange={handleInput}
                        value={signUp.entryTime}
                        id="entryTime"
                        name="entryTime"
                        required
                    />
                    <br></br>
                    <label htmlFor="reason">Heure de Fin</label>
                    <input
                        placeholder='Heure de Fin...'
                        type="text"
                        onChange={handleInput}
                        value={signUp.reason}
                        id="reason"
                        name="reason"
                        required
                    />
                      <label htmlFor="entryTime">Raison</label>
                    <input
                        placeholder='Raison...'
                        type="text"
                        onChange={handleInput}
                        value={signUp.entryTime}
                        style={{height:70}}
                        id="entryTime"
                        name="entryTime"
                        required
                    />
                    <br></br><br></br>
                    <button style={{ color: "black" }} type="submit">
                       Demander
                    </button>
                </form>
                <br></br>
                <p>Already have an account? <button onClick={handleClick}>Sign in</button></p>
            </div>
        </div>
    );
}

export default Autorisation;