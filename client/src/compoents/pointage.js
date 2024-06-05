import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import '../css/Pointage.css';
import { FaSave, FaClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Headerrr from './Hdr';
import Footer from './Footer';

function Pointage() {
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [signUp, setSignUp] = useState({
        id: "",
        Name: "",
        HeureEntree: "",
        HeureSortie: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setId(decoded.Id);
            } catch (error) {
                console.error('Invalid token:', error);
                setError('Invalid token');
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/api/user/${id}`)
                .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setError('Error fetching user data');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.id]: e.target.value
        });
    };

    const handleTimeClick = (field) => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setSignUp({
            ...signUp,
            [field]: currentTime
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(signUp.HeureSortie);
        console.log(signUp.HeureEntree );
        console.log(data.Name);

        console.log(id);
        if (!signUp.HeureEntree || !signUp.HeureSortie) {
            // Validate form fields
            console.error('HeureEntree and HeureSortie are required');
            return;
        }
        if (!id || !data.Name) {
            // Validate form fields
            console.error('HeureEntree and HeureSortie are required');
            return;
        }
    
        axios.post('http://localhost:3000/api/poin/add', {
            idUser: id,
            Name: data.Name,
            HeurEE: signUp.HeureEntree,
            HeurSS: signUp.HeureSortie
        })
        .then(response => {
            console.log('Pointage saved successfully:', response.data);
            // Add logic here for success, maybe show a success message or redirect
        })
        .catch(error => {
            console.error('Error saving pointage:', error);
            // Add logic here for error, maybe show an error message
        });
    };
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Headerrr />
            <div className='Pointage'>
                <form style={{ width: 700 }} onSubmit={handleSubmit}>
                    <h2>Pointage</h2>
                    <label htmlFor="id">id</label>
                    <input placeholder='id...' type="text" onChange={handleInput} value={data.id} id="id" name="id" required />
                    <br />
                    <label htmlFor="Name">Name</label>
                    <input placeholder='Name...' type="Name" onChange={handleInput} value={data.Name} id="Name" name="Name" required />
                    <br />
                    <label htmlFor="HeureEntree">Heure d'entrée</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input placeholder='Entrée...' type="text" onChange={handleInput} value={signUp.HeureEntree} id="HeureEntree" name="HeureEntree" required />
                        <FaClock style={{ cursor: 'pointer', marginLeft: 5 }} onClick={() => handleTimeClick('HeureEntree')} />
                    </div>
                    <br />
                    <label htmlFor="HeureSortie">Heure de sortie</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input placeholder='Heure de sortie...' type="text" onChange={handleInput} value={signUp.HeureSortie} id="HeureSortie" name="HeureSortie" required />
                        <FaClock style={{ cursor: 'pointer', marginLeft: 5 }} onClick={() => handleTimeClick('HeureSortie')} />
                    </div>
                    <br /><br />
                    <button style={{ color: "black" }} type="submit">
                        <FaSave />
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Pointage;
