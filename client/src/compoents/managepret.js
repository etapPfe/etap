import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './hedaradmin';
import '../css/ViewConges.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Mangpret() {
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(conges);
    useEffect(() => {
        axios.get('http://localhost:3000/api/pret/getall')
            .then(res => {
                setConges(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error fetching conges');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div>
            <Headerad />
            <div className="view-conges">
                <h2>View Prets</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>idUser</th>
                            <th>Name</th>
                            <th> Raison</th>
                            <th>Montant</th>
                            <th>Statu</th>

                        </tr>
                    </thead>
                    <tbody>
                        {conges.map(conge => (
                            <tr key={conge.idUser}>
                                <td>{conge.idUser}</td>
                                <td>{conge.Name}</td>
                                <td>{conge.Raison}</td>
                                <td>{conge.Montant}</td>
                                <td>{conge.Statu}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default Mangpret;
