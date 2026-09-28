
import { useState } from "react";

function Inspiracion() {
  const consejos = [
    "Viajar ligero te permitirá disfrutar más y moverte con mayor comodidad.",
    "Investiga las costumbres locales antes de viajar para disfrutar mejor tu destino.",
    "Guarda una copia digital de tus documentos importantes antes de comenzar tu viaje.",
    "Deja espacio en tu itinerario para descubrir lugares inesperados.",
    "Prueba la gastronomía local: también es una forma de conocer la cultura de un destino."
  ];

  const [consejo, setConsejo] = useState("");

  const mostrarConsejo = () => {
    const indice = Math.floor(Math.random() * consejos.length);
    setConsejo(consejos[indice]);
  };

  return (
    <section className="container my-5">

      <div className="inspiracion-box text-center p-4 p-md-5 rounded shadow-sm">

        <h2 className="mb-3">
          ✈️ ¿Necesitas inspiración para viajar?
        </h2>

        <p className="mb-4">
          Descubre un consejo que puede ayudarte a preparar tu próximo viaje.
        </p>

        <button
          className="btn btn-primary"
          onClick={mostrarConsejo}
        >
          Ver consejo de viaje
        </button>

        {consejo && (
          <div className="alert alert-info mt-4 mb-0">
            💡 {consejo}
          </div>
        )}

      </div>

    </section>
  );
}

export default Inspiracion;

