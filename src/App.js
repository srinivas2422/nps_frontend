import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from './components/Buy';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Rent from './components/Rent';
// import Sample from './components/Sample';
import SignIn from './components/SignIn';
import Flat from './components/Flat';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit= () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    // Additional logic for signing out (e.g., clearing local storage, etc.)
  };
  return (
    <>
      <Router>
        <Navbar isAuthenticated={isAuthenticated}  handleSignOut={handleSignOut}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/buy" element={<Buy/>} />
          <Route path="/rent" element={<Rent/>} />
          <Route path='/signin' element={<SignIn onSignIn={handleSubmit} title="Sign In" btn="Sign In" />}/>
          <Route path='/signup' element={<SignIn onSignIn={handleSubmit} title="Sign Up" btn="Sign Up" />}/>
          <Route path="/rent/2bhkflat" element={<Flat/>} />
        </Routes>
        <Footer/>
      </Router>
      {/* <Sample/> */}
    </>
  );
}

export default App;
