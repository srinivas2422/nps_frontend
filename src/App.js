import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from './components/Buy';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Rent from './components/Rent';
import SignIn from './components/SignIn';
import Flat from './components/Flat';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const handleSubmit= (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
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
          <Route path="/profile" element={<Profile user={user} isAuthenticated={isAuthenticated}/>} />
          <Route path="/rent/property/:id"  element={<Flat isAuthenticated={isAuthenticated} />}/>
          <Route path="/about" element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
      {/* <Sample/> */}
    </>
  );
}

export default App;
