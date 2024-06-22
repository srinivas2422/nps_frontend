import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Rent = () => {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Link to="/rent/2bhkflat" className="buy-link">
          <div className="card my-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/images/house3.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    2 BHK Flat In Devika Residency For Rent In Yousufguda
                  </h5>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Rent</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Builtup</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>&#8377;</span>50,000
                        </td>
                        <td>
                          <span>&#8377;</span>1,50,000
                        </td>
                        <td>3000</td>
                      </tr>
                      <tr>
                        <th scope="col">Furnishing</th>
                        <th scope="col">Apartment Type</th>
                        <th scope="col">Preferred Tenants</th>
                      </tr>
                      <tr>
                        <td>Semi-furnished</td>
                        <td>2BHK</td>
                        <td>Family</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-danger">
                      Get Owner Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/" className="buy-link">
          <div className="card my-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/images/house1.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    3 BHK House In Ram Kamal Doyen For Rent In Banjara Hills
                  </h5>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Rent</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Builtup</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>&#8377;</span>1,00,000
                        </td>
                        <td>
                          <span>&#8377;</span>3,00,000
                        </td>
                        <td>5000</td>
                      </tr>
                      <tr>
                        <th scope="col">Furnishing</th>
                        <th scope="col">Apartment Type</th>
                        <th scope="col">Preferred Tenants</th>
                      </tr>
                      <tr>
                        <td>Furnished</td>
                        <td>4BHK</td>
                        <td>Family</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-danger">
                      Get Owner Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/" className="buy-link">
          <div className="card my-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/images/house2.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    2 BHK House For Rent in vikas puri, sanjeeva reddy nagar
                  </h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Rent;
