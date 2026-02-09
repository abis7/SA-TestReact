import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { db } from './db/db'
import './App.css'

function App() {
  
  // Función para verificar si hay algo en LocalStorage al iniciar
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  // useEffect para sincronizar el estado del carrito con LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const incremento = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decremento = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const eliminarDelCarrito = (id) => {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <div>
      <Header 
        cart={cart} 
        incremento={incremento} 
        decremento={decremento} 
        eliminarDelCarrito={eliminarDelCarrito}
        vaciarCarrito={vaciarCarrito}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Card
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;