import React, { useState } from 'react';
import '../css/aaaab.css'; // Make sure the path is correct
import Header from './Hdr';
import Footer from './Footer';

function LandingPage() {
  const [selectedChoice, setSelectedChoice] = useState(null);

  // Replace this with your actual choices
  const choices = [
    'Choice 1',
    'Choice 2',
    'Choice 3',
    // ... add more choices as needed
  ];

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const getContent = () => {
    switch (selectedChoice) {
      case 'Choice 1':
        return <h2>Content for Choice 1</h2>;
      case 'Choice 2':
        return <h2>Content for Choice 2</h2>;
      case 'Choice 3':
        return <h2>Content for Choice 3</h2>;
      // ... Add more cases for additional choices
      default:
        return null;
    }
  };

  return ( <div>
      <Header/>
    
    <div id="landing-page">
      <h1>Welcome!</h1>

      <div className="choice-container">
        <ul className="choices">
          {choices.map((choice) => (
            <li key={choice} className="choice-item" onClick={() => handleChoiceClick(choice)}>
              {choice}
            </li>
          ))}
        </ul>
      </div>

      <div id="content-container">
        {getContent()}
      </div>
    </div>
    <Footer/>

    </div>
  );
}

export default LandingPage;
