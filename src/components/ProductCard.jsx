export function ProductCard({ product, onAddToCart }) {
  const { nombre, descripcion, precio, imagen } = product;
  
  return  (
    <div className="tarjeta-producto tarjeta-base">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio">{precio}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
    </div>
  )
}

