import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Flat = ({ isAuthenticated }) => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ownerDetails, setOwnerDetails] = useState(null);
    const [ownerLoading, setOwnerLoading] = useState(false);
    const [ownerError, setOwnerError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchOwnerDetails = async () => {
        if (isAuthenticated) {
            setOwnerLoading(true);
            try {
                const userId = property.userId;
                const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
                setOwnerDetails(response.data);
                setShowModal(true);
            } catch (err) {
                setOwnerError('An error occurred while fetching owner details');
            } finally {
                setOwnerLoading(false);
            }
        } else {
            alert('Please log in to get the owner details.');
        }
    };

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/usersprop/properties/rent/${id}`);
                setProperty(response.data);
            } catch (err) {
                setError('An error occurred while fetching property details');
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (loading) return <p>Loading property details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            {property && (
                <>
                    <h1 className="m-3">{property.apartmentType} House For Rent in {property.location}</h1>
                    <div className="flat-container">
                        <img src={`http://localhost:5000/${property.imagePath}`} alt="Flat" className="flat-image" />
                        <div className="flat-details mt-5 ms-1">
                            <table className="table table-striped table-bordered border-primary flat-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Rent</th>
                                        <th scope="col">Deposit</th>
                                        <th scope="col">Builtup</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>&#8377;</span>{property.rent}</td>
                                        <td><span>&#8377;</span>{property.deposit}</td>
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
                                <button type="button" className="btn btn-danger" onClick={fetchOwnerDetails}>
                                    Get Owner Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="additional-content mt-3">
                        <h2 className="mb-3">About Flat</h2>
                        <p>{property.description}</p>
                        <h2 className="mb-3">Location</h2>
                        <p>{property.location}</p>
                    </div>
                </>
            )}
            {ownerLoading && <p>Loading owner details...</p>}
            {ownerError && <p>{ownerError}</p>}
            {ownerDetails && (
                <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Owner Details</h5>
                            </div>
                            <div className="modal-body">
                                <p>Name: {ownerDetails.name}</p>
                                <p>Phone: {ownerDetails.phone}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop show"></div>}
        </div>
    );
};

export default Flat;
