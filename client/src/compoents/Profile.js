import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../css/profile.css'; // You can remove this line if you're using Bootstrap for styling
import Header from './Header';
import Footer from './Footer';
import Headerrr from './Hdr';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedImageUrl, setUpdatedImageUrl] = useState(null);
  const [updatedType, setUpdatedType] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const localData = localStorage.getItem("dataa");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded, 'decoded');
        console.log('decoddded', localData);
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
    }
  }, [id]);

  const handleUpdateClick = () => {
    setShowUpdateFields(!showUpdateFields);
  };

  const handleFileChange = (e) => {
    setUpdatedImageUrl(e.target.files[0]);
  };

  const handleSaveClick = () => {
   

    axios.put(`http://localhost:3000/api/user/${id}`,{
      Name:updatedName || data.Name,
      Type:updatedType || data.Type,
      Email:updatedEmail || data.Email,
      ImageUrl:updatedImageUrl || data.ImageUrl
     
    })
    .then(res => {
      setData(res.data);
      setShowUpdateFields(false);
      window.location.reload()

    })
    .catch(err => {
      console.error(err);
      setError('Error updating user data');
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Headerrr />
      
      <div className='container mt-5'> {/* Apply Bootstrap container class */}
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <img src={data.ImageUrl || 'placeholder.png'} className='card-img-top' alt='User' />
              <div className='card-body'>
                <h3 className='card-title text-center'>{data.Name || 'Name not available'}</h3>
                <p className='card-text text-center'>{data.Email || 'Email not available'}</p>
                <p className='card-text text-center'>{data.Type || 'Type not available'}</p>
                <button className='btn btn-primary btn-block' onClick={handleUpdateClick}>Update</button>
              </div>
              {showUpdateFields && (
                <div className='card-body'>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="New Name"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="New Email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                  <label htmlFor="Type">Type:</label>
                  <select
                    id="type"
                    className="form-control mb-2"
                    name="Type"
                    value={updatedType}
                    onChange={(e) => setUpdatedType(e.target.value)}
                  >
                    <option value="Directeur">Directeur</option>
                    <option value="Cadre">Cadre</option>
                    <option value="Technicien">Technicien</option>
                    <option value="Ouvrier">Ouvrier</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Service client">Service client</option>
                    <option value="Ingénieur">Ingénieur</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Agent de sécurité">Agent de sécurité</option>
                    <option value="Stagiaire">Stagiaire</option>
                  </select>
                  <button className='btn btn-success btn-block' onClick={handleSaveClick}>Save</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
