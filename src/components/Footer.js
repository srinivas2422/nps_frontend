import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid pt-5  footer">
      <div className="row footer-row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Flats for Rent</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              House for rent in Gachibowli
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              house for rent in Kukatpally
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              House for rent in Secunderabad
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              House for rent in Kondapur
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              House for rent in HayatNagar
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Properties & Flats for Sale</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              Flats for Sale in Banjara Hills
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              Flats for Sale in Jubilee Hills
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              Flats for Sale in Madhapur
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              Flats for Sale in Kukatpally Housing Board Colony
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              Flats for Sale in Hitech City
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>New Projects & Plots</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              New Projects in Madhapur
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              New Projects in Uppal
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              New Projects in Uppal
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              New Projects in Gachibowli
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-white">
              New Projects in Kondapur
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
        <p>© 2024 Nex Home. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <Link className="link-body-emphasis" to="/">
              <i className="bi bi-twitter custom-icon" >
                <use xlinkHref="/twitter" />
              </i>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-body-emphasis" to="/">
              <i className="bi bi-instagram custom-icon" >
              <use xlinkHref="/instagram" />
              </i>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="link-body-emphasis" to="/">
              <i className="bi bi-facebook custom-icon" >
              <use xlinkHref="/facebook" />
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
