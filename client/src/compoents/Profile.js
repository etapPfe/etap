import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../css/profile.css';
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
      
      <div className='userInfo'>

        <img src={data.ImageUrl || 'placeholder.png'} alt="User" />
        <h3 className='userName'>{data.Type || 'Type not available'}</h3>
        <h3 className='userName'>{data.Name || 'Name not available'}</h3>
        <p className='userAddress'>{data.Email || 'Email not available'}</p><br />
        <button onClick={handleUpdateClick}>Update</button>
      <br/><br/>

      {showUpdateFields && (
        <div className='updateFields'>
          <input
            type="text"
            placeholder="New Name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="email"
            placeholder="New Email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          /> */}
          <label htmlFor="Type">Type:</label>
          <select
            id="type"
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
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
</div>
      <Footer />
    </div>
  );
}

export default Profile;
