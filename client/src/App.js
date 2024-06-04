import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './compoents/Header'; // Correct the path
import SignUpBtn from './compoents/SignUpBtn';
import SignInBtn from './compoents/SignInBtn';
import ACC from './compoents/acc';
import Footer from './compoents/Footer';
import Services from './compoents/Services';
import Aprop from './compoents/Aprop';

// Declare AccPage outside of App for better readability and performance


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccPage />} />
          <Route path="/SignUpBtn" element={<SignUpBtn />} />
          <Route path="/signin" element={<SignInBtn />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Aprop" element={< Aprop />} />


        </Routes>
      </BrowserRouter>
    </div>
  );



  function AccPage() {
    return (
      <>
        <Header />
        <ACC />

        <Footer />


      </>
    );
  }
}

export default App;
