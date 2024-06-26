import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeScreen from './features/WelcomeScreen';

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleAnimationComplete = () => {
    setShowWelcomeScreen(false);
  };

  return (
    <>
      {/* Welcome screen */}
      {showWelcomeScreen && <WelcomeScreen onAnimationComplete={handleAnimationComplete} />}
      
      {/* Main content */}
      {!showWelcomeScreen && (
        <div>
          <Header/>
          <Home />
          <About />
          <Skills/>
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
