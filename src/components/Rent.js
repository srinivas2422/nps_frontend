import Property from "./Property";
import SearchBar from "./SearchBar";
import { useState,useEffect } from "react";
import axios from "axios";
const Rent = () => {
  const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/usersprop/properties');
                
                    setProperties(response.data);
                
            } catch (err) {
                setError('An error occurred while fetching properties');
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);
    if (loading) return <p>Loading properties...</p>;
    if (error) return <p>{error}</p>;
  return (
    <>
      <SearchBar />
      <Property properties={properties}  showDetails={true}/>
    </>
  );
};

export default Rent;
