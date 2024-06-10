import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import Footer from './Footer';
import Headerrr from './Hdr';


function calculateSalary(type) {
    const salaryLookup = {
        'Directeur': {
            baseSalary: 2500,
            primes: 500,
            heuresSupplementaires: 200,
            deductions: 300,
            netAPayer: 2700
        },
        'Cadre': {
            baseSalary: 1500,
            primes: 200,
            heuresSupplementaires: 100,
            deductions: 100,
            netAPayer: 1700
        },
        'Technicien': {
            baseSalary: 1200,
            primes: 150,
            heuresSupplementaires: 50,
            deductions: 80,
            netAPayer: 1320
        },
        'Ouvrier': {
            baseSalary: 1000,
            primes: 100,
            heuresSupplementaires: 50,
            deductions: 70,
            netAPayer: 1080
        },
        'Commercial': {
            baseSalary: 1300,
            primes: 300,
            heuresSupplementaires: 80,
            deductions: 120,
            netAPayer: 1560
        },
        'Service client': {
            baseSalary: 1100,
            primes: 100,
            heuresSupplementaires: 70,
            deductions: 90,
            netAPayer: 1180
        },
        'Ingénieur': {
            baseSalary: 2000,
            primes: 400,
            heuresSupplementaires: 150,
            deductions: 200,
            netAPayer: 2350
        },
        'Maintenance': {
            baseSalary: 1300,
            primes: 200,
            heuresSupplementaires: 100,
            deductions: 150,
            netAPayer: 1450
        },
        'Agent de sécurité': {
            baseSalary: 1100,
            primes: 100,
            heuresSupplementaires: 50,
            deductions: 80,
            netAPayer: 1170
        },
        'Stagiaire': {
            baseSalary: 0,
            primes: 0,
            heuresSupplementaires: 0,
            deductions: 0,
            netAPayer: 0
        }
    };

    return salaryLookup[type] || {
        baseSalary: 1200,
        primes: 100,
        heuresSupplementaires: 50,
        deductions: 150,
        netAPayer: 1200
    };
}

function EmployeeProfile() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        userId: '',
        name: '',
    });

    const navigate = useNavigate();

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
        const fetchData = async () => {
            try {
                if (formData.userId) {
                    const res = await axios.get(`http://localhost:3000/api/user/${formData.userId}`);
                    setData(res.data);
                    setFormData((prevData) => ({
                        ...prevData,
                        name: res.data.Name
                    }));
                }
            } catch (error) {
                console.error(error);
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [formData.userId]);

    const { baseSalary, primes, heuresSupplementaires, deductions, netAPayer } = calculateSalary(data.Type);

    return (
        <div>
            <Headerrr />
            <div style={{ margin: '50px auto', maxWidth: '800px' }}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div>
                        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Employee Profile</h1>
                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <div style={{ flex: '1', marginRight: '20px' }}>
                                <h2>Personal Information</h2>
                                <p><strong>Nom:</strong> {formData.name}</p>
                                <p><strong>Poste:</strong> {data.Type}</p>
                            </div>
                            <div style={{ flex: '1' }}>
                                <h2>Salary Information</h2>
                                <div>
                                    <p><strong>Salaire de base:</strong> {baseSalary} TND</p>
                                    <p><strong>Primes:</strong> {primes} TND</p>
                                    <p><strong>Heures supplémentaires:</strong> {heuresSupplementaires} TND</p>
                                    <p><strong>Déductions:</strong> {deductions} TND</p>
                                    <p><strong>Net à payer:</strong> {netAPayer} TND</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={() => window.history.back()}>Retour</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default EmployeeProfile;