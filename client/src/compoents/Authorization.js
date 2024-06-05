import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Auth.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import Footer from './Footer';
import Headerrr from './Hdr';

function Authorization() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [startHour, setStartHour] = useState('');
    const [endHour, setEndHour] = useState('');
    const [reason, setReason] = useState('');
    const [authorizationType, setAuthorizationType] = useState('Type 1');
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setId(decoded.id); // Corrected property name
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
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authorization logic here
    };
    
    return (<div>
        <Headerrr/>
        <div className="Authorization">
            <form onSubmit={handleSubmit}>
                <h2>Authorization</h2>
                <label htmlFor="id">ID</label>
                <input placeholder='ID...' type="text" onChange={handleInput} value={data.id} id="id" name="id" required />
                <br />
                <label htmlFor="Name">Name</label>
                <input placeholder='Name...' type="text" onChange={handleInput} value={data.name} id="name" name="name" required /> {/* Corrected ID and name */}
                <br />
                <label htmlFor="authorizationType">Authorization Type</label>
                <select
                    id="authorizationType"
                    value={authorizationType}
                    onChange={(e) => setAuthorizationType(e.target.value)} // Corrected onChange handler
                    required
                >
                    <option value="Type 1">Type 1</option>
                    <option value="Type 2">Type 2</option>
                    <option value="Type 3">Type 3</option>
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
