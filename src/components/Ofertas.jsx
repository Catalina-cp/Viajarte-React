function Ofertas() {
  return (
    <section id="ofertas" className="container my-5">

      <h2 className="text-center mb-4">
        ✈️ Ofertas especiales
      </h2>

      <div className="row g-4">

        <div className="col-12 col-md-6">
          <div className="card h-100 shadow oferta-card">

            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
              className="card-img-top"
              alt="París, Europa"
            />

            <div className="card-body text-center d-flex flex-column">

              <h3 className="card-title">
                🇪🇺 Europa Express
              </h3>

              <p className="card-text">
                Descubre los destinos más increíbles de Europa
                en una experiencia inolvidable.
              </p>

              <p className="fw-bold fs-5 mt-auto">
                Desde $799.990
              </p>

              <button className="btn btn-primary">
                Ver oferta
              </button>

            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100 shadow oferta-card">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              className="card-img-top"
              alt="Playa del Caribe"
            />

            <div className="card-body text-center d-flex flex-column">

              <h3 className="card-title">
                🏝️ Escapada al Caribe
              </h3>

              <p className="card-text">
                Relájate en playas paradisíacas y disfruta
                de unos días inolvidables.
              </p>

              <p className="fw-bold fs-5 mt-auto">
                Desde $599.990
              </p>

              <button className="btn btn-primary">
                Ver oferta
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Ofertas;