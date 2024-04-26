// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Home from './Home';
import About from './About'; // Import the About component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <>
        {showLogin ? <LoginPopup /> : <></>}
        <div className='app'>
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Define route for About component */}
          </Routes>
        </div>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
