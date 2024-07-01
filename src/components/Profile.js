import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YourProperties from  './Yourproperties';

const Profile = ({ user, isAuthenticated }) => {
  const [activeSection, setActiveSection] = useState('basicInfo');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
              Basic Info
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
        <div className="col-md-9" >{/*set height */}
          {activeSection === 'basicInfo' && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Basic Info Section</h5>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    id="phone"
                    value={userInfo.phone}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="string"
                    className="form-control"
                    id="password"
                    value={userInfo.password}
                    readOnly
                  />
                </div>
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
            <YourProperties userId={user} isAuthenticated={isAuthenticated} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
