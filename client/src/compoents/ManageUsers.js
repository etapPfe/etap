import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './hedaradmin';
import '../css/ViewConges.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ManageUsers() {
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/')
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
                <h2>View Users</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conges.map(conge => (
                            <tr key={conge.id}>
                                <td>{conge.Name}</td>
                                <td>{conge.Type}</td>
                                <td>{conge.Email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default ManageUsers;
