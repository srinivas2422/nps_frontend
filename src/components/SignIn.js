import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ title, btn, onSignIn }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiEndpoint = '';

    // Set the API endpoint based on the btn prop
    if (btn.toLowerCase() === 'sign in') {
      apiEndpoint = 'http://localhost:5000/api/users/signin';
    } else if (btn.toLowerCase() === 'sign up') {
      apiEndpoint = 'http://localhost:5000/api/users/signup';
    }

    try {
      const response = await axios.post(apiEndpoint, { phone, password });
      console.log(response.data.message);
      onSignIn(response.data.userId);
      setTimeout(() => {
        navigate('/');
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 signin-card">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">{title}</h2>
          {message && (
            <div className="alert alert-danger mt-3" role="alert">
              {message}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control signin-form"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              autoComplete="tel"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control signin-form"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 signin-btn">
            {btn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
