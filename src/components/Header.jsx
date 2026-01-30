import Item from "./Item"

export default function Header({ cart }) {



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

                {cart.length === 0 ? (
                  <p className="text-center">El carrito está vacío</p>) : 
                  (<>
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
                          />
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar: <span className="fw-bold">$899</span>
                    </p>

                    <button className="btn btn-dark w-100 mt-3">
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
