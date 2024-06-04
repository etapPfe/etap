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
      const url="http://localhost:3000/api/admin/login"
     const handleClick = (event) => {
      navigate("/SignUpBtn");

  };

  const open = Boolean(anchor);
  const _id = open ? 'simple-popper' : undefined;

  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setSignIn({
      ...signIn,
      [e.target.id]: e.target.value
    });
  };
const handleSubmit = () => {
    axios.post(url, signIn)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem("jwtToken", token);
            console.log("Token stored in local storage:", token);
            navigate("/Admin"); // Redirect to login page after successful login
        })
        .catch(err => {
            console.log(err);
            // If admin login fails, attempt user login
            axios.post("http://localhost:3000/api/user/login", signIn)
                .then((res) => {
                    const token = res.data.token;
                    localStorage.setItem("jwtToken", token);
                    console.log("Token Stored in the local storage", token);
                    // Redirect to login page after successful login
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        });
};


  return (
<div>
      
<Header/>
        <div className='signIn'>
          <form onSubmit={()=>{handleSubmit()}}>
            <h2>Sign in</h2>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleInput} value={signIn.email} id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleInput} value={signIn.password} id="password" name="password" required />
            <button type="submit" className='signInBtn'>Sign in</button>
          </form>
          <p>if you dont have a accunt <button onClick={handleClick}>Sign up</button></p>
        </div>
    
    </div>
  );
}

export default SignInBtn