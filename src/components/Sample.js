// import React, { useState } from 'react';

const Sample = () => {
  const flat = {
    image: '/images/house3.jpg', 
    about: '3 BHK apartment available for rent in Vasavi Shanthinikethan, located in Kondapur. It is a semi-furnished apartment built on the 6th floor out of a total of 7 floors. It is an ideal home providing beautiful views of the city’s skyline. This property is designed to suit your space needs and has 3 bedrooms and 3 bathrooms. It also includes 0 balcony. This rented Flat is North-East facing and compliant with Vastu Shastra principles. Nestled inside a gated society, this 3 BHK Flat is a perfect accommodation for families seeking a contemporary lifestyle. The built-up area of the residential property is 1700 Square feet. The carpet area of this modern rented Flat is 1275 Square feet. There is also a provision of lift facility that gives convenience to the families, especially senior citizens. The property is equipped with power backup facility. The Flat is available for a monthly rent of Rs 50,000. The security deposit payable is Rs 1,00,000.',
    location: 'Vasavi Shanthinikethan, located in Kondapur',
    amenities: [
      'Wi-Fi',
      'Air Conditioning',
      'Fully Equipped Kitchen',
      'Washer/Dryer',
      'Gym Access',
      '24/7 Security',
      'Swimming Pool',
    ],
  };

  return (
    <div className="container">
      <h1 className="m-3">
        3 BHK House In Ram Kamal Doyen For Rent In Banjara Hills
      </h1>
      <div className="flat-container">
        <img src={flat.image} alt="Flat" className="flat-image" />
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
      <div className="additional-content mt-3">
        <h2 className="mb-3">About Flat</h2>
        <p>{flat.about}</p>
        <h2 className="mb-3">Location</h2>
        <p>{flat.location}</p>
        <h2 className="mb-3">Amenities</h2>
        <ul>
          {flat.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sample;

