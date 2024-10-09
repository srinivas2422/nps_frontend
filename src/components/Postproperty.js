import { useState } from "react";
import axios from "axios";

const Postproperty = ({ userId, handleCancel }) => {
  const [file, setFile] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({
    location: '',
    description: '',
    rent: '',
    deposit: '',
    builtupArea: '',
    furnishing: '',
    apartmentType: '',
    preferredTenants: '',
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('location', propertyDetails.location);
    formData.append('description', propertyDetails.description);
    formData.append('rent', propertyDetails.rent);
    formData.append('deposit', propertyDetails.deposit);
    formData.append('builtupArea', propertyDetails.builtupArea);
    formData.append('furnishing', propertyDetails.furnishing);
    formData.append('apartmentType', propertyDetails.apartmentType);
    formData.append('preferredTenants', propertyDetails.preferredTenants);
    formData.append('userId', userId);
    
    try {
      const response = await axios.post('http://localhost:5000/api/usersprop/properties', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setPropertyDetails({
        location: '',
        description: '',
        rent: '',
        deposit: '',
        builtupArea: '',
        furnishing: '',
        apartmentType: '',
        preferredTenants: '',
      });
      setFile(null);
      console.log("Property has been posted");

      // Notify parent component to refetch properties
      handleCancel(true); // passing true to indicate a new property was posted
    } catch (error) {
      console.error('Error posting property:', error);
    }
  };

  const handleChange = (e) => {
    setPropertyDetails({
      ...propertyDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">Post a New Property</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Property Image</label>
            <input type="file" className="form-control" id="image" onChange={handleFileChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea  className="form-control"  id="description"  name="description"  value={propertyDetails.description}  onChange={handleChange}  required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input  type="text"  className="form-control"  id="location"  name="location"  value={propertyDetails.location}  onChange={handleChange}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="rent" className="form-label">Rent Amount</label>
            <input  type="number"  className="form-control"  id="rent"  name="rent"  value={propertyDetails.rent}  onChange={handleChange}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="deposit" className="form-label">Deposit Amount</label>
            <input  type="number"  className="form-control"  id="deposit"  name="deposit"  value={propertyDetails.deposit}  onChange={handleChange}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="builtupArea" className="form-label">Built-up Area (sq ft)</label>
            <input  type="number"  className="form-control"  id="builtupArea"  name="builtupArea"  value={propertyDetails.builtupArea}  onChange={handleChange}  required/>
          </div>
          <div className="mb-3">
            <label htmlFor="furnishing" className="form-label">Furnishing</label>
            <select  className="form-control"  id="furnishing"  name="furnishing"  value={propertyDetails.furnishing}  onChange={handleChange}  required>
              <option value="">Select</option>
              <option value="FullyFurnished">Fully Furnished</option>
              <option value="SemiFurnished">Semi Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="apartmentType" className="form-label">Apartment Type</label>
            <select  className="form-control"  id="apartmentType"  name="apartmentType"  value={propertyDetails.apartmentType}  onChange={handleChange}  required>
              <option value="">Select</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
              <option value="4BHK+">4BHK+</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="preferredTenants" className="form-label">Preferred Tenants</label>
            <select  className="form-control"  id="preferredTenants"  name="preferredTenants"  value={propertyDetails.preferredTenants}  onChange={handleChange}  required>
              <option value="">Select</option>
              <option value="Family">Family</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={() => handleCancel(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Postproperty;

