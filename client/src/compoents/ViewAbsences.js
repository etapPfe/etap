import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './hedaradmin';
import '../css/ViewConges.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ViewAbsences() {
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(conges);
    useEffect(() => {
        axios.get('http://localhost:3000/api/Absence/getall')
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
                <h2>View Absences</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>idUser</th>
                            <th>Name</th>
                            <th> Date</th>
                            <th>Raison</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conges.map(conge => (
                            <tr key={conge.idUser}>
                                <td>{conge.idUser}</td>
                                <td>{conge.Name}</td>
                                <td>{conge.DATE}</td>
                                <td>{conge.Raison}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default ViewAbsences;
