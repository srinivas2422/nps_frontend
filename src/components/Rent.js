import Property from "./Property";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Rent = () => {
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]); // Store all properties
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/usersprop/properties');
        setProperties(response.data);
        setAllProperties(response.data); // Save all properties
      } catch (err) {
        setError('An error occurred while fetching properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const onSearch = (query) => {
    const { searchInput, filters } = query;
    let filteredProperties = allProperties;
    if (searchInput) {
      filteredProperties = filteredProperties.filter(property =>
        property.location.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (filters) {
      if (filters.availableFor.length > 0) {
        filteredProperties = filteredProperties.filter(property => {
          const lowercasedAvailableFor = filters.availableFor.map(f => f.toLowerCase());
          return (
            lowercasedAvailableFor.includes(property.preferredTenants.toLowerCase()) ||
            property.preferredTenants.toLowerCase() === "both"
          );
        });
      }

      if (filters.bhkType.length > 0) {
        filteredProperties = filteredProperties.filter(property =>
          filters.bhkType.map(f => f.toLowerCase()).includes(property.apartmentType.toLowerCase())
        );
      }

      if (filters.budget.length > 0) {
        filteredProperties = filteredProperties.filter(property => {
          const rent = property.rent;
          return (
            (filters.budget.includes("below20k") && rent < 20000) ||
            (filters.budget.includes("20to30k") && rent >= 20000 && rent <= 30000) ||
            (filters.budget.includes("30to40k") && rent > 30000 && rent <= 40000) ||
            (filters.budget.includes("above40k") && rent > 40000)
          );
        });
      }

      if (filters.furnishingType.length > 0) {
        filteredProperties = filteredProperties.filter(property =>
          filters.furnishingType.map(f => f.toLowerCase()).includes(property.furnishing.toLowerCase())
        );
      }

      if (filters.carpetArea.length > 0) {
        filteredProperties = filteredProperties.filter(property => {
          const area = property.builtupArea;
          return (
            (filters.carpetArea.includes("below1000sqft") && area < 1000) ||
            (filters.carpetArea.includes("1000to2000sqft") && area > 1000 && area <= 2000) ||
            (filters.carpetArea.includes("above2000sqft") && area > 2000)
          );
        });
      }
    }

    setProperties(filteredProperties);
  };

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Property properties={properties} showDetails={true} />
    </>
  );
};

export default Rent;
