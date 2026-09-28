function Hero() {
  return (
    <header>
      <div
        id="carouselViajarte"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselViajarte"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselViajarte"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselViajarte"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Torre Eiffel en París"
            />

            <div className="carousel-caption">
              <h5>Descubre París</h5>
              <p>
                Vive la magia de la ciudad del amor.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Paisaje de Río de Janeiro"
            />

            <div className="carousel-caption">
              <h5>Vive Río de Janeiro</h5>
              <p>
                Playas, cultura y aventura te esperan.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80"
              className="d-block w-100"
              alt="Paisaje de la Patagonia"
            />

            <div className="carousel-caption">
              <h5>Explora la Patagonia</h5>
              <p>
                Naturaleza y aventura en el sur de Chile.
              </p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselViajarte"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Anterior
          </span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselViajarte"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Siguiente
          </span>
        </button>

      </div>
    </header>
  );
}

export default Hero;