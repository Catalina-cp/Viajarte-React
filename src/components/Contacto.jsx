
import { useState } from "react";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

    setEnviado(false);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    setEnviado(true);

    setFormulario({
      nombre: "",
      email: "",
      mensaje: ""
    });
  };

  return (
    <section id="contacto" className="container my-5">

      <h2 className="text-center mb-4">
        📩 Contáctanos
      </h2>

      <div className="row justify-content-center">

        <div className="col-12 col-md-10 col-lg-8">

          <div className="contacto-box p-4 p-md-5 rounded shadow-sm">

            <form onSubmit={manejarEnvio}>

              <div className="mb-3">
                <label
                  htmlFor="nombre"
                  className="form-label"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formulario.email}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mensaje"
                  className="form-label"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="form-control"
                  rows="4"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Enviar mensaje
                </button>
              </div>

            </form>

            {enviado && (
              <div className="alert alert-success mt-4 mb-0">
                ✅ ¡Gracias por contactarnos! Hemos recibido tu mensaje.
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  );
}

export default Contacto;

