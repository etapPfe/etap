import React, { useState } from 'react';
import '../css/homePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SignUpBtn() {
    const navigate=useNavigate()

    const [anchor, setAnchor] = useState(null);
    const [signUp, setSignUp] = useState({
        Name: "",
        email: "",
        password: ""
    });
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleClick = (event) => {
        navigate("/signin");

    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            [e.target.id]: e.target.value
        });
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await uploadImage();
    //         const response = await axios.post("http://localhost:3000/api/user/register", {
    //             ...signUp,
    //             picture: url
    //         });
    //         console.log("User signed up:", response.data);
    //     } catch (error) {
    //         console.log("Error during signup:", error);
    //     }
    // };

    return (
        <div>
            <Header/>
            <div className='signIn'>
               
                <form>
                    <h2>Sign up</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleInput} value={signUp.Name} id="Name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handleInput} value={signUp.email} id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleInput} value={signUp.password} id="password" name="password" required />
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account? <button onClick={handleClick}>Sign in</button></p>
            </div>
        </div>
    );
}

export default SignUpBtn;





