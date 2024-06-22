import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/image5.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/image4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/image6.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-content">
          <h1>NEX HOME</h1>
          <h3> Where People Find Their Home</h3>
        </div>
      </div>
      <div className="card-container my-5 home-container">
        <h1>Our Services</h1>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <Link to="/rent" className="card-link home-link">
                <div className="card home-card">
                  <img
                    src="./images/image10.jpg"
                    className="card-img-top"
                    alt="Card 1"
                  />
                  <div className="card-body">
                      Rent
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/buy" className="home-link">
                <div className="card home-card">
                  <img
                    src="./images/image12.jpg"
                    className="card-img-top"
                    alt="Card 2"
                  />
                  <div className="card-body">
                      Buy
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/sell" className="home-link">
                <div className="card home-card">
                  <img
                    src="./images/image13.jpg"
                    className="card-img-top"
                    alt="Card 3"
                  />
                  <div className="card-body">
                      Sell
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/homeloan" className="home-link">
                <div className="card home-card">
                  <img
                    src="./images/image11.jpg"
                    className="card-img-top"
                    alt="Card 4"
                  />
                  <div className="card-body">
                      Home loan
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
