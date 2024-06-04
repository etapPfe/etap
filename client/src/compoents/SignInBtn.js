import React, { useState } from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css';
import axios from 'axios';
import backgroundPhoto from '../img/bgg.jpg'; // Import your background photo

import { useNavigate } from 'react-router-dom';
import Header from './Header';
function SignInBtn() {
     const [anchor, setAnchor] = useState(null);
     const navigate=useNavigate()
     const handleClick = (event) => {
      navigate("/SignUpBtn");

  };

  const open = Boolean(anchor);
  const _id = open ? 'simple-popper' : undefined;

  const [signIn, setSignIn] = useState({
    Email: "",
    Password: ""
  });

  const handleInput = (e) => {
    setSignIn({
      ...signIn,
      [e.target.id]: e.target.value
    });
  };
const handleSubmit = () => {
  axios.post("http://localhost:3000/api/auth/login", signIn)
  .then((res) => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      console.log("Token Stored in the local storage", token);
      // Redirect to login page after successful login
      // navigate("/");
  })
                .catch((err) => {
                    console.log(err);
                });
     
};


  return (
<div>
      
<Header/>
        <div className='signIn'>
          <form onSubmit={()=>{handleSubmit()}}>
            <h2>Sign in</h2>
            <label htmlFor="Email">Email</label>
            <input type="email" onChange={handleInput} value={signIn.Email} id="email" name="Email" required />
            <label htmlFor="Password">Password</label>
            <input type="password" onChange={handleInput} value={signIn.Password} id="password" name="Password" required />
            <button type="submit" className='signInBtn'>Sign in</button>
          </form>
          <p>if you dont have a accunt <button onClick={handleClick}>Sign up</button></p>
        </div>
    
    </div>
  );
}

export default SignInBtn