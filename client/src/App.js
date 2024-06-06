import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './compoents/Header'; // Correct the path
import SignUpBtn from './compoents/SignUpBtn';
import SignInBtn from './compoents/SignInBtn';
import ACC from './compoents/acc';
import Footer from './compoents/Footer';
import Services from './compoents/Services';
import Aprop from './compoents/Aprop';
import AAC from './compoents/acceuil';
import Profile from './compoents/Profile';
import Pointage from './compoents/pointage';
import Pret from './compoents/Pret';
import Authorization from './compoents/Authorization';
import Conge from './compoents/conge';
import Absence from './compoents/Absence';

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
          <Route path="/accc" element={< AAC />} />
          <Route path="/prof" element={< Profile />} />
          <Route path="/Pointage" element={< Pointage />} />
          <Route path="/Pret" element={< Pret />} />
          <Route path="/Authorization" element={< Authorization/>} />
          <Route path="/Congé" element={< Conge/>} />
          <Route path="/Absence" element={< Absence/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );



  function AccPage() {
    return (
      <>
        <Header />
        <br/>
        <ACC />

        <Footer />


      </>
    );
  }
}

export default App;
