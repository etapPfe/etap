import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Auth.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import
import Footer from './Footer';
import Headerrr from './Hdr';

function Conge() {
    const [formData, setFormData] = useState({
        userId: '',
        name: '',
        typeConge: '',
        startDate: '',
        endDate: '',
        reason: ''
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setFormData((prevData) => ({ ...prevData, userId: decoded.Id }));
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
        if (formData.userId) {
            axios.get(`http://localhost:3000/api/user/${formData.userId}`)
                .then(res => {
                    setFormData((prevData) => ({
                        ...prevData,
                        name: res.data.Name
                    }));
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
    }, [formData.userId]);

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
console.log(formData);
        axios.post('http://localhost:3000/api/Absence/add', {
            idUser: formData.userId,
          
            Raison: formData.reason,
            DATE: formData.startDate,
           
            Name:formData.name
        })
        .then(response => {
            navigate("/accc");

            console.log('Conge saved successfully:', response.data);
            // Add logic here for success, maybe show a success message or redirect
        })
        .catch(error => {
            console.error('Error saving conge:', error);
            // Add logic here for error, maybe show an error message
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Headerrr />
            <div className="Authorization">
                <form onSubmit={handleSubmit}>
                    <h2>Declaration d'absence</h2>
                    <label htmlFor="userId">User ID</label>
                    <input
                        placeholder='User ID...'
                        type="text"
                        onChange={handleInput}
                        value={formData.userId}
                        id="userId"
                        name="userId"
                        required
                    />
                    <br />
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder='Name...'
                        type="text"
                        onChange={handleInput}
                        value={formData.name}
                        id="name"
                        name="name"
                        required
                    />
                    <br />
                   
                    <label htmlFor="startDate"> Date d'absence</label>
                    <input
                        type="date"
                        id="startDate"
                        value={formData.startDate}
                        onChange={handleInput}
                        required
                    />
                   
                    <label htmlFor="reason">Reason</label>
                    <textarea
                        id="reason"
                        value={formData.reason}
                        onChange={handleInput}
                        required
                    />
                    <button type="submit">Demande</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Conge;
