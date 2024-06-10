import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './hedaradmin';
import '../css/ViewConges.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Mangppoint() {
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(conges);
    useEffect(() => {
        axios.get('http://localhost:3000/api/poin/getall')
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
                <h2>View Pointages</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>idUser</th>
                            <th>Name</th>
                            <th> Heur D'entre</th>
                            <th> Heur De sortie</th>

                        </tr>
                    </thead>
                    <tbody>
                        {conges.map(conge => (
                            <tr key={conge.idUser}>
                                <td>{conge.idUser}</td>
                                <td>{conge.Name}</td>
                                <td>{conge.HeurEE}</td>
                                <td>{conge.HeurSS}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default Mangppoint;
