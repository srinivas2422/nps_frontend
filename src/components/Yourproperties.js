// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Postproperty from "./Postproperty";
// import Property from "./Property";
// import Editproperty from "./Editproperty";

// const YourProperties = ({ userId, isAuthenticated }) => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isPosting, setIsPosting] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [id, setId] = useState([]);
//   const [userInfo, setUserInfo] = useState({});
//   const navigate = useNavigate();

//   const fetchProperties = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/usersprop/properties/user/${userId}`
//       );
//       setProperties(response.data);
//     } catch (err) {
//       setError("Error fetching properties. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   }, [userId]);

//   const fetchUserDetails = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
//       console.log(response.data);
//       setUserInfo(response.data);
//     } catch (err) {
//       setError("Error fetching user details. Please try again later.");
//     }
//   }, [userId]);

//   useEffect(() => {
//     fetchProperties();
//     fetchUserDetails();
//   }, [fetchProperties, fetchUserDetails]);

//   const handleCancel = (propertyPosted) => {
//     setIsPosting(false);
//     if (propertyPosted) {
//       fetchProperties();
//     }
//   };

//   const handleEditing = () => {
//     setIsEditing(false);
//     fetchProperties();
//   };

//   const handleEdit = (id) => {
//     setId(id);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/usersprop/property/${id}`);
//       setProperties(properties.filter((property) => property._id !== id));
//       console.log(response.data.message);
//     } catch (err) {
//       setError("Error deleting property. Please try again later.");
//     }
//   };

//   const isProfileComplete = () => {
//     if(userInfo.name!=null && userInfo.phone!=null && userInfo.password!=null)
//     {
//       return true;
//     }
//     else{
//       return false;
//     }  
//   };

//   const handlePostProperty = () => {
//     if (isAuthenticated) {
//       if (isProfileComplete===true) {
//         setIsPosting(true);
//       } else {
//         setMessage("Please complete your profile to post a property.");
//       }
//     } else {
//       setMessage("Please login to post property");
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (isPosting) {
//     return <Postproperty userId={userId} handleCancel={handleCancel} />;
//   }

//   if (isEditing) {
//     return <Editproperty id={id} handleEditing={handleEditing} />;
//   }

//   return (
//     <div className="container">
//       <h3 className="my-2">Your Properties</h3>
//       {properties.length === 0 ? (
//         <>
//           <div className="alert alert-info" role="alert">
//             You have not posted any properties yet.
//           </div>
//           {message && (
//             <div className="alert alert-danger mt-3" role="alert">
//               {message}
//             </div>
//           )}
//           <button onClick={handlePostProperty} className="btn btn-danger">
//             Post a Property
//           </button>
//         </>
//       ) : (
//         <>
//           <Property properties={properties} showDetails={false} onEdit={handleEdit} onDelete={handleDelete} />
//           {message && (
//             <div className="alert alert-danger mt-3" role="alert">
//               {message}
//             </div>
//           )}
//           <button onClick={handlePostProperty} className="btn btn-danger">
//             Post a Property
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default YourProperties;



import React, { useState, useEffect, useCallback } from "react";
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
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const fetchProperties = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/usersprop/properties/user/${userId}`
      );
      setProperties(response.data);
    } catch (err) {
      setError("Error fetching properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
      console.log(response.data);
      setUserInfo(response.data);
    } catch (err) {
      setError("Error fetching user details. Please try again later.");
    }
  }, [userId]);

  useEffect(() => {
    fetchProperties();
    fetchUserDetails();
  }, [fetchProperties, fetchUserDetails]);

  const handleCancel = (propertyPosted) => {
    setIsPosting(false);
    if (propertyPosted) {
      fetchProperties();
    }
  };

  const handleEditing = () => {
    setIsEditing(false);
    fetchProperties();
  };

  const handleEdit = (id) => {
    setId(id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/usersprop/property/${id}`);
      setProperties(properties.filter((property) => property._id !== id));
      console.log(response.data.message);
    } catch (err) {
      setError("Error deleting property. Please try again later.");
    }
  };

  const isProfileComplete = () => {
    return userInfo && userInfo.name && userInfo.phone && userInfo.password;
  };

  const handlePostProperty = () => {
    if (isAuthenticated) {
      if (isProfileComplete()) {
        setIsPosting(true);
      } else {
        setMessage("Please complete your profile to post a property.");
      }
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

  if (error) {
    return <div>{error}</div>;
  }

  if (isPosting) {
    return <Postproperty userId={userId} handleCancel={handleCancel} />;
  }

  if (isEditing) {
    return <Editproperty id={id} handleEditing={handleEditing} />;
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
          <Property properties={properties} showDetails={false} onEdit={handleEdit} onDelete={handleDelete} />
          {message && (
            <div className="alert alert-danger mt-3" role="alert">
              {message}
            </div>
          )}
          <button onClick={handlePostProperty} className="btn btn-danger">
            Post a Property
          </button>
        </>
      )}
    </div>
  );
};

export default YourProperties;
