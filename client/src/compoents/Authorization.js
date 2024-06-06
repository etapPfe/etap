import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Auth.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import Footer from './Footer';
import Headerrr from './Hdr';

function Authorization() {

    const [startHour, setStartHour] = useState('');
    const [endHour, setEndHour] = useState('');
    const [reason, setReason] = useState('');
    const [authorizationType, setAuthorizationType] = useState('Type 1');
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(data,data,data);
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
                    setFormData({
                        ...formData,
                        id: res.data.id,
                        Name: res.data.Name
                    });
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
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('http://localhost:3000/api/autoris/add', {
            idUser: id,
            typeOtris: authorizationType,
            Raison: reason,
            HeurDD:startHour,
             HeurDS:endHour
          
          
        })
        .then(response => {
            console.log('Pret saved successfully:', response.data);
            // Add logic here for success, maybe show a success message or redirect
        })
        .catch(error => {
            console.error('Error saving pret:', error);
            // Add logic here for error, maybe show an error message
        });
    };
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;
    return (<div>
        <Headerrr/>
        <div className="Authorization">
            <form onSubmit={handleSubmit}>
                <h2>Authorization</h2>
                <label htmlFor="id">ID</label>
                <input placeholder='ID...' type="text" onChange={handleInput} value={id} id="id" name="id" required />
                <br />
                <label htmlFor="Name">Name</label>
                <input placeholder='Name...' type="text" onChange={handleInput} value={data.Name} id="name" name="name" required /> {/* Corrected ID and name */}
                <br />
                <label htmlFor="authorizationType">Authorization Type</label>
                <select
                    id="authorizationType"
                    value={authorizationType}
                    onChange={(e) => setAuthorizationType(e.target.value)} // Corrected onChange handler
                    required
                >
                    <option value=" Déplacement professionnel "> Déplacement professionnel</option>
                    <option value="  Heures supplementaires "> Heures supplementaires </option>
                    <option value="Accès sécurisé">Accès sécurisé </option>
                    <option value="Télétravail">Télétravail </option>
                    <option value="Formation">Formation</option>
                    <option value="Modification des  horaires">  Modification des  horaires</option>
                    <option value="Activités spécifiques"> Activités spécifiques </option>
                    <option value=" Publication ou  communication"> Publication ou  communication</option>

                </select><br />
                <label htmlFor="startHour">Start Hour</label>
                <input
                    type="time"
                    id="startHour"
                    value={startHour}
                    onChange={(e) => setStartHour(e.target.value)}
                    required
                />
                <label htmlFor="endHour">End Hour</label>
                <input
                    type="time"
                    id="endHour"
                    value={endHour}
                    onChange={(e) => setEndHour(e.target.value)}
                    required
                />
                <label htmlFor="reason">Reason</label>
                <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                />
                <button type="submit">Authorize</button>
            </form>
        </div>
<Footer/>
        </div>
    );
}

export default Authorization;
