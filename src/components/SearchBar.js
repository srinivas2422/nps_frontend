import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex align-items-center input">
            <div className="input-group my-3">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
              />
              <button className="btn btn-outline-info" type="button" id="button-addon2"
              > <i className="bi bi-search"></i>
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
              <li className="nav-item dropdown"> <Link   className="btn btn-outline-secondary dropdown-toggle"   to="/"   role="button"   data-bs-toggle="dropdown"   aria-expanded="false" >   Property Type </Link> <ul className="dropdown-menu">   <li>     <Link className="dropdown-item" to="/">       Apartment     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       Independent House     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       Colive/pg     </Link>   </li> </ul>
              </li>
              <li className="nav-item dropdown"> <Link   className="btn btn-outline-secondary  dropdown-toggle"   to="/"   role="button"   data-bs-toggle="dropdown"   aria-expanded="false" >   BHK Type </Link> <ul className="dropdown-menu">   <li>     <Link className="dropdown-item" to="/">       1 BHK     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       2 BHK     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       3 BHK     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       4 BHK     </Link>   </li>   <li>     <Link className="dropdown-item" to="/">       4+ BHK     </Link>   </li> </ul>
              </li>

              <li className="nav-item"> <button   className="btn btn-outline-secondary "   type="button"   data-bs-toggle="offcanvas"   data-bs-target="#offcanvasResponsive"   aria-controls="offcanvasResponsive" >   Filter <i className="bi bi-filter"></i> </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas offcanvas-end"
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
              <div> <input   className="form-check-input"   type="checkbox"   id="apartment" /> <label className="form-check-label" htmlFor="apartment">   Apartment </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="independentHouse" /> <label className="form-check-label" htmlFor="independentHouse">   Independent House </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Available For</h6>
            <div>
              <div> <input className="form-check-input" type="checkbox" id="boys" /> <label className="form-check-label" htmlFor="boys">   Boys </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="girls" /> <label className="form-check-label" htmlFor="girls">   Girls </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="family" /> <label className="form-check-label" htmlFor="family">   Family </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>BHK Type</h6>
            <div>
              <div> <input className="form-check-input" type="checkbox" id="1rk" /> <label className="form-check-label" htmlFor="1rk">   1 BHK </label>
              </div>
              <div> <input className="form-check-input" type="checkbox" id="2bhk" /> <label className="form-check-label" htmlFor="2bhk">   2 BHK </label>
              </div>
              <div> <input className="form-check-input" type="checkbox" id="3bhk" /> <label className="form-check-label" htmlFor="3bhk">   3 BHK </label>
              </div>
              <div> <input className="form-check-input" type="checkbox" id="4bhk" /> <label className="form-check-label" htmlFor="4bhk">   4 BHK </label>
              </div>
              <div> <input className="form-check-input" type="checkbox" id="5bhk" /> <label className="form-check-label" htmlFor="5bhk">   5 BHK </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Budget</h6>
            <div>
              <div> <input   className="form-check-input"   type="checkbox"   id="below5k" /> <label className="form-check-label" htmlFor="below5k">   Below 5K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="5k10k" /> <label className="form-check-label" htmlFor="5k10k">   5K - 10K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="10k15k" /> <label className="form-check-label" htmlFor="10k15k">   10K - 15K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="15k20k" /> <label className="form-check-label" htmlFor="15k20k">   15K - 20K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="20k30k" /> <label className="form-check-label" htmlFor="20k30k">   20K - 30K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="30k40k" /> <label className="form-check-label" htmlFor="30k40k">   30K - 40K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="40k50k" /> <label className="form-check-label" htmlFor="40k50k">   40K - 50K </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="above50k" /> <label className="form-check-label" htmlFor="above50k">   Above 50K+ </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Furnishing Type</h6>
            <div>
              <div> <input   className="form-check-input"   type="checkbox"   id="fullyFurnished" /> <label className="form-check-label" htmlFor="fullyFurnished">   Fully Furnished </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="semiFurnished" /> <label className="form-check-label" htmlFor="semiFurnished">   Semi Furnished </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="unfurnished" /> <label className="form-check-label" htmlFor="unfurnished">   Unfurnished </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Carpet Area</h6>
            <div>
              <div> <input   className="form-check-input"   type="checkbox"   id="below500" /> <label className="form-check-label" htmlFor="below500">   Below 500 </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="500to1000" /> <label className="form-check-label" htmlFor="500to1000">   500 - 1000 </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="1000to1500" /> <label className="form-check-label" htmlFor="1000to1500">   1000 - 1500 </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="1500to2000" /> <label className="form-check-label" htmlFor="1500to2000">   1500 - 2000 </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="2000to3000" /> <label className="form-check-label" htmlFor="2000to3000">   2000 - 3000 </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="above3000" /> <label className="form-check-label" htmlFor="above3000">   Above 3000+ </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Parking</h6>
            <div>
              <div> <input   className="form-check-input"   type="checkbox"   id="twoWheeler" /> <label className="form-check-label" htmlFor="twoWheeler">   Two Wheeler </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="fourWheeler" /> <label className="form-check-label" htmlFor="fourWheeler">   Four Wheeler </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6>Availability</h6>
            <div>
              <div> <input   className="form-check-input"   type="checkbox"   id="immediate" /> <label className="form-check-label" htmlFor="immediate">   Immediate </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="within7days" /> <label className="form-check-label" htmlFor="within7days">   Within 7 Days </label>
              </div>
              <div> <input   className="form-check-input"   type="checkbox"   id="within15days" /> <label className="form-check-label" htmlFor="within15days">   Within 15 Days </label>
              </div>
              <div> 
                <input   className="form-check-input"   type="checkbox"   id="morethan15days" /> <label className="form-check-label" htmlFor="morethan15days">   More than 15 Days </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary">Clear All</button>
            <button className="btn btn-primary">Filter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
