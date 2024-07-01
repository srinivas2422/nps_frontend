import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({
    propertyType: [],
    availableFor: [],
    bhkType: [],
    budget: [],
    furnishingType: [],
    carpetArea: [],
    parking: [],
    availability: [],
  });

  const [suggestions, setSuggestions] = useState([]);
  const locationSuggestions = [
    "Banjara Hills",
    "Jubilee Hills",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Hitech City",
    "Kukatpally",
    "Begumpet",
    "Ameerpet",
    "Secunderabad",
    "Somajiguda",
    "Manikonda",
    "Shaikpet",
    "Miyapur",
    "Kompally",
    "Nallagandla",
    "LB Nagar",
    "Mehdipatnam",
    "Khairatabad",
  ];

  const handleInputChange = (e) => {
    // setSearchInput(e.target.value);
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = locationSuggestions.filter(
      (location) =>
        location.toLowerCase().includes(inputValue.toLowerCase()) &&
        inputValue.trim() !== ""
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  const handleFilterChange = (e, filterCategory) => {
    const { id, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[filterCategory].push(id);
      } else {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
          (item) => item !== id
        );
      }
      return updatedFilters;
    });
  };

  const handleSearch = () => {
    const query = {
      searchInput,
      filters,
    };
    console.log("Searching with query:", query);
    // Perform search logic here, e.g., make an API call with the search query
  };

  const handleClearFilters = () => {
    setFilters({
      propertyType: [],
      availableFor: [],
      bhkType: [],
      budget: [],
      furnishingType: [],
      carpetArea: [],
      parking: [],
      availability: [],
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <div className="d-flex align-items-center input">
            <div className="input-group my-3 dropdown">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={searchInput}
                onChange={handleInputChange}
              />
              <div
                className={`dropdown-menu${
                  suggestions.length > 0 ? " show" : ""
                }`}
                aria-labelledby="dropdownMenuButton"
                style={{
                  position: 'absolute',
                  width: '100%',
                  zIndex: 1000,
                  top: '100%',
                  left: 0,
                }}
              >
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleSelectSuggestion(suggestion)}
                    onMouseEnter={(e) => e.target.classList.add("hovered")}
                    onMouseLeave={(e) => e.target.classList.remove("hovered")}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <button
                className="btn btn-outline-info"
                type="button"
                id="button-addon2"
                onClick={handleSearch}
              >
                <i className="bi bi-search"></i>
              </button>
              
            </div>
            <button
              className="btn btn-primary d-lg-none ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-controls="offcanvasResponsive"
            >
              <i className="bi bi-filter"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
              <li className="nav-item dropdown">
                <Link
                  className="btn btn-outline-secondary dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Property Type
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Apartment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Independent House
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Colive/pg
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="btn btn-outline-secondary dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BHK Type
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      1 BHK
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      2 BHK
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      3 BHK
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      4 BHK
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      4+ BHK
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-secondary "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasResponsive"
                  aria-controls="offcanvasResponsive"
                >
                  Filter <i className="bi bi-filter"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-4">
            <h6>Property Type</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="apartment"
                  onChange={(e) => handleFilterChange(e, "propertyType")}
                />
                <label className="form-check-label" htmlFor="apartment">
                  Apartment
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="independentHouse"
                  onChange={(e) => handleFilterChange(e, "propertyType")}
                />
                <label className="form-check-label" htmlFor="independentHouse">
                  Independent House
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Available For</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="boys"
                  onChange={(e) => handleFilterChange(e, "availableFor")}
                />
                <label className="form-check-label" htmlFor="boys">
                  Boys
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="girls"
                  onChange={(e) => handleFilterChange(e, "availableFor")}
                />
                <label className="form-check-label" htmlFor="girls">
                  Girls
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="family"
                  onChange={(e) => handleFilterChange(e, "availableFor")}
                />
                <label className="form-check-label" htmlFor="family">
                  Family
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>BHK Type</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="1rk"
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="1rk">
                  1 BHK
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="2bhk"
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="2bhk">
                  2 BHK
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="3bhk"
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="3bhk">
                  3 BHK
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="4bhk"
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="4bhk">
                  4 BHK
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="5bhk"
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="5bhk">
                  5 BHK
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Budget</h6>
            <div>
              
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="below10k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="below10k">
                  below 10K
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="10k20k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="10k20k">
                  10K - 20K
                </label>
              </div>
              
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="20k30k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="20k30k">
                  20K - 30K
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="30k40k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="30k40k">
                  30K - 40K
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="40k50k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="40k50k">
                  40K - 50K
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="above50k"
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="above50k">
                  Above 50K+
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Furnishing Type</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="fullyFurnished"
                  onChange={(e) => handleFilterChange(e, "furnishingType")}
                />
                <label className="form-check-label" htmlFor="fullyFurnished">
                  Fully Furnished
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="semiFurnished"
                  onChange={(e) => handleFilterChange(e, "furnishingType")}
                />
                <label className="form-check-label" htmlFor="semiFurnished">
                  Semi Furnished
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="unfurnished"
                  onChange={(e) => handleFilterChange(e, "furnishingType")}
                />
                <label className="form-check-label" htmlFor="unfurnished">
                  Unfurnished
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Carpet Area</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="below500"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="below500">
                  Below 500
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="500to1000"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="500to1000">
                  500 - 1000
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="1000to1500"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="1000to1500">
                  1000 - 1500
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="1500to2000"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="1500to2000">
                  1500 - 2000
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="2000to3000"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="2000to3000">
                  2000 - 3000
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="above3000"
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="above3000">
                  Above 3000+
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Parking</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="twoWheeler"
                  onChange={(e) => handleFilterChange(e, "parking")}
                />
                <label className="form-check-label" htmlFor="twoWheeler">
                  Two Wheeler
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="fourWheeler"
                  onChange={(e) => handleFilterChange(e, "parking")}
                />
                <label className="form-check-label" htmlFor="fourWheeler">
                  Four Wheeler
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Availability</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="immediate"
                  onChange={(e) => handleFilterChange(e, "availability")}
                />
                <label className="form-check-label" htmlFor="immediate">
                  Immediate
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="within7days"
                  onChange={(e) => handleFilterChange(e, "availability")}
                />
                <label className="form-check-label" htmlFor="within7days">
                  Within 7 Days
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="within15days"
                  onChange={(e) => handleFilterChange(e, "availability")}
                />
                <label className="form-check-label" htmlFor="within15days">
                  Within 15 Days
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="morethan15days"
                  onChange={(e) => handleFilterChange(e, "availability")}
                />
                <label className="form-check-label" htmlFor="morethan15days">
                  More than 15 Days
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={handleClearFilters}
            >
              Clear All
            </button>
            <button className="btn btn-primary" onClick={handleSearch}>
              Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
