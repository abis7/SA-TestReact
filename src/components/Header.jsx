import Item from "./Item"

export default function Header({ cart, incremento, decremento, eliminarDelCarrito, vaciarCarrito }) {
  
  const isEmpty = cart.length === 0;
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <img className="img-fluid" src="/img/logo.svg" alt="logo" />
          </div>

          <nav className="col-md-6 mt-5 d-flex justify-content-end">
            <div className="carrito">
              <img className="img-fluid" src="/img/carrito.png" alt="carrito" />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center m-0">El carrito está vacío</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(item => (
                          <Item
                            key={item.id}
                            item={item}
                            incremento={incremento}
                            decremento={decremento}
                            eliminarDelCarrito={eliminarDelCarrito}
                          />
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar: <span className="fw-bold">${cartTotal}</span>
                    </p>

                    <button 
                      className="btn btn-dark w-100 mt-3"
                      onClick={vaciarCarrito}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}