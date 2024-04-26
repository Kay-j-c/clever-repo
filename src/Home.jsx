// HomePage.js
import React from 'react';
import Clock from './components/Date/Date';
import Header from './components/Header/Header';
import VideoUploader from './components/Video/Videouploader';
import About from './About';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Other content of your homepage */}
      <Clock/>
      <VideoUploader/>
    </div>
  );
}

export default Home;
