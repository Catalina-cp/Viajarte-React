import { useState } from "react";
import Navbar from "./components/Navbar";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import productos from "./productos";
import Hero from "./components/Hero";
import Ofertas from "./components/Ofertas";
import Inspiracion from "./components/Inspiracion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        { ...producto, cantidad: 1 }
      ]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter((producto) => producto.id !== id)
    );
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito
        .map((producto) =>
          producto.id === id
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        )
        .filter((producto) => producto.cantidad > 0)
    );
  };

  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <>
      <Navbar cantidadCarrito={cantidadTotal} />

      <Hero />

      <section className="container my-5">
        <h2 className="text-center mb-4">
          🔎 Buscar destinos
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8 position-relative">

            <input
              type="text"
              className="form-control pe-5"
              placeholder="Escribe un destino..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />

            {busqueda && (
              <button
                type="button"
                className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={() => setBusqueda("")}
                aria-label="Borrar búsqueda"
              >
                ✕
              </button>
            )}

          </div>
        </div>
      </section>

      <main>
        {productos.filter((producto) =>
          producto.destino
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(
              busqueda
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            )
        ).length > 0 ? (
          <ListaProductos
            productos={productos.filter((producto) =>
              producto.destino
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(
                  busqueda
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                )
            )}
            agregarAlCarrito={agregarAlCarrito}
          />
        ) : (
          <div className="container my-5">
            <div className="alert alert-warning text-center">
              🔎 No encontramos destinos para tu búsqueda.
            </div>
          </div>
        )}

        <Carrito
          carrito={carrito}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          eliminarDelCarrito={eliminarDelCarrito}
        />
      </main>

      <Ofertas />

      <Inspiracion/>

      <Contacto/>

      <Footer/>

    </>
  );
}

export default App;