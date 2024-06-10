import React, { useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css';
import axios from 'axios';
import backgroundPhoto from '../img/bgg.jpg'; // Import your background photo

import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SignInBtn() {
  const [anchorEl, setAnchorEl] = useState(null); // Corrected variable naming
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate("/SignUpBtn");
  };

  const [signInData, setSignInData] = useState({
    Email: '', // Use lowercase 'Email' for consistency
    Password: '',
  });

  const handleInput = (event) => {
    setSignInData({
      ...signInData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    if ( signInData.Email==="admin@admin" &&
      signInData.Password==="admin"){  
    
        navigate('/admin'); // Assuming successful login redirects to home page
    
      }
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', signInData);
     
      const token = response.data.token;
      const idd = response.data.id;
      const dataa = response.data;

      localStorage.setItem('jwtToken', token);
      localStorage.setItem('dataa', dataa);

      console.log('Token Stored in Local Storage:', token);
      console.log('dataa',dataa);
      navigate('/accc');
      // Assuming successful login redirects to home page
    } catch (error) {
      console.error('Login Error:', error);
      // Implement error handling (e.g., display error message to user)
    }
  };

  return (
    <div className="sign-in-container"> 
      <Header />

      <div className="signIn"> 
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="Email">Email</label> 
          <input
            type="Email"
            id="Email"
            name="Email"
            value={signInData.Email}
            onChange={handleInput}
            required
            placeholder="Enter your Email address"  
          />
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            id="Password"
            name="Password"
            value={signInData.Password}
            onChange={handleInput}
            required
          />
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>

        <p>
          Don't have an account?{' '}
          <button onClick={handleClick} className="sign-up-btn">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignInBtn;













