import React, { useState } from 'react';
import '../css/homePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SignUpBtn() {
    const navigate = useNavigate();

    const [signUp, setSignUp] = useState({
        Name: "",
        Email: "",
        Password: "",
        Type:"Technicien",
    });

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", signUp);
            console.log("User signed up:", response.data);
            // Optionally, redirect user after successful sign-up
            navigate("/signin");
        } catch (error) {
            console.log("Error during signup:", error);
            // Display error message to the user
        }
    };

    return (
        <div>
            <Header />
            <div className='signIn'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <label htmlFor="Name">Name</label>
                    <input type="text" onChange={handleInput} value={signUp.Name} id="name" name="Name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handleInput} value={signUp.Email} id="email" name="Email" required />

                    <label htmlFor="Type">Type:</label>
                <select id="type" name="Type" value={signUp.Type} onChange={handleInput}>
                    <option value="Directeur">Directeur</option>
                    <option value="Cadre">Cadre</option>
                    <option value="Technicien">Technicien</option>
                    <option value="Ouvrier">Ouvrier</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Service client">Service client</option>
                    <option value="Ingénieur">Ingénieur</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="Agent de sécurité">Agent de sécurité</option>
                    <option value="Stagiaire">Stagiaire</option>
                </select><br /><br />

                    <label htmlFor="Password">Password</label>
                    <input type="password" onChange={handleInput} value={signUp.Password} id="password" name="Password" required />
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account? <button onClick={() => navigate("/signin")}>Sign in</button></p>
            </div>
        </div>
    );
}

export default SignUpBtn;
