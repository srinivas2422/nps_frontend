import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Postproperty from "./Postproperty";
import Property from "./Property";
import Editproperty from "./Editproperty";

const YourProperties = ({ userId, isAuthenticated }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState([]);
  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/usersprop/properties/user/${userId}`
      );
      setProperties(response.data);
      // let  id=response.data._id;
    } catch (err) {
      setError("Error fetching properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchProperties();
  }, [userId]);

  const handleCancel = (propertyPosted) => {
    setIsPosting(false);
    if (propertyPosted) {
      fetchProperties();
    }
  };

  const handleEditing = () => {
    setIsEditing(false);
    fetchProperties();
  }

  const handleEdit = (id) => {
    // Add logic to edit the property details
    setId(id);
    setIsEditing(true);
};

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/usersprop/property/${id}`);
    setProperties(properties.filter(property => property._id !== id));
    console.log(response.data.message);
  } catch (err) {
    setError("Error deleting property. Please try again later.");
  }
};


  const handlePostProperty = () => {
    if (isAuthenticated) {
      setIsPosting(true);
    } else {
      setMessage("Please login to post property");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isPosting) {
    return <Postproperty userId={userId} handleCancel={handleCancel} />;
  }

  if(isEditing) {
    return <Editproperty id={id} handleEditing={handleEditing}/>
  }

  return (
    <div className="container">
      <h3 className="my-2">Your Properties</h3>
      {properties.length === 0 ? (
        <>
          <div className="alert alert-info" role="alert">
            You have not posted any properties yet.
          </div>
          {message && (
            <div className="alert alert-danger mt-3" role="alert">
              {message}
            </div>
          )}
          <button onClick={handlePostProperty} className="btn btn-danger">
            Post a Property
          </button>
        </>
      ) : (
        <>
        <Property properties={properties}  showDetails={false} onEdit={handleEdit} onDelete={handleDelete} />
        <button onClick={handlePostProperty} className="btn btn-danger">
            Post a Property
          </button>
        </>
      )}
    </div>
  );
};

export default YourProperties;
