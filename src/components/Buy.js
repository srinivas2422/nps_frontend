import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Buy = () => {
  return (
    <>
    <SearchBar/>
    <div className="container">
      <Link to="/" className="buy-link">
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
                  2 BHK Flat In Devika Residency For Sale In Yousufguda
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
                  3 BHK House In Ram Kamal Doyen For Sale In Banjara Hills
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
                  2 BHK House For Sale in vikas puri, sanjeeva reddy nagar
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

export default Buy;
