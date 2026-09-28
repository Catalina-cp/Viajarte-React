
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container-fluid px-4 px-md-5 py-5 text-center">

        <div className="row justify-content-center">

          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">
              ✈️ VIAJARTE
            </h5>

            <p className="mb-0">
              Descubre nuevos destinos y vive experiencias
              inolvidables.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">
              Enlaces
            </h5>

            <ul className="list-unstyled mb-0">

              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                >
                  Inicio
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#destinos"
                  className="text-white text-decoration-none"
                >
                  Destinos
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#ofertas"
                  className="text-white text-decoration-none"
                >
                  Ofertas
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="text-white text-decoration-none"
                >
                  Contacto
                </a>
              </li>

            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">
              Contacto
            </h5>

            <p className="mb-2">
              📧 contacto@viajarte.cl
            </p>

            <p className="mb-2">
              📱 +56 9 1234 5678
            </p>

            <p className="mb-0">
              📍 Santiago, Chile
            </p>
          </div>

        </div>

        <hr />

        <div>
          <p className="mb-0">
            © 2026 VIAJARTE. Todos los derechos reservados.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;

