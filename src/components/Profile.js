import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Yourproperties from '../components/Yourproperties';

const Profile = ({ user, isAuthenticated }) => {
  const [activeSection, setActiveSection] = useState('basicInfo');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${user}`);
        setUserInfo({
          name: response.data.name,
          phone: response.data.phone,
          password: response.data.password,
        });
      } catch (err) {
        setError('Error fetching user details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.put(`http://localhost:5000/api/users/${user}`, userInfo);
      setSuccess('User details updated successfully.');
    } catch (err) {
      setError('Error updating user details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <button
              className={`list-group-item list-group-item-action ${
                activeSection === 'basicInfo' ? 'active' : ''
              }`}
              onClick={() => handleSectionChange('basicInfo')}
            >
              Your Details
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                activeSection === 'shortlist' ? 'active' : ''
              }`}
              onClick={() => handleSectionChange('shortlist')}
            >
              Your Shortlist
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                activeSection === 'properties' ? 'active' : ''
              }`}
              onClick={() => handleSectionChange('properties')}
            >
              Your Properties
            </button>
          </div>
        </div>
        <div className="col-md-9">
          {activeSection === 'basicInfo' && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                {success && <div className="alert alert-success">{success}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={userInfo.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          )}
          {activeSection === 'shortlist' && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Your Shortlist Section</h5>
                <p className="card-text">
                  This section displays the properties you have shortlisted.
                </p>
              </div>
            </div>
          )}
          {activeSection === 'properties' && (
            <Yourproperties userId={user} isAuthenticated={isAuthenticated} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
