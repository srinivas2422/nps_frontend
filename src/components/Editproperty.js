import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Editproperty = ({id,handleEditing}) => {
  const [file, setFile] = useState(null);
  const [property, setProperty] = useState({
    imagePath: '',
    description: '',
    location: '',
    rent: '',
    deposit: '',
    builtupArea: '',
    furnishing: '',
    apartmentType: '',
    preferredTenants: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/usersprop/properties/rent/${id}`);
        setProperty(response.data);
      } catch (err) {
        setError('Error fetching property details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', property.description);
    formData.append('location', property.location);
    formData.append('rent', property.rent);
    formData.append('deposit', property.deposit);
    formData.append('builtupArea', property.builtupArea);
    formData.append('furnishing', property.furnishing);
    formData.append('apartmentType', property.apartmentType);
    formData.append('preferredTenants', property.preferredTenants);

    try {
      await axios.put(`http://localhost:5000/api/usersprop/property/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      handleEditing(false);
    } catch (err) {
      setError('Error updating property details.');
      console.log(err)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h3>Edit Property</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Property Image</label>
          <input type="file" className="form-control" id="image"  onChange={handleFileChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={property.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={property.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rent Amount</label>
          <input
            type="text"
            className="form-control"
            name="rent"
            value={property.rent}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deposit Amount</label>
          <input
            type="text"
            className="form-control"
            name="deposit"
            value={property.deposit}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Builtup Area</label>
          <input
            type="text"
            className="form-control"
            name="builtupArea"
            value={property.builtupArea}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="furnishing" className="form-label">Furnishing</label>
          <select
            className="form-control"
            id="furnishing"
            name="furnishing"
            value={property.furnishing}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Fully Furnished">Fully Furnished</option>
            <option value="Semi Furnished">Semi Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="apartmentType" className="form-label">Apartment Type</label>
          <select
            className="form-control"
            id="apartmentType"
            name="apartmentType"
            value={property.apartmentType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="preferredTenants" className="form-label">Preferred Tenants</label>
          <select
            className="form-control"
            id="preferredTenants"
            name="preferredTenants"
            value={property.preferredTenants}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Family">Family</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default Editproperty;
