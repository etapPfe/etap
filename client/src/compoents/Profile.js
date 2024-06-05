import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Correct default import
import '../css/profile.css';
import Header from './Header'; // Ensure the file name matches exactly
import Footer from './Footer';
import Headerrr from './Hdr';

function Profile() {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(data);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const data = localStorage.getItem("dataa");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded, 'decoded');
        console.log('decoddded', data);
        setId(decoded.Id);
      } catch (error) {
        console.error('Invalid token:', error);
        setError('Invalid token');
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Headerrr />
      
      <div className='userInfo'>
        <img src={data.ImageUrl || 'placeholder.png'} alt="User" />
        <h3 className='userName'>{data.Type || 'Name not available'}</h3>
        <h3 className='userName'>{data.Name || 'Name not available'}</h3>

        <p className='userAddress'>{data.Email || 'Email not available'}</p><br />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
