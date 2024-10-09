import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post request to backend
      await axios.post("http://localhost:5000/api/contact", formData);
      
      // Show success message
      setSuccessMessage("Thank you for contacting us! We'll get back to you soon.");
      setErrorMessage("");

      // Clear the form
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      // Show error message if submission fails
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone No</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* Message Field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Success/Error Messages */}
      {successMessage && <p className="text-success mt-3">{successMessage}</p>}
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
    </div>
  );
};

export default ContactUs;
