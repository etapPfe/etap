import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {jwtDecode} from "jwt-decode"; // Correct default import
import '../css/profile.css';
import Header from './Hdr';
import Footer from './Footer';

function Profile() {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});
console.log(id,'fffffffff');
console.log(data);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const data = localStorage.getItem("dataa");

    if (token) {
      try {
        const decoded = jwtDecode(token); // Try to decode the token
        console.log(decoded, 'decoded');
        console.log('decoddded', data);

        setId(decoded.Id);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/user/${id}`) // Correct template string
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  return (<div>
    <Header/>
    <div className='userInfo'>
      <img src={data.ImageUrl || 'placeholder.png'} alt="User" />
      <h3 className='userName'>{data.Name || 'Name not available'}</h3>
      <p className='userAddress'>{data.Email || 'Email not available'}</p><br />
     
    </div>
<Footer/>
    </div>
  );
}

export default Profile;
