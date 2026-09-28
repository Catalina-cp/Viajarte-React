
function Navbar({ cantidadCarrito }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid px-4">

          <a
            className="navbar-brand fw-bold"
            href="#"
          >
            ✈️ VIAJARTE
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#destinos"
                >
                  Destinos
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ofertas"
                >
                  Ofertas
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                >
                  Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contacto"
                >
                  Contacto
                </a>
              </li>

            </ul>

            <div className="ms-lg-auto mt-3 mt-lg-0">
              <span className="badge text-bg-primary fs-6">
                🛒 {cantidadCarrito}
              </span>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

