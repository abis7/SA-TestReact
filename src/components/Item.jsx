export default function Item({ item }) {
  const { name, image, price, quantity } = item
  const imageSrc = `/img/${image}.jpg`

  return (
    <tr>
      <td>
        <img className="img-fluid" src={imageSrc} alt={name} />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
        {quantity}
      </td>
      <td>
        <button className="btn btn-danger" type="button">
          X
        </button>
      </td>
    </tr>
  )
}
