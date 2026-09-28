
function Carrito({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito
}) {
  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.precioOferta * producto.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce(
    (suma, producto) =>
      suma + producto.cantidad,
    0
  );

  return (
    <section className="container pb-5">

      <h2 className="text-center mb-4">
        🛒 Mi carrito ({cantidadTotal})
      </h2>

      {carrito.length === 0 ? (
        <div className="alert alert-secondary text-center">
          Tu carrito está vacío.
        </div>
      ) : (
        <>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              className="card mb-3 shadow-sm"
            >
              <div className="card-body">

                <div className="row align-items-center g-3">

                  <div className="col-12 col-md-4">
                    <h5 className="mb-1">
                      {producto.destino}
                    </h5>

                    <small className="text-muted">
                      Precio oferta: $
                      {producto.precioOferta.toLocaleString("es-CL")}
                    </small>
                  </div>

                  <div className="col-12 col-md-3">

                    <div className="d-flex align-items-center justify-content-center gap-2">

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          disminuirCantidad(producto.id)
                        }
                      >
                        −
                      </button>

                      <strong>
                        {producto.cantidad}
                      </strong>

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          aumentarCantidad(producto.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="col-12 col-md-3 text-center">

                    <strong className="fs-5">
                      $
                      {(
                        producto.precioOferta *
                        producto.cantidad
                      ).toLocaleString("es-CL")}
                    </strong>

                  </div>

                  <div className="col-12 col-md-2 text-center text-md-end">

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        eliminarDelCarrito(producto.id)
                      }
                    >
                      Eliminar
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}

          <div className="text-end mt-4">

            <h4>
              Total: $
              {total.toLocaleString("es-CL")}
            </h4>

          </div>
        </>
      )}

    </section>
  );
}

export default Carrito;
