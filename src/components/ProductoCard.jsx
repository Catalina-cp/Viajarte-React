function ProductoCard({
  producto,
  agregarAlCarrito,
  carrito
}) {
  const estaEnCarrito = carrito.some(
    (item) => item.id === producto.id
  );

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow producto-card">

        <img
          src={producto.imagen}
          className="card-img-top"
          alt={`Destino ${producto.destino}`}
        />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title">
            {producto.destino}
          </h5>

          <p className="card-text">
            {producto.descripcion}
          </p>

          <div className="mt-auto mb-3">

            <p className="text-muted text-decoration-line-through mb-1">
              ${producto.precioNormal.toLocaleString("es-CL")}
            </p>

            <p className="fw-bold fs-5 text-primary mb-0">
              ${producto.precioOferta.toLocaleString("es-CL")}
            </p>

          </div>

          {estaEnCarrito ? (
            <button
              className="btn btn-success"
              disabled
            >
              ✓ En el carrito
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductoCard;