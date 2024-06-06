import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import '../css/Pret.css';
import { FaSave, FaImage } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Headerrr from './Hdr';
import Footer from './Footer';

function Pret() {
    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        id: "",
        Name: "",
        Amount: "",
        Raison: "",
        Image1: "",
        Image2: "",
        ExtraField1: "",
        ExtraField2: ""
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
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({
                ...formData,
                [e.target.id]: reader.result
            });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.Amount || !formData.Raison || !formData.Image1 || !formData.Image2 || !formData.ExtraField1 || !formData.ExtraField2) {
            console.error('All fields are required');
            return;
        }

        axios.post('http://localhost:3000/api/pret/add', {
            idUser: id,
            Name: data.Name,
            Montant: formData.Amount,
            Raison: formData.Raison,
          
          
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Headerrr />
            <div className='Pret'>
                <form style={{ width: 700 }} onSubmit={handleSubmit}>
                    <h2>Demande de Pret</h2>
                    <label htmlFor="id">ID</label>
                    <input type="text" onChange={handleInput} value={data.id} id="id" name="id" required disabled />
                    <br />
                    <label htmlFor="Name">Name</label>
                    <input type="text" onChange={handleInput} value={data.Name} id="Name" name="Name" required disabled />
                    <br />
                    <label htmlFor="Amount">Amount</label>
                    <input type="number" onChange={handleInput} value={formData.Amount} id="Amount" name="Amount" required />
                    <br />
                    <label htmlFor="Raison">Raison</label>
                    <input type="text" onChange={handleInput} value={formData.Date} id="Raison" name="Raison" required />
                    <br />
                    <label htmlFor="Image1">justification de revenus</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="file" onChange={handleImageUpload} id="Image1" name="Image1" required />
                        {formData.Image1 && <FaImage style={{ cursor: 'pointer', marginLeft: 5 }} />}
                    </div>
                    <br />
                    <label htmlFor="Image2">documentation  d'identite</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="file" onChange={handleImageUpload} id="Image2" name="Image2" required />
                        {formData.Image2 && <FaImage style={{ cursor: 'pointer', marginLeft: 5 }} />}
                    </div>
                    <br />
                    <label htmlFor="ExtraField1">garantie</label>
                    <input type="text" onChange={handleInput} value={formData.ExtraField1} id="ExtraField1" name="ExtraField1" required />
                    <br />
                    <label htmlFor="ExtraField2">accord de remboursemenet</label>
                    <input type="text" onChange={handleInput} value={formData.ExtraField2} id="ExtraField2" name="ExtraField2" required />
                    <br /><br />
                    <button style={{ color: "black" }} type="submit">
                        Demande
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Pret;
