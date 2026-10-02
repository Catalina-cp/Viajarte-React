import ProductoCard from "./ProductoCard";

function ListaProductos({
  productos,
  agregarAlCarrito,
  carrito
}) {
  return (
    <section
      id="destinos"
      className="container-fluid my-5 px-4"
    >
      <h2 className="text-center mb-4">
        Destinos destacados
      </h2>

      <div className="row g-4">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
            carrito={carrito}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaProductos;