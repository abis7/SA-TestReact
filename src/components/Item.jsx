export default function Item({ item, incremento, decremento, eliminarDelCarrito }) {
  const { id, name, image, price, quantity } = item
  const imageSrc = `/img/${image}.jpg`

  return (
    <tr>
      <td>
        <img className="img-fluid" src={imageSrc} alt={name} />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => decremento(id)}
        >
          -
        </button>
        {quantity}
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => incremento(id)}
        >
          +
        </button>
      </td>
      <td>
        <button 
          className="btn btn-danger" 
          type="button"
          onClick={() => eliminarDelCarrito(id)}
        >
          X
        </button>
      </td>
    </tr>
  )
}