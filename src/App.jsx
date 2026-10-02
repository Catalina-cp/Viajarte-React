import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import Hero from "./components/Hero";
import Ofertas from "./components/Ofertas";
import Inspiracion from "./components/Inspiracion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  // Estado de los productos cargados desde el archivo JSON
  const [productos, setProductos] = useState([]);

  // Estado para controlar la carga de productos
  const [cargando, setCargando] = useState(true);

  // Estado para guardar un posible error de carga
  const [error, setError] = useState("");

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Estado del buscador
  const [busqueda, setBusqueda] = useState("");

  // Cargar productos al iniciar la aplicación
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(
          `${import.meta.env.BASE_URL}productos.json`
        );

        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos.");
        }

        const datos = await respuesta.json();

        setProductos(datos);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1
              }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ]);
    }
  };

  // Eliminar producto completamente del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter((producto) => producto.id !== id)
    );
  };

  // Aumentar cantidad
  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: producto.cantidad + 1
            }
          : producto
      )
    );
  };

  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    setCarrito(
      carrito
        .map((producto) =>
          producto.id === id
            ? {
                ...producto,
                cantidad: producto.cantidad - 1
              }
            : producto
        )
        .filter((producto) => producto.cantidad > 0)
    );
  };

  // Cantidad total de productos en el carrito
  const cantidadTotal = carrito.reduce(
    (total, producto) =>
      total + producto.cantidad,
    0
  );

  // Filtrar productos según la búsqueda
  const productosFiltrados = productos.filter((producto) =>
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
          <div className="col-12 col-md-8 position-relative">

            <input
              type="text"
              className="form-control pe-5"
              placeholder="Escribe un destino..."
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
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

        {cargando ? (
          <div className="container my-5">
            <div className="alert alert-info text-center">
              ⏳ Cargando destinos...
            </div>
          </div>
        ) : error ? (
          <div className="container my-5">
            <div className="alert alert-danger text-center">
              ❌ {error}
            </div>
          </div>
        ) : productosFiltrados.length > 0 ? (
          <ListaProductos
            productos={productosFiltrados}
            agregarAlCarrito={agregarAlCarrito}
            carrito={carrito}
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

      <Inspiracion />

      <Contacto />

      <Footer />
    </>
  );
}

export default App;