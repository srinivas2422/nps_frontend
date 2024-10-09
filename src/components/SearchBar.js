import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({
    availableFor: [],
    bhkType: [],
    budget: [],
    furnishingType: [],
    carpetArea: [],
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
    "Narayanaguda",
    "Koti",
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

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
        if (!updatedFilters[filterCategory].includes(id)) {
          updatedFilters[filterCategory].push(id);
        }
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
    onSearch(query);
  };

  const handleClearFilters = () => {
    setFilters({
      availableFor: [],
      bhkType: [],
      budget: [],
      furnishingType: [],
      carpetArea: [],
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
            <h6>Available For</h6>
            <div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bachelors"
                  checked={filters.availableFor.includes("bachelors")}
                  onChange={(e) => handleFilterChange(e, "availableFor")}
                />
                <label className="form-check-label" htmlFor="bachelors">
                  Bachelors
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="family"
                  checked={filters.availableFor.includes("family")}
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
                  id="1bhk"
                  checked={filters.bhkType.includes("1bhk")}
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="1bhk">
                  1 BHK
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="2bhk"
                  checked={filters.bhkType.includes("2bhk")}
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
                  checked={filters.bhkType.includes("3bhk")}
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
                  checked={filters.bhkType.includes("4bhk")}
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
                  id="4plusbhk"
                  checked={filters.bhkType.includes("4bhk+")}
                  onChange={(e) => handleFilterChange(e, "bhkType")}
                />
                <label className="form-check-label" htmlFor="4plusbhk">
                  4+ BHK
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
                  id="below20k"
                  checked={filters.budget.includes("below20k")}
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="below20k">
                  Below 20k
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="20to30k"
                  checked={filters.budget.includes("20to30k")}
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="20to30k">
                  20 - 30k
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="30to40k"
                  checked={filters.budget.includes("30to40k")}
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="30to40k">
                  30 - 40k
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="above40k"
                  checked={filters.budget.includes("above40k")}
                  onChange={(e) => handleFilterChange(e, "budget")}
                />
                <label className="form-check-label" htmlFor="above40k">
                  Above 40k
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
                  id="furnished"
                  checked={filters.furnishingType.includes("furnished")}
                  onChange={(e) => handleFilterChange(e, "furnishingType")}
                />
                <label className="form-check-label" htmlFor="furnished">
                  Furnished
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="semifurnished"
                  checked={filters.furnishingType.includes("semifurnished")}
                  onChange={(e) => handleFilterChange(e, "furnishingType")}
                />
                <label className="form-check-label" htmlFor="semifurnished">
                  Semi-Furnished
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="unfurnished"
                  checked={filters.furnishingType.includes("unfurnished")}
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
                  id="below1000sqft"
                  checked={filters.carpetArea.includes("below1000sqft")}
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="below1000sqft">
                  Below 1000 sqft
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="1000to2000sqft"
                  checked={filters.carpetArea.includes("1000to2000sqft")}
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="1000to2000sqft">
                  1000 - 2000 sqft
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="above2000sqft"
                  checked={filters.carpetArea.includes("above2000sqft")}
                  onChange={(e) => handleFilterChange(e, "carpetArea")}
                />
                <label className="form-check-label" htmlFor="above2000sqft">
                  Above 2000 sqft
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
