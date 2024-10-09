import React from "react";
import { Link } from "react-router-dom";

const Property = ({ properties, showDetails, onEdit, onDelete }) => {
  return (
    <div className="container">
      {properties.map((property) =>
        showDetails ? (
          <Link
            to={`/rent/property/${property._id}`}
            key={property._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card my-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:5000/${property.imagePath}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {property.apartmentType} House For Rent in{" "}
                      {property.location}
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
                            <span>&#8377;</span>
                            {property.rent}
                          </td>
                          <td>
                            <span>&#8377;</span>
                            {property.deposit}
                          </td>
                          <td>{property.builtupArea}</td>
                        </tr>
                        <tr>
                          <th scope="col">Furnishing</th>
                          <th scope="col">Apartment Type</th>
                          <th scope="col">Preferred Tenants</th>
                        </tr>
                        <tr>
                          <td>{property.furnishing}</td>
                          <td>{property.apartmentType}</td>
                          <td>{property.preferredTenants}</td>
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
        ) : (
          <>
            <div
              className="card my-3"
              key={property._id}
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:5000/${property.imagePath}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {property.apartmentType} House For Rent in{" "}
                      {property.location}
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
                            <span>&#8377;</span>
                            {property.rent}
                          </td>
                          <td>
                            <span>&#8377;</span>
                            {property.deposit}
                          </td>
                          <td>{property.builtupArea}</td>
                        </tr>
                        <tr>
                          <th scope="col">Furnishing</th>
                          <th scope="col">Apartment Type</th>
                          <th scope="col">Preferred Tenants</th>
                        </tr>
                        <tr>
                          <td>{property.furnishing}</td>
                          <td>{property.apartmentType}</td>
                          <td>{property.preferredTenants}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-flex gap-5">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => onEdit(property._id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => onDelete(property._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Property;
