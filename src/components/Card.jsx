import React from 'react'

export default function Card({ guitar, cart, setCart }) {
    const { name, image, description, price } = guitar;
    const imageSrc = `/img/${image}.jpg`;
    const handleClick = (item) => {
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        setCart(cart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([{ ...item, quantity: 1 }, ...cart]);
      }
    }


  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={imageSrc} alt={name} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button 
          type="button"
          className="btn btn-dark w-100"
          onClick={() => handleClick(guitar)}
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}